import { useContext } from "react";
import { FilenameContext } from "../context/FilenameContext";

export const useFilename = () => useContext(FilenameContext);
