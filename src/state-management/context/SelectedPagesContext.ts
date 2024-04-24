import React from "react";

export interface SelectedPagesContextType {
  selectedPages: any[] | undefined;
  updatePage: (reset: boolean, value?: boolean, pageNumber?: number) => void;
}
const SelectedPagesContext = React.createContext<SelectedPagesContextType>(
  {} as SelectedPagesContextType
);

export default SelectedPagesContext;
