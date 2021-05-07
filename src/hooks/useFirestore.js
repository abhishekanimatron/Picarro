import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // everytime a new pic is added we listen to firestore via snapshot here
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc") //sorted by this
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          //cycle through individual documents and push to array
          documents.push({ ...doc.data(), id: doc.id }); //saving data and id of it
        });
        setDocs(documents);
      });
    //   cleaner unsub function to unsubscribe from snapshot of firebase
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
