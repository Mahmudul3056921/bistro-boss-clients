import { useEffect, useState } from "react";
import SectionTitle from "../Section/SectionTitle";
import Menuitem from "./Menuitem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-20  p-2 text-black opacity-85 bg-amber-400">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 my-4">
        {popularMenu.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
