import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import sl1 from "../assets/home/slide1.jpg";
import sl2 from "../assets/home/slide2.jpg";
import sl3 from "../assets/home/slide3.jpg";
import SectionTitle from "../Shared/Section/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"from 8 am to 12 pm "}
        subHeading={"Order now"}
      ></SectionTitle>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sl1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sl2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sl3} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
