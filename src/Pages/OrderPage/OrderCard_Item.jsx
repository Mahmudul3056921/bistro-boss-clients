import React from "react";
import FoodCard from "./FoodCard";

const OrderCard_Item = ({ item }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {item.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderCard_Item;
