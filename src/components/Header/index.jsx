import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import classes from "./Header.module.scss";
import HeaderMenu from "./HeaderMenu";
import Search from "./Search";
import HeaderCart from "./HeaderCart";

import logo from "../../assets/images/long_logo.svg";
import account from "../../assets/images/account.svg";

const Header = ({ menuActive, closeOverlay, noAnimation }) => {
  const MenuIcon = () => {
    return (
      <svg
        width="21"
        height="15"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.16667 15C0.836111 15 0.559222 14.88 0.336 14.64C0.112778 14.4 0.000777778 14.1033 0 13.75C0 13.3958 0.112 13.0992 0.336 12.86C0.56 12.6208 0.836889 12.5008 1.16667 12.5H19.8333C20.1639 12.5 20.4412 12.62 20.6652 12.86C20.8892 13.1 21.0008 13.3967 21 13.75C21 14.1042 20.888 14.4012 20.664 14.6412C20.44 14.8812 20.1631 15.0008 19.8333 15H1.16667ZM1.16667 8.75C0.836111 8.75 0.559222 8.63 0.336 8.39C0.112778 8.15 0.000777778 7.85333 0 7.5C0 7.14583 0.112 6.84916 0.336 6.61C0.56 6.37083 0.836889 6.25083 1.16667 6.25H19.8333C20.1639 6.25 20.4412 6.37 20.6652 6.61C20.8892 6.85 21.0008 7.14666 21 7.5C21 7.85416 20.888 8.15125 20.664 8.39125C20.44 8.63125 20.1631 8.75083 19.8333 8.75H1.16667ZM1.16667 2.5C0.836111 2.5 0.559222 2.38 0.336 2.14C0.112778 1.9 0.000777778 1.60333 0 1.25C0 0.895833 0.112 0.599167 0.336 0.36C0.56 0.120833 0.836889 0.000833333 1.16667 0H19.8333C20.1639 0 20.4412 0.12 20.6652 0.36C20.8892 0.6 21.0008 0.896666 21 1.25C21 1.60417 20.888 1.90125 20.664 2.14125C20.44 2.38125 20.1631 2.50083 19.8333 2.5H1.16667Z"
          fill="#333333"
        />
      </svg>
    );
  };

  const [isShowOverlay, setIsShowOverlay] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(menuActive);
  const [isHideHeader, setIsHideHeader] = useState(false);
  const [isTopHeader, setIsTopHeader] = useState(true);
  const [isNoAnimation, setIsNoAnimation] = useState(noAnimation || false);
  const [isExpandCart, setIsExpandCart] = useState(false);
  const location = useLocation();
  const prev = useRef(0);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    if (isExpandCart) setIsExpandCart(false);
    if (isShowOverlay) setIsShowOverlay(false);
    if (!menuActive) {
      window.scrollTo(0, 0);
      // console.log(location);
    }
  }, [location]);

  const toggleOverlayHandle = (isShow) => {
    if (menuActive) {
      closeOverlay();
    }
    setIsShowOverlay(!isShow);
    if (isShowOverlay && !isActiveMenu) setIsActiveMenu(true);
  };

  const accountBtnHandle = (event) => {
    // console.log(event);
  };

  const toggleHeader = () => {
    if (window.scrollY >= 50 && !menuActive) {
      if (prev.current >= window.scrollY) {
        if (isHideHeader === true) {
          setIsHideHeader(false);
        }
        if (isTopHeader === true) {
          setIsTopHeader(false);
        }
      } else if (prev.current < window.scrollY) {
        if (isHideHeader === false) {
          setIsHideHeader(true);
        }
        if (isTopHeader === true) {
          setIsTopHeader(false);
        }
      }
    } else {
      if (isHideHeader === true) {
        setIsHideHeader(false);
      }
      if (isTopHeader === false) {
        setIsTopHeader(true);
      }
    }
  };

  document.addEventListener("scroll", (event) => {
    clearTimeout(scrollTimeoutRef.current);

    if (!isShowOverlay && !isExpandCart) {
      scrollTimeoutRef.current = setTimeout(() => {
        toggleHeader();
        prev.current = window.scrollY;
      }, 5);
    }
  });

  return (
    <div
      className={clsx("d-flex", classes.header, {
        [classes.header__hiding]: isHideHeader,
        [classes.header__top]: isTopHeader,
        [classes.header__noAnimation]: isNoAnimation,
        [classes.header__stopScroll]: isActiveMenu,
      })}
    >
      <div
        className={clsx(
          "container d-flex w-100 justify-content-center align-items-center"
        )}
      >
        {/* <HeaderMenu setIsShowOverlay={setIsShowOverlay} /> */}
        {isShowOverlay && <HeaderMenu setIsShowOverlay={setIsShowOverlay} />}
        {!isShowOverlay && (
          <>
            <div className="flex-1 d-flex">
              <button
                onClick={() => toggleOverlayHandle(isShowOverlay)}
                className={clsx(classes.headerBtn, {
                  [classes.active]: isActiveMenu,
                })}
              >
                <MenuIcon />
              </button>
            </div>
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="flex-1 d-flex justify-content-right align-items-center gap">
              <Search />
              <button
                className={clsx(classes.headerBtn, classes.headerBtn__noHover)}
                onClick={() => accountBtnHandle(event)}
              >
                <img src={account} alt="" />
              </button>
              <HeaderCart
                isExpandCart={isExpandCart}
                setIsExpandCart={setIsExpandCart}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
