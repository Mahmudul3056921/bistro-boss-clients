import React from "react";
import Menuitem from "../Shared/PopularMenu/Menuitem";
import Cover from "../Pages/Cover/Cover";

const MenuCategory = ({ item, title, coverImage }) => {
  return (
    <div>
      {title && <Cover coverImage={coverImage} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4">
        {item.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
