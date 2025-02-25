import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/Section/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="mb-4">
      <SectionTitle
        heading={"Testimonial"}
        subHeading={"What Our Clients Say..?"}
      />

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item._id}>
            <div className=" flex flex-col items-center p-4 m-2">
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />

              <p>{item.name}</p>
              <p>{item.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
