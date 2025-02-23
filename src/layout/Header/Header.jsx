import React, { useContext } from "react";
import "./Header.scss";
import { CurrencyContext } from "../../context/CurrencyContext";

const Header = () => {
    const { currency, handleCurrencyChange } = useContext(CurrencyContext);

    return (
        <header className="header">
            <div className="logo">
                {/* <img src={logo} alt="Logo" /> */}
            </div>
            <div className="currency-selector">
                <select value={currency} onChange={handleCurrencyChange}>
                    <option value="INR">INR (₹)</option>
                    <option value="USD">USD ($)</option>
                </select>
            </div>
        </header>
    );
};

export default Header;