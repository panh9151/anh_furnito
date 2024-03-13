import shipping from "../../assets/images/shipping.svg";
import support from "../../assets/images/support.svg";
import warranty from "../../assets/images/warranty.svg";
import quality from "../../assets/images/quality.svg";
import classes from "./FeaturesBox.module.scss";
import clsx from "clsx";

const FeaturesBox = ({ container = true, marginTop = "10rem", marginDown }) => {
  const ReturnContent = () => {
    return (
      <ul
        style={{ "--margin-top-value": marginTop }}
        className={classes.featuresWrapper}
      >
        <li>
          <div>
            <img src={shipping} alt="" />
          </div>
          <div className={classes.featuresContent}>
            <h3>High Quality</h3>
            <p>Crafted from top materials</p>
          </div>
        </li>
        <li>
          <div>
            <img src={support} alt="" />
          </div>
          <div className={classes.featuresContent}>
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </li>
        <li>
          <div>
            <img src={warranty} alt="" />
          </div>
          <div className={classes.featuresContent}>
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </li>
        <li>
          <div>
            <img src={quality} alt="" />
          </div>
          <div className={classes.featuresContent}>
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </li>
      </ul>
    );
  };

  return (
    <>
      {container && (
        <div
          className={clsx(classes.containerWrapper, {
            [classes.containerWrapper__marginDown]: marginDown,
          })}
        >
          <div className="container">
            <ReturnContent />
          </div>
        </div>
      )}
      {!container && <ReturnContent />}
    </>
  );
};

export default FeaturesBox;
