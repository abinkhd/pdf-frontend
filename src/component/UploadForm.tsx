import { Button, Paper } from "@mui/material";
import InputFileUpload from "./common/InputFileUpload";
import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useFilename } from "../state-management/hooks/useFilename";

const paperStyle = {
  width: 300,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};
const endpoint = import.meta.env.VITE_API_URL;

const UploadForm = () => {
  const [file, setFile] = useState<any>("");
  const { filename, setFilename } = useFilename();
  const [error, setError] = useState<any>();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    setError("");
    setFile("");
    try {
      const res = await axios.post(endpoint + "upload", formData);
      setFilename(res.data.File);
    } catch (error) {
      console.log(error);
      setError(error as AxiosError);
    }
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
          <em style={{ color: "red" }}>{error?.message}</em>
        </form>
      </Paper>
    </div>
  );
};

export default UploadForm;
