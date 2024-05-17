import { TextField } from "@mui/material";
import { useState } from "react";
import { useSelectedPages } from "../state-management/hooks/useSelectedPages";

export const PageOrder = () => {
  const { selectedPages, updatePage } = useSelectedPages();
  const [pageOrder, setPageOrder] = useState<string[]>();

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = e.currentTarget.value;
    const page = input.split(",");
    setPageOrder(page);
    console.log(pageOrder);
    if (page[0] === "") {
      updatePage(true, false, undefined, []);
    } else {
      updatePage(true, false, undefined, page);
    }
    // setPageOrder([...pageOrder, newValue]);
  };

  return (
    <div>
      <TextField
        value={pageOrder}
        onChange={handleOnchange}
        id="outlined-basic"
        label="Page Order"
        variant="outlined"
      />
    </div>
  );
};
