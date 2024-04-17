import React, { useState } from "react";
import SelectedPagesContext from "./context/SelectedPagesContext";

interface Props {
  children: React.ReactNode;
}

const SelectedPagesProvider = ({ children }: Props) => {
  const [selectedPages, setSelectedPages] = useState<number[]>([]);

  const updatePage = (value: boolean, pageNumber: number) => {
    if (value) {
      setSelectedPages([...selectedPages, pageNumber]);
    } else {
      setSelectedPages([
        ...selectedPages.filter((page) => page !== pageNumber),
      ]);
    }
    // setSelectedPages()
  };

  return (
    <SelectedPagesContext.Provider value={{ selectedPages, updatePage }}>
      {children}
    </SelectedPagesContext.Provider>
  );
};

export default SelectedPagesProvider;
