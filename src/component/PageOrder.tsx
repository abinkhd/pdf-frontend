import { TextField } from "@mui/material";
import { useState } from "react";
import { useSelectedPages } from "../state-management/hooks/useSelectedPages";
export const PageOrder = () => {
  const { selectedPages, updatePage } = useSelectedPages();
  const [pageOrder, setPageOrder] = useState<any>();
  const [error, setError] = useState<string>();

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = e.currentTarget.value;
    const regex = /[^0-9][^0-9]*$/.test(input);
    if (regex) {
      setError("Alphabets/Special Characters are not allowed");
      setPageOrder("");
    } else if (input === "") {
      setPageOrder("");
    } else {
      const page = input + ",";
      const pageNoOrder = [...new Set(input.split(","))];
      setError("");
      setPageOrder(page);
      if (page[0] === "") {
        updatePage(true, false, undefined, []);
      } else {
        updatePage(true, false, undefined, pageNoOrder);
      }
    }
    // setPageOrder([...pageOrder, newValue]);
  };

  return (
    <div className="pageOrderDiv">
      <TextField
        value={pageOrder}
        onChange={handleOnchange}
        id="outlined-basic"
        label="Page Order"
        variant="outlined"
      />
      <em style={{ fontSize: "x-small", color: "red" }}>{error}</em>
    </div>
  );
};
