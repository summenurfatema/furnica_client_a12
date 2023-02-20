import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

const  BannerSlider = ()=> {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="min-h-[550px] w-60 md:w-96 lg:w-[800px] pt-20">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://t4.ftcdn.net/jpg/02/43/45/31/240_F_243453155_GHrzx32T0tRz1sGcsCfYOSuIPHSOEBkL.jpg" className="h-96 w-60 md:w-96 lg:w-[800px]" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://t4.ftcdn.net/jpg/00/59/82/91/240_F_59829158_AXFhpBvTilwBUlU0ovu6SmZ3hLXRmjAn.jpg" className="h-96 w-60 md:w-96 lg:w-[800px]" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://t4.ftcdn.net/jpg/00/32/56/59/240_F_32565954_ePYy1qkKMBkuPztTblDFEN5ZRNaei01C.jpg" className="h-96 w-60 md:w-96 lg:w-[800px]" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://t4.ftcdn.net/jpg/02/64/83/41/240_F_264834176_NVJdceUFM7n1a1RqQnPk72vwkzKarX25.jpg" className="h-96 w-60 md:w-96 lg:w-[800px]" alt="" /></SwiperSlide>
      
      </Swiper>
    </div>
  );
}
export default BannerSlider;