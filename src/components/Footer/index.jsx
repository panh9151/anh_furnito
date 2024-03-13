import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";
import clsx from "clsx";

import twitter from "../../assets/images/tw.svg";
import facebook from "../../assets/images/face.svg";
import instagram from "../../assets/images/insta.svg";
import warning from "../../assets/images/warn.svg";

const Footer = () => {
  return (
    <div className={classes.footerWrapper}>
      <div className="container w-100">
        <div className={classes.overlayContent}>
          <div className="col-3">
            <span className={classes.contentHeading}>Contact</span>
            <ul>
              <li>
                <Link>
                  400 University Drive Suite 200 Coral Gables,
                  <br />
                  FL 33134 USA
                </Link>
              </li>

              <li>
                <ul className="d-flex flex-row">
                  <li>
                    <Link>
                      <img src={twitter} alt="" />
                    </Link>
                  </li>

                  <li>
                    <Link>
                      <img src={facebook} alt="" />
                    </Link>
                  </li>

                  <li>
                    <Link>
                      <img src={instagram} alt="" />
                    </Link>
                  </li>

                  <li>
                    <Link>
                      <img src={warning} alt="" />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <span className={classes.contentHeading}>Furniro</span>
            <ul>
              <li>
                <Link>Home</Link>
              </li>

              <li>
                <Link to={"shop"}>Shop</Link>
              </li>

              <li>
                <Link to={"shop"}>About</Link>
              </li>

              <li>
                <Link>Contact</Link>
              </li>

              <li>
                <Link>Photo Gallery</Link>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <span className={classes.contentHeading}>Help</span>
            <ul>
              <li>
                <Link>Payment Options</Link>
              </li>

              <li>
                <Link>Returns</Link>
              </li>

              <li>
                <Link>Privacies Policies</Link>
              </li>

              <li>
                <Link>Term & Condition</Link>
              </li>
            </ul>
          </div>

          <div className={clsx("col-3", classes.subscribeForm)}>
            <span className={classes.contentHeading}>Newsletter</span>
            <form action="" onClick={() => onClickFormHandle}>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address..."
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
