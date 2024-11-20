import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    // menu state 
    const [ isClicked, setIsClicked ] = useState(false);
    // state for the navbars for mobile
    const [isActive, setIsActive] = useState(false);

    const handleMenuClose = () => {
        setIsClicked(false);
        setIsActive(false)
    };


    const toggleMenu = () => {
        setIsActive(!isActive)
    }
    return (
        <MenuContext.Provider value={{ isClicked, setIsClicked, handleMenuClose, isActive, toggleMenu }}>
            { children }
        </MenuContext.Provider>
    );
};