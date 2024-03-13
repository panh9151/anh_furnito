import clsx from "clsx";
import ProductItem from "../../../../components/ProductItem";
import productClasses from "../Product.module.scss";

const ProductList = ({ productList, colProduct }) => {
  return (
    <div className={clsx(productClasses.wrapper, "gap")}>
      {productList.map((item, index) => {
        return (
          <div className={productClasses[colProduct]} key={index}>
            <ProductItem
              name={item.name}
              subName={item.subName}
              price={item.price}
              image={item.image}
              salePrice={item.salePercent}
              isNew={item.isNew}
              salePercent={item.salePercent}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
