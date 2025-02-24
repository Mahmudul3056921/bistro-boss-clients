import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category";
import PopularMenu from "../Shared/PopularMenu/PopularMenu";

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
    </div>
  );
};
