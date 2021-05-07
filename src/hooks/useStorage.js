import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // reference of storage
    const storageRef = projectStorage.ref(file.name); //to fill name
    const collectionRef = projectFirestore.collection("images"); //collection of image files on fb

    storageRef.put(file).on(
      "state-changed",
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100; //progress percent of file
        setProgress(percent);
      },
      (err) => {
        // if error occurs
        setError(err);
      },
      async () => {
        // when upload is completed
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();

        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
