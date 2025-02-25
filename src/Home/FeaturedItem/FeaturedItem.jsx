import React from "react";
import SectionTitle from "../../Shared/Section/SectionTitle";
import featureImage from "../../assets/home/featured.jpg";
import "./featured.css";
const FeaturedItem = () => {
  return (
    <div className="featuredback bg-fixed text-white p-4">
      <SectionTitle
        heading={"Featured Items"}
        subHeading={"last day of offer"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20  sm:px-6 lg:px-36">
        <div>
          <img className="" src={featureImage} alt="" />
        </div>
        <div className="md:ml-10">
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laudantium, illum? Amet, esse asperiores temporibus saepe quam
            voluptas ipsum deleniti incidunt!
          </p>
          <button className="btn btn-warning">ORDER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
