import React, { useState } from "react";

import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  // file to be uploaded by user(pic)
  const [file, setFile] = useState(null);
  // to check file type uploaded and error
  const [error, setError] = useState(null);
  // file types allowed
  const types = ["image/png", "image/jpeg", "image/jpg"];

  //   when file is uploaded
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Invalid file type.");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />

        <span>+</span>
      </label>

      <div className="output">
        {/* the right side of "and" works only if left side is true */}
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
