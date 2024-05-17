import React, { useState } from "react";
import SelectedPagesContext from "./context/SelectedPagesContext";

interface Props {
  children: React.ReactNode;
}

const SelectedPagesProvider = ({ children }: Props) => {
  const [selectedPages, setSelectedPages] = useState<any[]>([]);
  // Update Pag logic

  const updatePage = (
    value: boolean,
    reset: boolean,
    pageNumber?: number,
    pageOrder?: any[]
  ) => {
    console.log(reset);
    console.log(value);

    if (!reset) {
      if (pageNumber) {
        if (value) {
          setSelectedPages([...selectedPages, pageNumber]);
        } else {
          setSelectedPages([
            ...selectedPages.filter((page) => page !== pageNumber),
          ]);
        }
      } else if (pageOrder) {
        setSelectedPages(pageOrder);
      }
    } else {
      // if reset Logic.
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
