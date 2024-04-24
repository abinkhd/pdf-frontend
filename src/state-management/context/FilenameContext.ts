import React from "react";

interface FilenameContextType {
  filename: string | undefined;
  setFilename: React.Dispatch<React.SetStateAction<string | undefined>>;  
}

export const FilenameContext = React.createContext<FilenameContextType>(
  {} as FilenameContextType
);
