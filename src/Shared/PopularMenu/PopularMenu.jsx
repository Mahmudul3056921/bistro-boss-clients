import { useEffect, useState } from "react";
import SectionTitle from "../Section/SectionTitle";
import Menuitem from "./Menuitem";

const PopularMenu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularitems = data.filter((item) => item.category === "popular");
        setMenus(popularitems);
      });
  }, []);

  return (
    <section className="mb-20  p-2 text-black opacity-85 bg-amber-400">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {menus.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
