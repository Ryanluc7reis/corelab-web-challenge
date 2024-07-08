import React, { createContext, useState } from 'react'

export const PopUpContext = createContext()

export const PopUpProvider = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState(false)
  return <PopUpContext.Provider value={[showPopUp, setShowPopUp]}>{children}</PopUpContext.Provider>
}
