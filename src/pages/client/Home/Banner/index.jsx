import classes from "./Banner.module.scss";

import banner from "../../../../assets/images/home/banner.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.banner} onClick={() => navigate("/shop")}>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
