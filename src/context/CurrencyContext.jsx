import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState("INR");
    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    return (
        <CurrencyContext.Provider value={{ currency, handleCurrencyChange }}>
            {children}
        </CurrencyContext.Provider>
    );
};
