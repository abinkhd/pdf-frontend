import React, { useState } from "react";
import SelectedPagesContext from "./context/SelectedPagesContext";

interface Props {
  children: React.ReactNode;
}

const SelectedPagesProvider = ({ children }: Props) => {
  const [selectedPages, setSelectedPages] = useState<number[]>([]);

  const updatePage = (reset: boolean, value: boolean, pageNumber: number) => {
    console.log(reset);
    if (!reset) {
      if (value) {
        setSelectedPages([...selectedPages, pageNumber]);
      } else {
        setSelectedPages([
          ...selectedPages.filter((page) => page !== pageNumber),
        ]);
      }
    } else {
      //Check if reset.
      setSelectedPages([]);
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
