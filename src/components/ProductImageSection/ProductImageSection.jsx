import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "react-medium-image-zoom/dist/styles.css";
import "./ProductImageSection.scss";

const ProductImageSection = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="product-image-section">
            {/* Main Swiper for the large image */}
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className="main-swiper"
            >
                {images?.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Zoom>
                            <div className="image-wrap">
                                <img src={img} alt={`Product Image ${index + 1}`} />
                            </div>
                        </Zoom>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnail Swiper */}
            <Swiper
                onSwiper={setThumbsSwiper} // Set the thumbsSwiper state
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="thumbnail-swiper"
            >
                {images?.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="thumbnail-swiper-img-wrap">
                            <img src={img} alt={`Thumbnail ${index + 1}`}
                                srcSet={`
                            ${img}?w=480 480w, 
                            ${img}?w=768 768w, 
                            ${img}?w=1024 1024w, 
                            ${img}?w=1440 1440w
                          `}
                                sizes="(max-width: 600px) 480px, 
                                 (max-width: 1024px) 768px, 
                                 1024px"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductImageSection;