import React from "react";
import "./PriceBreakdown.scss";

const PriceBreakdown = ({
    price_breakdown,
    selectedVariations,
    price_modifiers,
    variations,
    currency, // Currency prop
    convertPrice, // Conversion function prop
}) => {
    // Calculate the total price with modifiers
    let subtotal = price_breakdown.subtotal;

    // Apply price modifiers for each selected variation
    Object.keys(selectedVariations).forEach((key) => {
        const selectedValue = selectedVariations[key];
        if (price_modifiers[key] && price_modifiers[key][selectedValue] !== undefined) {
            subtotal += price_modifiers[key][selectedValue];
        }
    });

    // Calculate making charges and GST
    const makingCharges = price_breakdown.making_charges;
    const gstPercentage = 3;
    const gstAmount = Math.floor((subtotal * gstPercentage) / 100);
    const grandTotal = subtotal + gstAmount;

    // Function to format price with currency symbol
    const formatPrice = (price) => {
        return `${currency === "INR" ? "₹" : "$"}${convertPrice(price).toLocaleString()}`;
    };

    return (
        <div className="price-breakdown">
            {/* Variants Table */}
            <h3>Variants Details</h3>
            <div className="price-breakdown-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Variant Type</th>
                            <th>Selected Option</th>
                            <th>Price Modifier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(variations).map((key) => {
                            const selectedValue = selectedVariations[key];
                            const priceModifier = price_modifiers[key]?.[selectedValue] || 0;
                            return (
                                <tr key={key}>
                                    <td>{key.replace("_", " ").toUpperCase()}</td>
                                    <td>{selectedValue}</td>
                                    <td>
                                        {priceModifier !== 0
                                            ? formatPrice(priceModifier)
                                            : "-"}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Making Charges</td>
                            <td>{formatPrice(makingCharges)}</td>
                        </tr>
                        <tr>
                            <td>Subtotal</td>
                            <td>{formatPrice(subtotal)}</td>
                        </tr>
                        <tr>
                            <td>GST ({gstPercentage}%)</td>
                            <td>{formatPrice(gstAmount)}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Grand Total</strong>
                            </td>
                            <td>
                                <strong>{formatPrice(grandTotal)}</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PriceBreakdown;