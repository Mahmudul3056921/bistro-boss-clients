import Banner from "./Banner/Banner";
import Category from "./Category";
import PopularMenu from "../Shared/PopularMenu/PopularMenu";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import Testimonials from "./Testimonial/Testimonials";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Its Home page</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <FeaturedItem></FeaturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};
