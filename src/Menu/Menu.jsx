import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Pages/Cover/Cover";
import coverImage from "../assets/menu/salad-bg.jpg";
import PizzaImage from "../assets/menu/pizza-bg.jpg";
import dessertImage from "../assets/menu/dessert-bg.jpeg";
import PopularMenu from "../Shared/PopularMenu/PopularMenu";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../Shared/Section/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Menu page</title>
      </Helmet>
      <Cover coverImage={coverImage} title="Salad"></Cover>
      <SectionTitle
        heading={"Our menu"}
        subHeading={"Dont miss todays offer"}
      ></SectionTitle>
      <MenuCategory item={pizza}></MenuCategory>
      <MenuCategory
        item={dessert}
        title={"Desserts"}
        coverImage={dessertImage}
      ></MenuCategory>
      <MenuCategory
        item={pizza}
        title={"Pizza"}
        coverImage={PizzaImage}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
