import { useContext } from "react";
import SelectedPagesContext from "../context/SelectedPagesContext";

export const useSelectedPages = () => useContext(SelectedPagesContext);
