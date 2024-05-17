import React from "react";

export interface SelectedPagesContextType {
  selectedPages: any[] | undefined;
  updatePage: (
    value: boolean,
    reset: boolean,
    pageNumber?: number,
    pageOrder?: any[]
  ) => void;
}
const SelectedPagesContext = React.createContext<SelectedPagesContextType>(
  {} as SelectedPagesContextType
);

export default SelectedPagesContext;
