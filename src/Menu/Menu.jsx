import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Pages/Cover/Cover";
import coverImage from "../assets/menu/salad-bg.jpg";
import PizzaImage from "../assets/menu/pizza-bg.jpg";
import PopularMenu from "../Shared/PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu page</title>
      </Helmet>
      <Cover coverImage={coverImage} title="Salad"></Cover>
      <PopularMenu></PopularMenu>
      <Cover coverImage={PizzaImage} title="Pizza"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
