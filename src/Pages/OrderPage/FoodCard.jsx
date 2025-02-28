import React from "react";
import { CgLaptop } from "react-icons/cg";
import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;

  const handleCart = (food) => {
    console.log(food);
  };

  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="overflow-hidden h-12 text-center px-2">{recipe}</p>
          <Link>
            <button
              onClick={() => handleCart(item)}
              className="btn btn-warning "
            >
              Order
            </button>
          </Link>
        </div>
        <p className="absolute right-0 text-black  bg-warning ">{price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
