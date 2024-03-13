import classes from "./Product.module.scss";
import Breadcrumb from "../../../components/Breadcrumb";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import ProductHeading from "./ProductHeading";
import Pagination from "../../../components/Pagination";
import BackgroundHeading from "../../../components/BackgroundHeading";
import FeaturesBox from "../../../components/FeaturesBox";

const Product = () => {
  const [isShowCategory, setIsShowCategory] = useState(true);
  const [colProduct, setColProduct] = useState("col4");
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [sidebarSize, setSidebarSize] = useState(10);
  const currentTableproductList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return productList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(() => {
    setProductList([
      {
        name: "Syltherine",
        subName: "Stylish cafe chair",
        price: "1000000",
        salePrice: "900000",
        image: "https://www.furniro.tech/assets/SliderImage-78f74da3.png",
        isNew: true,
        salePercent: "70",
      },
      {
        name: "Syltherine",
        subName: "Stylish cafe chair",
        price: "1000000",
        salePrice: "900000",
        image: "https://www.furniro.tech/assets/SliderImage-78f74da3.png",
        isNew: true,
        salePercent: "70",
      },
      {
        name: "Syltherine",
        subName: "Stylish cafe chair",
        price: "1000000",
        salePrice: "900000",
        image: "https://www.furniro.tech/assets/SliderImage-78f74da3.png",
        isNew: true,
        salePercent: "70",
      },
      {
        name: "Syltherine",
        subName: "Stylish cafe chair",
        price: "1000000",
        salePrice: "900000",
        image: "https://www.furniro.tech/assets/SliderImage-78f74da3.png",
        isNew: true,
        salePercent: "70",
      },
      {
        name: "Syltherine",
        subName: "Stylish cafe chair",
        price: "1000000",
        salePrice: "900000",
        image: "https://www.furniro.tech/assets/SliderImage-78f74da3.png",
        isNew: true,
        salePercent: "70",
      },
      {
        name: "Syltherine",
        subName: "Stylish cafe chair",
        price: "1000000",
        salePrice: "900000",
        image: "https://www.furniro.tech/assets/SliderImage-78f74da3.png",
        isNew: true,
        salePercent: "70",
      },
      {
        name: "Syltherine",
        subName: "Stylish cafe chair",
        price: "1000000",
        salePrice: "900000",
        image: "https://www.furniro.tech/assets/SliderImage-78f74da3.png",
        isNew: true,
        salePercent: "70",
      },
      {
        name: "Syltherine",
        subName: "Stylish cafe chair",
        price: "1000000",
        salePrice: "900000",
        image: "https://www.furniro.tech/assets/SliderImage-78f74da3.png",
        isNew: true,
        salePercent: "70",
      },
    ]);
  }, []);

  return (
    <div className={classes.productList}>
      <BackgroundHeading
        className={classes.breadcrumb}
        heading="Furniro"
        Breadcrumb={<Breadcrumb url="/shop" />}
      />
      <div className="d-flex container gap align-items-start">
        <div className={clsx("col-3", classes.category)}>
          {isShowCategory && <Sidebar sidebarSize={sidebarSize} />}
        </div>
        <div className="flex-1">
          <ProductHeading totalQuantity={100} />
          <ProductList productList={productList} colProduct={colProduct} />
          <Pagination
            className={classes.paginationBar}
            currentPage={currentPage}
            totalCount={productList.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      <FeaturesBox marginDown={true} />
    </div>
  );
};

export default Product;
