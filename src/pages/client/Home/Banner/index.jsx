import classes from "./Banner.module.scss";

import banner from "../../../../assets/images/home/banner.png";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
