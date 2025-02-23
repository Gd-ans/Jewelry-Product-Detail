import React, { useState, useEffect, useContext } from "react";
import "./ProductInfoSection.scss";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CurrencyContext } from "../../context/CurrencyContext"; // Import the CurrencyContext

const ProductInfoSection = ({
    title,
    reviews,
    caratWeight,
    variations,
    price_breakdown,
    price_modifiers,
    sku,
    availability
}) => {
    // Access the currency state and handler from CurrencyContext
    const { currency, handleCurrencyChange } = useContext(CurrencyContext);

    // Function to convert price based on currency
    const convertPrice = (price) => {
        const conversionRates = {
            USD: 0.012, // Example conversion rate: 1 INR = 0.012 USD
            INR: 1,     // 1 INR = 1 INR
        };
        return (price * conversionRates[currency]).toFixed(2);
    };

    const getDefaultSelections = (price_breakdown) => {
        return {
            gemstone: price_breakdown.stones[0]?.type || "Aquamarine",
            quality: "Good",
            metal: "White Gold",
            carat_weight: price_breakdown.stones[0]?.carat || 1.5,
            ring_size: 6,
        };
    };

    const [selectedVariations, setSelectedVariations] = useState(getDefaultSelections(price_breakdown));
    const [grandTotal, setGrandTotal] = useState(price_breakdown.grand_total);
    const [isOpen, setIsOpen] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);

    const handleSelection = (key, value) => {
        setSelectedVariations((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    useEffect(() => {
        let newTotal = price_breakdown.subtotal;

        Object.keys(selectedVariations).forEach((key) => {
            const selectedValue = selectedVariations[key];
            if (price_modifiers[key] && price_modifiers[key][selectedValue] !== undefined) {
                newTotal += price_modifiers[key][selectedValue];
            }
        });

        const gstPercentage = 3;
        const gstAmount = Math.floor((newTotal * gstPercentage) / 100);
        newTotal += gstAmount;

        setGrandTotal(newTotal);
    }, [selectedVariations, price_breakdown, price_modifiers]);

    const priceBreakdownToggel = () => {
        setIsOpen(!isOpen);
    };

    const toggleWishlist = () => {
        if (isInWishlist) {
            toast.info('Removed from Wishlist', {
                position: 'top-right',
                autoClose: 2000,
            });
        } else {
            toast.success('Added to Wishlist', {
                position: 'top-right',
                autoClose: 2000,
            });
        }
        setIsInWishlist(!isInWishlist);
    };

    const addToCart = () => {
        toast.success('Added to Cart', {
            position: 'top-right',
            autoClose: 2000,
        });
        console.log('Added to cart:', product.name);
    };

    return (
        <div className={`product-info-section`}>
            <h1>{title}</h1>
            <p style={{ fontSize: "14px" }}>SKU: <span>{sku}</span></p>
            <p className="reviews">{reviews} Reviews</p>
            <p className="price">
                {currency === "INR" ? "₹" : "$"}
                {convertPrice(grandTotal).toLocaleString()}{" "}
                <span style={{ color: "#000", fontSize: "12px" }}>( MRP incl. of all taxes )</span>
            </p>

            {Object.keys(variations).map((key) => (
                <div key={key} className="variation-section">
                    <label>{key.replace("_", " ").toUpperCase()}:</label>
                    <div className="variation-options">
                        {variations[key].map((val, index) => (
                            <button
                                key={index}
                                className={selectedVariations[key] === val ? "selected" : ""}
                                onClick={() => handleSelection(key, val)}
                            >
                                {val}
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            <div className={`add-to-cart-wrapper `}>
                <div onClick={toggleWishlist} className="wishlist-btn">
                    {isInWishlist ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart style={{ color: 'grey' }} />}
                </div>
                <div className={`addToCart-btn  ${!availability && "not-applicable"}`} onClick={addToCart}>
                    <p>
                        {currency === "INR" ? "₹" : "$"}
                        {convertPrice(grandTotal).toLocaleString()}
                    </p>
                    <span>{!availability ? " Out of stock " : "Add to Cart "}</span>
                </div>
            </div>

            <div className="price-breakdown-wrap" onClick={priceBreakdownToggel}>
                <p className="price-breakdown-para">Price breakdown</p>
                <div className={`toggle-button ${isOpen ? "open" : ""}`}>
                    <span className="icon"></span>
                </div>
            </div>

            {isOpen && (
                <PriceBreakdown
                    price_breakdown={price_breakdown}
                    selectedVariations={selectedVariations}
                    price_modifiers={price_modifiers}
                    variations={variations}
                    currency={currency} // Pass currency to PriceBreakdown
                    convertPrice={convertPrice} // Pass conversion function
                />
            )}
            <ToastContainer />
        </div>
    );
};

export default ProductInfoSection;