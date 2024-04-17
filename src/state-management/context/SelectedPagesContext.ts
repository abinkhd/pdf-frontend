import React from "react";

export interface SelectedPagesContextType {
  selectedPages: any[] | undefined;
  updatePage: (value: boolean, pageNumber: number) => void;
}
const SelectedPagesContext = React.createContext<SelectedPagesContextType>(
  {} as SelectedPagesContextType
);

export default SelectedPagesContext;
