import clsx from "clsx";
import classes from "./ProductHeading.module.scss";

const ProductHeading = ({ totalQuantity = 0 }) => {
  return (
    <div
      className={clsx(
        "d-flex justify-content-between align-items-center",
        classes.wrapper
      )}
    >
      <div className={clsx(classes.headingTitle, "d-flex align-items-center")}>
        <span>Product List</span>
        {(totalQuantity || totalQuantity === 0) && (
          <small>({totalQuantity})</small>
        )}
      </div>
      <div className={"d-flex gap align-items-center"}>
        <div className={clsx("d-flex align-items-center", classes.shortBy)}>
          <h4>Short By</h4>
          <button>Default</button>
        </div>
        <div className={clsx("d-flex align-items-center", classes.displayType)}>
          <button>grid</button>
          <button>list</button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeading;
