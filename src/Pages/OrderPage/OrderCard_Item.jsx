import React from "react";
import FoodCard from "./FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderCard_Item = ({ item }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const chunkArray = (items, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < items.length; i += chunkSize) {
      chunks.push(items.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const groupedItems = chunkArray(item, 3); // Groups items into sets of 3

  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      {groupedItems.map((group, index) => (
        <SwiperSlide key={index}>
          <div className="grid md:grid-cols-3 gap-10">
            {group.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OrderCard_Item;
