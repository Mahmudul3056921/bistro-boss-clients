import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="overflow-hidden h-12 text-center px-2">{recipe}</p>
        </div>
        <p className="absolute right-0 text-black  bg-warning ">{price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
