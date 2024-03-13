import clsx from "clsx";
import Banner from "./Banner";
import classes from "./Home.module.scss";
import Category from "./Category";
import ProductList from "./ProductList";
import Inspiration from "./Inspiration";
import SharedPics from "./SharedPics";

const Home = () => {
  return (
    <div
      className={clsx(
        "d-flex flex-column justify-content-center align-items-center w-100 gap",
        classes.home
      )}
    >
      <Banner />
      <Category />
      <ProductList />
      <Inspiration />
      <SharedPics />
    </div>
  );
};

export default Home;
