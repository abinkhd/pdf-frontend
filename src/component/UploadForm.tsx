import { Button, Paper } from "@mui/material";
import InputFileUpload from "./InputFileUpload";
import React, { useState } from "react";
import axios from "axios";

const paperStyle = {
  width: 300,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const UploadForm = () => {
  const [file, setFile] = useState<any>();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:5000/upload", formData);
    console.log(res);
  }
  return (
    <div className="container">
      <Paper sx={paperStyle}>
        <form onSubmit={handleSubmit} className="form">
          <h2>Upload your pdf here!!</h2>
          <div>
            <InputFileUpload onChange={handleOnChange} />
          </div>
          <div>
            <Button
              variant="contained"
              disabled={file ? false : true}
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default UploadForm;
