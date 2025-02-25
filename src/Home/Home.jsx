import Banner from "./Banner/Banner";
import Category from "./Category";
import PopularMenu from "../Shared/PopularMenu/PopularMenu";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import Testimonials from "./Testimonial/Testimonials";

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <FeaturedItem></FeaturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};
