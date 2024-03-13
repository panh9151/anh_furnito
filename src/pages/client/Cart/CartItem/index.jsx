import clsx from "clsx";
import classes from "./CartItem.module.scss";
import { formatNumber, getTimeLeft } from "../../../../ultil/regular";

const CartItem = (props) => {
  const RemoveIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    );
  };
  return (
    <div key={props.key} className={classes.cartItemWrapper}>
      <div className={clsx(classes.img, classes.col1)}>
        <img src={props.image} alt="" />
      </div>
      <div className={clsx(classes.col5, classes.noFlex)}>
        <div className={classes.content}>
          <div className={classes.contentBrand}>{props.brand}</div>
          <h3 className={classes.contentName}>{props.name}</h3>
          <div className={classes.contentDesc}>
            {props.size} / {props.color}
          </div>
        </div>
      </div>
      <div className={clsx(classes.col2)}>
        <div className={classes.quantityWrapper}>
          <button>-</button>
          <div contentEditable>{props.quantity}</div>
          <button>+</button>
        </div>
      </div>
      <div className={clsx(classes.col3, classes.noFlex, classes.selfStart)}>
        <div className={classes.subtotal}>
          <div
            className={clsx(
              "d-flex align-items-center gap",
              classes.subWrapper
            )}
          >
            <div className={classes.quantity}>{props.quantity}</div>
            <span>x</span>
            <div className={classes.price}>
              {formatNumber(props.price * (props.salePercent / 100 || 1), 1)}
            </div>
          </div>
          {props.salePercent && (
            <del className={classes.sale}>{formatNumber(props.price, 0)}</del>
          )}
          {
            <div
              className={clsx(classes.expiredIn, {
                hidden: !(props.saleTimeLeft && props.saleTimeLeft < 604800),
              })}
            >
              *Expire in {getTimeLeft(props.saleTimeLeft)}
            </div>
          }
        </div>
      </div>
      <div className={clsx(classes.removeBtn, classes.col1)}>
        <button>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
