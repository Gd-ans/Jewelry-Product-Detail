import React, { useState, useEffect, useRef } from "react";
import { fetchProductData, fetchRelatedProductData } from "../utils/api";
import ProductImageSection from "../components/ProductImageSection/ProductImageSection";
import ProductInfoSection from "../components/ProductInfoSection/ProductInfoSection";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import "./ProductDetails.scss";

const ProductDetailPage = () => {
    const [product, setProduct] = useState(null);
    const [relatedProduct, setRelatedProduct] = useState(null);
    const jsonLdScriptRef = useRef(null);

    useEffect(() => {
        fetchProductData().then((data) => setProduct(data));
        fetchRelatedProductData().then((data) => setRelatedProduct(data));
    }, []);

    useEffect(() => {
        if (product) {
            document.title = `${product.title} | Jewelry Store`;

            const updateMetaTag = (name, content, property = "name") => {
                if (!content) return;
                let metaTag = document.querySelector(`meta[${property}='${name}']`);
                if (!metaTag) {
                    metaTag = document.createElement("meta");
                    metaTag.setAttribute(property, name);
                    document.head.appendChild(metaTag);
                }
                metaTag.setAttribute("content", content);
            };

            updateMetaTag("description", product.description);
            updateMetaTag("keywords", "rings, sapphire, gold, wedding, jewelry");
            updateMetaTag("og:title", product.title, "property");
            updateMetaTag("og:description", product.description, "property");
            updateMetaTag("og:image", product.images?.[0] || "", "property");
            updateMetaTag("og:url", window.location.href, "property");

            if (!jsonLdScriptRef.current) {
                jsonLdScriptRef.current = document.createElement("script");
                jsonLdScriptRef.current.type = "application/ld+json";
                jsonLdScriptRef.current.id = "json-ld-product";
                document.head.appendChild(jsonLdScriptRef.current);
            }
            jsonLdScriptRef.current.innerHTML = JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": product.title,
                "image": product.images?.[0] || "",
                "description": product.description,
                "brand": "Luxury Jewels",
                "sku": product.sku,

            });
        }
    }, [product]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail-page">
            <div className="product-container">
                <ProductImageSection images={product.images} />
                <div>
                    <ProductInfoSection
                        title={product.title}
                        reviews={product.reviews}
                        caratWeight={product.carat_weight}
                        variations={product.variations}
                        price={product.base_price}
                        price_breakdown={product.price_breakdown}
                        price_modifiers={product.price_modifiers}
                        sku={product.sku}
                        availability={product.availability}
                    />
                </div>
            </div>
            <div className="related-product-main-wrapper">
                <RelatedProducts products={relatedProduct} />
            </div>
        </div>
    );
};

export default ProductDetailPage;
