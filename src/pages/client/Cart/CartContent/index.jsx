import classes from "./CartContent.module.scss";
import clsx from "clsx";
import emptyCartIcon from "../../../../assets/images/emptycart.png";
import CartItem from "../CartItem";
import { Link } from "react-router-dom";
import CheckoutBox from "../CheckoutBox";

const CartContent = ({ list = [] }) => {
  const NoCartItem = () => {
    return (
      <div
        className={clsx(
          "d-flex align-item-center justify-content-center",
          classes.noCartWrapper
        )}
      >
        <img src={emptyCartIcon} alt="" />
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't make your choice yet...</p>
        <div className={classes.btnWrapper}>
          <Link to={"/shop"} className={classes.btn}>
            Back to Shop
          </Link>
        </div>
      </div>
    );
  };

  const CartListItem = () => {
    return (
      <div className="container">
        <div className={classes.cartWrapper}>
          <div className="col-8 gap d-flex flex-column">
            {list.map((item, index) => {
              return (
                <div key={index}>
                  <CartItem {...item} />
                </div>
              );
            })}
          </div>
          <div className="col-4">
            <CheckoutBox list={list} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {list && list.length < 1 && <NoCartItem />}
      {list && !(list.length < 1) && <CartListItem />}
    </>
  );
};

export default CartContent;
