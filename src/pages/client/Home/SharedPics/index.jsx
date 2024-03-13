import classes from "./SharedPics.module.scss";

import furniture1 from "../../../../assets/images/home/furniture1.png";
import furniture2 from "../../../../assets/images/home/furniture2.png";
import furniture3 from "../../../../assets/images/home/furniture3.png";
import furniture4 from "../../../../assets/images/home/furniture4.png";
import furniture5 from "../../../../assets/images/home/furniture5.png";
import furniture6 from "../../../../assets/images/home/furniture6.png";
import furniture7 from "../../../../assets/images/home/furniture7.png";
import furniture8 from "../../../../assets/images/home/furniture8.png";
import furniture9 from "../../../../assets/images/home/furniture9.png";

const SharedPics = () => {
  return (
    <div
      className={classes.sharedPicsWrapper}
      style={{ "--sub-heading-content": "Share your setup with" }}
    >
      <div className={classes.heading}>
        <h3>#FurniroFurniture</h3>
      </div>
      <div className={classes.pic1}>
        <img src={furniture1} alt="" />
      </div>
      <div className={classes.pic2}>
        <img src={furniture2} alt="" />
      </div>
      <div className={classes.pic3}>
        <img src={furniture3} alt="" />
      </div>
      <div className={classes.pic4}>
        <img src={furniture4} alt="" />
      </div>
      <div className={classes.pic5}>
        <img src={furniture5} alt="" />
      </div>
      <div className={classes.pic6}>
        <img src={furniture6} alt="" />
      </div>
      <div className={classes.pic7}>
        <img src={furniture7} alt="" />
      </div>
      <div className={classes.pic8}>
        <img src={furniture8} alt="" />
      </div>
      <div className={classes.pic9}>
        <img src={furniture9} alt="" />
      </div>
    </div>
  );
};

export default SharedPics;
