import clsx from "clsx";
import classes from "./ProductItem.module.scss";
import share from "../../assets/images/share.svg";
import like from "../../assets/images/heart.svg";
import { formatNumber } from "../../ultil/regular";

const ProductItem = ({
  name,
  subName,
  price,
  image,
  salePrice,
  salePercent,
  isNew,
}) => {
  // console.log(salePercent, salePercent > 0);
  return (
    <div className={clsx("w-100", classes.productItemWrapper)}>
      {/* <img src={image} alt="" className="w-100" /> */}
      <div
        className={classes.image}
        style={{ "--image-url": `url('${image}')` }}
      ></div>
      <div
        className={clsx(
          "d-flex flex-column gap",
          classes.productContentWrapper
        )}
      >
        <div className={classes.name}>{name}</div>
        <div className={classes.subName}>{subName}</div>
        <div className={clsx("d-flex align-items-end", classes.priceWrapper)}>
          {salePrice && (
            <del className={classes.salePrice}>
              {formatNumber(salePrice, 0, ".")}
            </del>
          )}
          <div className={classes.price}>{formatNumber(price, 0, ".")}</div>
        </div>

        <div className={classes.labels}>
          {salePercent && salePercent > 0 && (
            <div className={classes.salePercent}>{salePercent}</div>
          )}
          {isNew && <div className={classes.new}>New</div>}
        </div>
      </div>

      <div className={classes.contentOnHover}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <button className={clsx(classes.add, classes.btn)}>
            Add to cart
          </button>
          <div className="d-flex gap">
            <button className={clsx(classes.share, classes.btn)}>
              <img src={share} alt="" />
              Share
            </button>
            <button className={clsx(classes.like, classes.btn)}>
              <img src={like} alt="" />
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
