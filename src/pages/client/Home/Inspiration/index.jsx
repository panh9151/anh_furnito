import classes from "./Inspiration.module.scss";
import clsx from "clsx";

const Inspiration = () => {
  return (
    <div className={classes.inspirationWrapper}>
      <div className={classes.content}>
        <div className={classes.contentHeading}>
          50+ Beautiful rooms
          <br />
          inspiration
        </div>
        <div className={classes.contentDescription}>
          Our designer already made a lot of beautiful
          <br /> prototipe of rooms that inspire you
        </div>
        <button className={classes.btn}>Explore More</button>
      </div>
      <div className={classes.slider}>
        <div className={classes.sliderWrapper}>
          <div
            style={{
              "--url-image": `url('${"../../../../../src/assets/images/home/inspiration1.png"}')`,
              gridArea: "a",
            }}
            className={clsx(classes.sliderItem, classes.sliderItemActive)}
          ></div>
          <div
            style={{
              "--url-image": `url('${"../../../../../src/assets/images/home/inspiration2.png"}')`,
              gridArea: "b",
            }}
            className={clsx(classes.sliderItem)}
          ></div>
          <div
            style={{
              "--url-image": `url('${"../../../../../src/assets/images/home/inspiration3.png"}')`,
              gridArea: "c",
            }}
            className={clsx(classes.sliderItem)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
