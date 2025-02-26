import React, { useState } from "react";
import Cover from "../Cover/Cover";
import coverOrderImage from "../../assets/menu/banner3.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "./FoodCard";
import OrderCard_Item from "./OrderCard_Item";
import { useParams } from "react-router-dom";

const OrderPage = () => {
  const [menu] = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");

  // Define the tabIndex mapping before using it in useState
  const tabIndex = {
    salad: 0,
    desserts: 1,
    soup: 2,
    pizza: 3,
  };

  const { category } = useParams();
  const [selectedTabIndex, setSelectedTabIndex] = useState(
    category ? tabIndex[category.toLowerCase()] || 0 : 0
  );

  return (
    <div>
      <Cover coverImage={coverOrderImage} title={"Order"}></Cover>
      <Tabs
        selectedIndex={selectedTabIndex}
        onSelect={(index) => setSelectedTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Desserts</Tab>
          <Tab>Soup</Tab>
          <Tab>Pizza</Tab>
        </TabList>

        <TabPanel>
          <OrderCard_Item item={salad}></OrderCard_Item>
        </TabPanel>
        <TabPanel>
          <OrderCard_Item item={dessert}></OrderCard_Item>
        </TabPanel>
        <TabPanel>
          <OrderCard_Item item={soup}></OrderCard_Item>
        </TabPanel>
        <TabPanel>
          <OrderCard_Item item={pizza}></OrderCard_Item>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderPage;
