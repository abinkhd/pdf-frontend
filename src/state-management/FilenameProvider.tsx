import React, { useState } from "react";
import { FilenameContext } from "./context/FilenameContext";

interface Props {
  children: React.ReactNode;
}

const FilenameProvider = ({ children }: Props) => {
  const [filename, setFilename] = useState<string | undefined>("");
  return (
    <FilenameContext.Provider value={{ filename, setFilename }}>
      {children}
    </FilenameContext.Provider>
  );
};

export default FilenameProvider;
