export const fetchProductData = () => {
    return Promise.resolve({
        title: "Classic Aquamarine and Diamond Three Stone Engagement Ring",
        base_price: 237589,
        exclusive_offer: "Get 20% off on making charges",
        reviews: 7,
        sku: "SR0160AQ",
        availability: true,
        description: "Shop fine jewellery that is perfect for any occasion. Find the perfect gift for the ones you love. Browse our stunning collection of gemstone jewellery today.",
        images: [
            "https://plus.unsplash.com/premium_photo-1678834778658-9862d9987dd3?q=80&w=2070&h=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1678834778685-ad38d25764c2?q=80&w=2070&h=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1678730056676-5dfaa08449f3?q=80&&w=2070&h=2070auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1678185086697-3eaca1430870?q=80&&w=2070&h=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        variations: {
            gemstone: ["Aquamarine", "Diamond", "Sapphire"],
            quality: ["Good", "Better", "Best", "Heirloom"],
            metal: ["White Gold", "Yellow Gold", "Rose Gold"],
            carat_weight: [1.5, 1.8, 2.0],
            ring_size: [6, 7, 8, 9, 10], // Keeping ring size but removing price modifiers
        },
        price_breakdown: {
            metal: { rate: 4567, weight: 3.87, value: 18528 },
            stones: [
                { type: "Aquamarine", carat: 1.5, value: 62748 },
                { type: "Diamond", carat: 0.46, value: 143175 },
            ],
            making_charges: 6218,
            subtotal: 230669,
            gst: 6920,
            grand_total: 237589,
        },
        price_modifiers: {
            gemstone: {
                "Aquamarine": 0,
                "Diamond": 5000,
                "Sapphire": 3000,
            },
            quality: {
                "Good": 0,
                "Better": 2000,
                "Best": 4000,
                "Heirloom": 6000,
            },
            metal: {
                "White Gold": 0,
                "Yellow Gold": 1500,
                "Rose Gold": 2000,
            },
            carat_weight: {
                1.5: 0,
                1.8: 3000,
                2.0: 5000,
            }
        },
    });
};



export const fetchRelatedProductData = () => {
    return Promise.resolve({
        rings: [
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1678834778658-9862d9987dd3?q=80&w=2070&h=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Classic Aquamarine and Diamond Three Stone Engagement Ring",
                price: 237589,
                priceRange: { min: 200000, max: 278789 }, // Price range for the product
            },
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1678834778685-ad38d25764c2?q=80&w=2070&h=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Elegant Sapphire and Diamond Halo Ring",
                price: 275000,
                priceRange: { min: 250000, max: 289827 },
            },
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1678730056676-5dfaa08449f3?q=80&&w=2070&h=2070auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Vintage Rose Gold Diamond Ring",
                price: 210000,
                priceRange: { min: 200000, max: 217853 },
            },
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1678185086697-3eaca1430870?q=80&&w=2070&h=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Modern Yellow Gold Sapphire Ring",
                price: 190000,
                priceRange: { min: 180000, max: 290897 },
            },
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1678834778658-9862d9987dd3?q=80&w=2070&h=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Classic Aquamarine and Diamond Three Stone Engagement Ring",
                price: 237589,
                priceRange: { min: 200000, max: 289765 }, // Price range for the product
            },
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1678834778685-ad38d25764c2?q=80&w=2070&h=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Elegant Sapphire and Diamond Halo Ring",
                price: 275000,
                priceRange: { min: 250000, max: 287654 },
            },
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1678730056676-5dfaa08449f3?q=80&&w=2070&h=2070auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Vintage Rose Gold Diamond Ring",
                price: 210000,
                priceRange: { min: 200000, max: 287098 },
            },
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1678185086697-3eaca1430870?q=80&&w=2070&h=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Modern Yellow Gold Sapphire Ring",
                price: 190000,
                priceRange: { min: 180000, max: 298765 },
            },
        ],
        necklaces: [
            {
                thumbnail: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Diamond and Pearl Drop Necklace",
                price: 320000,
                priceRange: { min: 300000, max: 350000 },
            },
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1681276170058-0d2398cb8169?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Diamond and Pearl Drop Necklace",
                price: 320000,
                priceRange: { min: 300000, max: 350000 },
            },
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1681276170423-2c60b95094b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Sapphire and Gold Chain Necklace",
                price: 275000,
                priceRange: { min: 250000, max: 300000 },
            }
        ],
        bracelets: [
            {
                thumbnail: "https://images.unsplash.com/photo-1534976618208-4833d5b57d08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Gold and Diamond Tennis Bracelet",
                price: 180000,
                priceRange: { min: 150000, max: 200000 },
            },
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1661385623276-4660e21355ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Gold and Diamond Tennis Bracelet",
                price: 180000,
                priceRange: { min: 150000, max: 200000 },
            },
            {
                thumbnail: "https://images.unsplash.com/photo-1534976618208-4833d5b57d08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Gold and Diamond Tennis Bracelet",
                price: 180000,
                priceRange: { min: 150000, max: 200000 },
            },
            {
                thumbnail: "https://images.unsplash.com/photo-1534976618208-4833d5b57d08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Gold and Diamond Tennis Bracelet",
                price: 180000,
                priceRange: { min: 150000, max: 200000 },
            },
            {
                thumbnail: "https://images.unsplash.com/photo-1534976618208-4833d5b57d08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Gold and Diamond Tennis Bracelet",
                price: 180000,
                priceRange: { min: 150000, max: 200000 },
            },
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1682097691349-afa9e86a166c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Ruby and White Gold Cuff Bracelet",
                price: 225000,
                priceRange: { min: 200000, max: 250000 },
            }
        ],
        earrings: [
            {
                thumbnail: "https://images.unsplash.com/photo-1625516152414-8f33eef3d660?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Emerald and Diamond Stud Earrings",
                price: 150000,
                priceRange: { min: 140000, max: 170000 },
            },
            {
                thumbnail: "https://plus.unsplash.com/premium_photo-1681276170598-8ad7feaf918e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Classic Pearl and Gold Hoop Earrings",
                price: 130000,
                priceRange: { min: 120000, max: 150000 },
            }
        ]
    });
};
