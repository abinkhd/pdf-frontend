import { Checkbox } from "@mui/material";
import { FunctionComponent, useState } from "react";

const checkboxSx = { position: "absolute", left: 0, top: 0 };

export const MyCheckbox: FunctionComponent<{
  onChange: (value: boolean) => void;
}> = ({ onChange }) => {
  const [value, setValue] = useState<boolean>(false);

  const handleChange = () => {
    setValue((prev) => !prev);
    onChange?.(!value);
  };
  return <Checkbox value={value} onChange={handleChange} sx={checkboxSx} />;
};
