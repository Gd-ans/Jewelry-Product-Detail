import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./RelatedProducts.scss";
import { fetchRelatedProductData } from "../../utils/api";

const RelatedProducts = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("rings");
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState({}); // Store all fetched data

    useEffect(() => {
        fetchRelatedProductData().then((data) => {
            setCategories(Object.keys(data)); // Store category names
            setAllProducts(data); // Store all fetched products
            setProducts(data[selectedCategory] || []); // Set initial products
        });
    }, []);

    useEffect(() => {
        setProducts(allProducts[selectedCategory] || []);
    }, [selectedCategory, allProducts]);

    return (
        <div className="related-products">
            <p className="related-prod-heading-para">You May Also Like</p>

            {/* Category Tabs */}
            <div className="category-tabs">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={category === selectedCategory ? "active" : ""}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            {/* Swiper Slider for Products */}
            <div className="related-products-slider">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        767: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="product-card">
                                <div className="img-wrap">
                                    <img src={product.thumbnail} alt={product.name} />
                                </div>
                                <p className="product-name">{product.name}</p>
                                <div className="price-wrap">
                                    <p className="price">₹{product.price}</p>
                                    {product.priceRange && (
                                        <p className="price-range">
                                            ₹{product.priceRange.min} - ₹{product.priceRange.max}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default RelatedProducts;
