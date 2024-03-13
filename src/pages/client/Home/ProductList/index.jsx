import clsx from "clsx";
import Heading from "../Heading";
import classes from "./ProductList.module.scss";
import ProductItem from "../../../../components/ProductItem";

const ProductList = () => {
  return (
    <div className="container w-100">
      <Heading title="Find Your Furniture" />
      <div className={clsx(classes.productList, "d-flex gap flex-wrap")}>
        <div className="col-3">
          <ProductItem
            name="Syltherine"
            subName="Stylish cafe chair"
            price="100000"
            image="https://www.furniro.tech/assets/SliderImage-78f74da3.png"
          />
        </div>
        <div className="col-3">
          <ProductItem
            name="Syltherine"
            subName="Stylish cafe chair"
            price="10000000000"
            image="https://www.furniro.tech/assets/SliderImage-78f74da3.png"
          />
        </div>
        <div className="col-3">
          <ProductItem
            name="Syltherine"
            subName="Stylish cafe chair"
            price="1100"
            salePrice="1000"
            image="https://www.furniro.tech/assets/SliderImage-78f74da3.png"
          />
        </div>
        <div className="col-3">
          <ProductItem
            name="Syltherine"
            subName="Stylish cafe chair"
            price="1000000"
            salePrice="900000"
            image="https://www.furniro.tech/assets/SliderImage-78f74da3.png"
          />
        </div>
        <div className="col-3">
          <ProductItem
            name="Syltherine"
            subName="Stylish cafe chair"
            price="1000000"
            salePrice="900000"
            image="https://www.furniro.tech/assets/SliderImage-78f74da3.png"
          />
        </div>
        <div className="col-3">
          <ProductItem
            name="Syltherine"
            subName="Stylish cafe chair"
            price="1000000"
            salePrice="900000"
            image="https://www.furniro.tech/assets/SliderImage-78f74da3.png"
            salePercent={"70"}
          />
        </div>
        <div className="col-3">
          <ProductItem
            name="Syltherine"
            subName="Stylish cafe chair"
            price="1000000"
            salePrice="900000"
            image="https://www.furniro.tech/assets/SliderImage-78f74da3.png"
            isNew={true}
            salePercent={"70"}
          />
        </div>
        <div className="col-3">
          <ProductItem
            name="Syltherine"
            subName="Stylish cafe chair"
            price="1000000"
            salePrice="900000"
            image="https://www.furniro.tech/assets/SliderImage-78f74da3.png"
            isNew={true}
          />
        </div>
      </div>
      <div className={classes.showMoreBtn}>
        <button>Show More</button>
      </div>
    </div>
  );
};

export default ProductList;
