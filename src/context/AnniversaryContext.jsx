import React, { createContext, useEffect, useState } from 'react'

export const AnniversaryContext = createContext();

export const AnniversaryProvider = ({ children }) => {
  // state of bottom informative string
  const [isTextShown, setIsTextShown] = useState(true);
  const [isPopUpShown, setIsPopUpShown] = useState(false);

  useEffect(() => {
      setTimeout(() => {
          setIsPopUpShown(true);
      }, 2000);
  }, []);

  const handlePopUpClose = () => {
      setIsPopUpShown(false)
  }
  return (
    <AnniversaryContext.Provider value={{ isPopUpShown, isTextShown, handlePopUpClose}}>
      { children }
    </AnniversaryContext.Provider>
  )
}

