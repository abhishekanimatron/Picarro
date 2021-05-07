import React from "react";

import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion"; //animation minimal package

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          // motion element
          <motion.div
            className="img-wrap"
            whileHover={{ opacity: 1 }} //by default its .8
            layout //animates
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }} //1second
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
