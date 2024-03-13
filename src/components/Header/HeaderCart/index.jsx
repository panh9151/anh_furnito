import clsx from "clsx";
import { useState } from "react";

import classes from "./HeaderCart.module.scss";
import headerClasses from "../../Header/Header.module.scss";
import { formatNumber } from "../../../ultil/regular";

import closeCart from "../../../assets/images/closeCart.svg";
import CartItem from "../../CartItem";
import { useNavigate } from "react-router-dom";

const HeaderCart = ({ isExpandCart, setIsExpandCart }) => {
  const CartIcon = () => {
    return (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5752 20C6.0252 20 5.55453 19.8043 5.1632 19.413C4.77186 19.0217 4.57586 18.5507 4.5752 18C4.5752 17.45 4.77119 16.9793 5.1632 16.588C5.5552 16.1967 6.02586 16.0007 6.5752 16C7.1252 16 7.5962 16.196 7.9882 16.588C8.3802 16.98 8.57586 17.4507 8.5752 18C8.5752 18.55 8.37953 19.021 7.9882 19.413C7.59686 19.805 7.12586 20.0007 6.5752 20ZM16.5752 20C16.0252 20 15.5545 19.8043 15.1632 19.413C14.7719 19.0217 14.5759 18.5507 14.5752 18C14.5752 17.45 14.7712 16.9793 15.1632 16.588C15.5552 16.1967 16.0259 16.0007 16.5752 16C17.1252 16 17.5962 16.196 17.9882 16.588C18.3802 16.98 18.5759 17.4507 18.5752 18C18.5752 18.55 18.3795 19.021 17.9882 19.413C17.5969 19.805 17.1259 20.0007 16.5752 20ZM5.7252 4L8.1252 9H15.1252L17.8752 4H5.7252ZM4.7752 2H19.5252C19.9085 2 20.2002 2.171 20.4002 2.513C20.6002 2.855 20.6085 3.20067 20.4252 3.55L16.8752 9.95C16.6919 10.2833 16.4462 10.5417 16.1382 10.725C15.8302 10.9083 15.4925 11 15.1252 11H7.6752L6.5752 13H17.5752C17.8585 13 18.0962 13.096 18.2882 13.288C18.4802 13.48 18.5759 13.7173 18.5752 14C18.5752 14.2833 18.4792 14.521 18.2872 14.713C18.0952 14.905 17.8579 15.0007 17.5752 15H6.5752C5.8252 15 5.25853 14.671 4.8752 14.013C4.49186 13.355 4.4752 12.7007 4.8252 12.05L6.1752 9.6L2.5752 2H1.5752C1.29186 2 1.05453 1.904 0.863195 1.712C0.671862 1.52 0.575862 1.28267 0.575195 1C0.575195 0.716667 0.671195 0.479333 0.863195 0.288C1.0552 0.0966668 1.29253 0.000666667 1.5752 0H3.2002C3.38353 0 3.55853 0.0500001 3.7252 0.15C3.89186 0.25 4.01686 0.391667 4.1002 0.575L4.7752 2Z"
          fill="#333333"
        />
      </svg>
    );
  };

  const [cartQuantity, setCartQuantity] = useState(0);
  const navigate = useNavigate();

  const cartBtnHandle = (isExpand) => {
    console.log(isExpand);
    setIsExpandCart(!isExpand);
  };

  const closeCartOverlay = () => {
    setIsExpandCart(false);
  };

  const changePageHandle = (to) => {
    navigate(to);
  };

  return (
    <>
      <button
        className={clsx(headerClasses.headerBtn, classes.cartBtn, {
          [classes.active]: isExpandCart,
        })}
        onClick={() => cartBtnHandle(isExpandCart)}
      >
        <CartIcon />
        {cartQuantity > 0 && (
          <div className={classes.cartQuantity}>{cartQuantity}</div>
        )}
      </button>

      {isExpandCart && (
        <div className={classes.cartWrapper}>
          <div
            onClick={() => closeCartOverlay()}
            className={clsx(classes.cartOverlay, {})}
          ></div>
          <div className={classes.cartContentWrapper}>
            <div className={classes.cartContent}>
              <div className={classes.cartHeading}>
                <h2>Shopping Cart</h2>
                <button
                  onClick={() => closeCartOverlay()}
                  className={classes.closeCartButton}
                >
                  <img src={closeCart} alt="" />
                </button>
              </div>
              <div className={classes.line}></div>
              <div className={classes.cartItems}>
                <CartItem
                  type="S"
                  image="https://zsofa.vn/wp-content/uploads/2021/12/sofa-phong-khach-L59-2-Copy.jpg"
                  name="Sofa phong khach"
                  quantity="1"
                  id="1"
                  price="1000"
                  salePrice="900"
                />
                <CartItem
                  type="S"
                  image="https://zsofa.vn/wp-content/uploads/2021/12/sofa-phong-khach-L59-2-Copy.jpg"
                  name="Sofa phong khach"
                  quantity="1"
                  id="1"
                  price="1000"
                  salePrice="900"
                />
                <CartItem
                  type="S"
                  image="https://zsofa.vn/wp-content/uploads/2021/12/sofa-phong-khach-L59-2-Copy.jpg"
                  name="Sofa phong khach"
                  quantity="1"
                  id="1"
                  price="1000"
                  salePrice="900"
                />
                <CartItem
                  type="S"
                  image="https://zsofa.vn/wp-content/uploads/2021/12/sofa-phong-khach-L59-2-Copy.jpg"
                  name="Sofa phong khach"
                  quantity="1"
                  id="1"
                  price="1000"
                  salePrice="900"
                />
                <CartItem
                  type="S"
                  image="https://zsofa.vn/wp-content/uploads/2021/12/sofa-phong-khach-L59-2-Copy.jpg"
                  name="Sofa phong khach"
                  quantity="1"
                  id="1"
                  price="1000"
                  salePrice="900"
                />
                <CartItem
                  type="S"
                  image="https://zsofa.vn/wp-content/uploads/2021/12/sofa-phong-khach-L59-2-Copy.jpg"
                  name="Sofa phong khach"
                  quantity="1"
                  id="1"
                  price="100"
                />
              </div>
              <div className={classes.cartFooting}>
                <div className="d-flex gap align-items-center">
                  <h2>Subtotal</h2>
                  <div className={classes.footingPrice}>
                    {formatNumber("123456")}
                  </div>
                </div>
                <div className="d-flex w-100 justify-content-between align-items-center">
                  <button
                    onClick={() => changePageHandle("/cart")}
                    className={classes.footingBtn}
                  >
                    Cart
                  </button>
                  <button
                    onClick={() => changePageHandle("/checkout")}
                    className={classes.footingBtn}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderCart;
