import { useEffect, useState } from "react";
import { upperAllChar, upperFirstChar } from "../../../../ultil/regular";
import classes from "./Sidebar.module.scss";
import clsx from "clsx";
import CustomCheckbox from "../../../../components/CustomCheckbox";

const Sidebar = ({
  sidebarSize = 10,
  categorySizeCustom,
  priceSizeCustom = "all",
  sizeSizeCustom = "all",
  colorSizeCustom = "all",
  styleSizeCustom,
  fabricSizeCustom,
  brandSizeCustom,
}) => {
  const ActionBtnIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="11"
        viewBox="0 0 20 11"
        fill="none"
      >
        <path
          d="M19 1L10 10L1 1"
          stroke="#3A3A3A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  const [isCategoryAll, setIsCategoryAll] = useState(false);
  const [isStyleAll, setIsStyleAll] = useState(false);
  const [isSizeAll, setIsSizeAll] = useState(false);
  const [isBrandAll, setIsBrandAll] = useState(false);
  const [isColorAll, setIsColorAll] = useState(false);
  const [isFabricAll, setIsFabricAll] = useState(false);
  const [isPriceAll, setIsPriceAll] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(true);

  // Work with number and "all"
  const [categorySize, setCategorySize] = useState(categorySizeCustom);
  const [priceSize, setPriceSize] = useState(priceSizeCustom);
  const [sizeSize, setSizeSize] = useState(sizeSizeCustom);
  const [colorSize, setColorSize] = useState(colorSizeCustom);
  const [styleSize, setStyleSize] = useState(styleSizeCustom);
  const [fabricSize, setFabricSize] = useState(fabricSizeCustom);
  const [brandSize, setBrandSize] = useState(brandSizeCustom);

  useEffect(() => {
    if (isAllChecked) setCheckAll(true);
  }, []);

  const categoryList = [
    {
      id: "1",
      name: "living",
      products: "10",
    },
    {
      id: "2",
      name: "bedroom",
      products: "10",
    },
    {
      id: "3",
      name: "bathroom",
      products: "10",
    },
  ];

  const styleList = [
    {
      id: "1",
      name: "Chairámdvausyjgdaikdhaskdhaskdhskjsadasdsa",
      products: "10",
    },
    {
      id: "2",
      name: "NightStand",
      products: "10",
    },
    {
      id: "3",
      name: "Table",
      products: "10",
    },
  ];

  const sizeList = [
    {
      id: "1",
      name: "L",
      products: "10",
    },
    {
      id: "2",
      name: "M",
      products: "10",
    },
    {
      id: "3",
      name: "S",
      products: "10",
    },
  ];

  const brandList = [
    {
      id: "1",
      name: "Caroling",
      products: "10",
    },
    {
      id: "2",
      name: "AIS",
      products: "10",
    },
    {
      id: "3",
      name: "alea",
      products: "10",
    },
  ];

  const colorList = [
    {
      id: "1",
      name: "Light",
      code: "f5f5f5",
    },
    {
      id: "2",
      name: "Dark",
      code: "3a3a3a",
    },
    {
      id: "3",
      name: "Light grey",
      code: "ccc",
    },
  ];

  const fabricList = [
    {
      id: "1",
      name: "Silk",
      products: "10",
    },
    {
      id: "2",
      name: "satin",
      products: "10",
    },
    {
      id: "3",
      name: "wool",
      products: "10",
    },
  ];

  const priceList = [
    {
      id: "1",
      // name: "2000",
      start: "",
      end: "1000",
      products: "10",
    },
    {
      id: "2",
      // name: "satin",
      start: "1000",
      end: "2000",
      products: "10",
    },
    {
      id: "3",
      // name: "wool",
      start: "2000",
      end: "",
      products: "10",
    },
  ];

  const checkIsAllSection = (section) => {
    const sectionLength = {
      category: categoryList.length,
      style: styleList.length,
      size: sizeList.length,
      brand: brandList.length,
      color: colorList.length,
      fabric: fabricList.length,
      price: priceList.length,
    };
    const sectionSetting = {
      category: setIsCategoryAll,
      style: setIsStyleAll,
      size: setIsSizeAll,
      brand: setIsBrandAll,
      color: setIsColorAll,
      fabric: setIsFabricAll,
      price: setIsPriceAll,
    };
    // Get query string
    let query = "";
    for (let i = 1; i <= sectionLength[section]; i++) {
      query += "#" + section + i + "[type='checkbox']:checked";
      if (i < sectionLength[section]) query += ", ";
    }
    // Set value, recall function
    if (document.querySelectorAll(query).length === sectionLength[section]) {
      if (!document.querySelector("#" + section).checked) {
        document.querySelector("#" + section).checked = true;
      }
      sectionAllHandle(section, true);
    } else {
      if (document.querySelector("#" + section).checked) {
        // sectionAllHandle(section, false);
        sectionSetting[section](() => false);
      }
      if (isAllChecked) setIsAllChecked(false);
    }
  };

  const isNeedSetCheckAll = (exception) => {
    (isCategoryAll || exception === "category") &&
      (isStyleAll || exception === "style") &&
      (isSizeAll || exception === "size") &&
      (isBrandAll || exception === "brand") &&
      (isColorAll || exception === "color") &&
      (isFabricAll || exception === "fabric") &&
      (isPriceAll || exception === "price") &&
      setIsAllChecked(true);
  };

  const sectionAllHandle = (section, newValue) => {
    const sectionSetting = {
      category: setIsCategoryAll,
      style: setIsStyleAll,
      size: setIsSizeAll,
      brand: setIsBrandAll,
      color: setIsColorAll,
      fabric: setIsFabricAll,
      price: setIsPriceAll,
    };
    const sectionState = {
      category: isCategoryAll,
      style: isStyleAll,
      size: isSizeAll,
      brand: isBrandAll,
      color: isColorAll,
      fabric: isFabricAll,
      price: isPriceAll,
    };
    const sectionLength = {
      category: categoryList.length,
      style: styleList.length,
      size: sizeList.length,
      brand: brandList.length,
      color: colorList.length,
      fabric: fabricList.length,
      price: priceList.length,
    };

    // console.log(isCategoryAll);
    sectionSetting[section](() => newValue);
    // setIsCategoryAll(true);

    // Get query string
    let query = "";
    for (let i = 1; i <= sectionLength[section]; i++) {
      query += "#" + section + i + "[type='checkbox']";
      if (i < sectionLength[section]) query += ", ";
    }

    // console.log(newValue, sectionState[section]);
    // Change value of query with variable "newValue"
    if (newValue) {
      document.querySelectorAll(query).forEach((item) => {
        if (item.checked === false) item.checked = true;
      });
      isNeedSetCheckAll(section);
    } else if (!newValue) {
      document.querySelectorAll(query).forEach((item) => {
        if (item.checked === true) item.checked = false;
      });
      setIsAllChecked(false);
    }
  };

  const setCheckAll = (newValue) => {
    setIsAllChecked(newValue);
    setIsCategoryAll(newValue);
    setIsStyleAll(newValue);
    setIsSizeAll(newValue);
    setIsBrandAll(newValue);
    setIsColorAll(newValue);
    setIsFabricAll(newValue);
    setIsPriceAll(newValue);

    sectionAllHandle("category", newValue);
    sectionAllHandle("style", newValue);
    sectionAllHandle("size", newValue);
    sectionAllHandle("brand", newValue);
    sectionAllHandle("color", newValue);
    sectionAllHandle("fabric", newValue);
    sectionAllHandle("price", newValue);
  };

  return (
    <div className={classes.wrapper}>
      <h2 className={clsx(classes.heading, "w-100")}>
        Filter
        <label
          className="d-flex align-items-center justify-content-between gap"
          htmlFor="all"
        >
          <span>All</span>
          <CustomCheckbox
            onChange={() => setCheckAll(!isAllChecked)}
            checked={isAllChecked}
            type="checkbox"
            id="all"
          />
        </label>
      </h2>
      {/* Category */}
      <div className={classes.subFilter}>
        <h3 className="d-flex justify-content-between w-100 align-items-center">
          <label
            className="d-flex align-items-center justify-content-between w-100"
            htmlFor="category"
          >
            Category
            <CustomCheckbox
              checked={isCategoryAll}
              onChange={() => sectionAllHandle("category", !isCategoryAll)}
              id="category"
              type="checkbox"
            />
          </label>
        </h3>
        <ul className={classes.inlineLabel}>
          {categoryList.map((item, index) => {
            if (
              categorySize !== "all" &&
              index >= (categorySize || sidebarSize)
            ) {
              return (
                <li key={item.id} hidden>
                  <label
                    className={classes.label}
                    htmlFor={"category" + item.id}
                  >
                    <CustomCheckbox
                      id={"category" + item.id}
                      type="checkbox"
                      onChange={() => checkIsAllSection("category")}
                    />
                    <div>
                      {upperFirstChar(item.name)}{" "}
                      <small>({item.products})</small>
                    </div>
                  </label>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <label className={classes.label} htmlFor={"category" + item.id}>
                  <CustomCheckbox
                    id={"category" + item.id}
                    type="checkbox"
                    onChange={() => checkIsAllSection("category")}
                  />
                  <div>
                    {upperFirstChar(item.name)} <small>({item.products})</small>
                  </div>
                </label>
              </li>
            );
          })}
          {categorySize !== "all" &&
            categoryList.length - 1 >= (categorySize || sidebarSize) && (
              <button
                onClick={() => setCategorySize("all")}
                className={clsx(
                  "w-100",
                  classes.showBtn,
                  classes.showBtn__show
                )}
              >
                <ActionBtnIcon />
              </button>
            )}
          {categorySize === "all" &&
            categoryList.length - 1 >= (categorySizeCustom || sidebarSize) && (
              <button
                onClick={() => setCategorySize(categorySizeCustom)}
                className={clsx(
                  "w-100",
                  classes.showBtn,
                  classes.showBtn__hide
                )}
              >
                <ActionBtnIcon />
              </button>
            )}
        </ul>
      </div>
      {/* Price */}
      <div className={classes.subFilter}>
        <h3 className="d-flex justify-content-between w-100 align-items-center">
          <label
            className="d-flex align-items-center justify-content-between w-100"
            htmlFor="price"
          >
            Price
            <CustomCheckbox
              checked={isPriceAll}
              onChange={() => sectionAllHandle("price", !isPriceAll)}
              id="price"
              type="checkbox"
            />
          </label>
        </h3>
        <ul>
          {priceList.map((item, index) => {
            if (priceSize !== "all" && index >= (priceSize || sidebarSize)) {
              return (
                <li key={item.id} hidden>
                  <label htmlFor={"price" + item.id}>
                    <div
                      className={clsx(
                        "flex-1 d-flex justify-content-between",
                        classes.labelName
                      )}
                    >
                      {item.start && item.end && `${item.start} - ${item.end}`}
                      {item.start && !item.end && `From ${item.start}`}
                      {!item.start && item.end && `0 - ${item.end}`}
                      {/* <small>({item.products})</small> */}
                      <CustomCheckbox
                        type="checkbox"
                        onChange={() => checkIsAllSection("price")}
                        id={"price" + item.id}
                      />
                    </div>
                  </label>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <label htmlFor={"price" + item.id}>
                  <div
                    className={clsx(
                      "flex-1 d-flex justify-content-between",
                      classes.labelName
                    )}
                  >
                    {item.start && item.end && `${item.start} - ${item.end}`}
                    {item.start && !item.end && `From ${item.start}`}
                    {!item.start && item.end && `0 - ${item.end}`}
                    {/* <small>({item.products})</small> */}
                    <CustomCheckbox
                      type="checkbox"
                      onChange={() => checkIsAllSection("price")}
                      id={"price" + item.id}
                    />
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Size */}
      <div className={classes.subFilter}>
        <h3 className="d-flex justify-content-between w-100 align-items-center">
          <label
            className="d-flex align-items-center justify-content-between w-100"
            htmlFor="size"
          >
            Size
            <CustomCheckbox
              checked={isSizeAll}
              onChange={() => sectionAllHandle("size", !isSizeAll)}
              id="size"
              type="checkbox"
            />
          </label>
        </h3>
        <ul className={classes.inlineLabel}>
          {sizeList.map((item, index) => {
            if (sizeSize !== "all" && index >= (sizeSize || sidebarSize)) {
              return (
                <li key={item.id} hidden>
                  <label
                    // className={}
                    htmlFor={"size" + item.id}
                  >
                    <CustomCheckbox
                      onChange={() => checkIsAllSection("size")}
                      id={"size" + item.id}
                      type="checkbox"
                    />
                    <div className={clsx("flex-1", classes.labelName)}>
                      {upperFirstChar(item.name)}
                    </div>{" "}
                    <small>({item.products})</small>
                  </label>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <label
                  // className={}
                  htmlFor={"size" + item.id}
                >
                  <CustomCheckbox
                    onChange={() => checkIsAllSection("size")}
                    id={"size" + item.id}
                    type="checkbox"
                  />
                  <div className={clsx("flex-1", classes.labelName)}>
                    {upperFirstChar(item.name)}
                  </div>{" "}
                  <small>({item.products})</small>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Color */}
      <div className={classes.subFilter}>
        <h3 className="d-flex justify-content-between w-100 align-items-center">
          <label
            className="d-flex align-items-center justify-content-between w-100"
            htmlFor="color"
          >
            Color
            <CustomCheckbox
              id="color"
              type="checkbox"
              checked={isColorAll}
              onChange={() => sectionAllHandle("color", !isColorAll)}
            />
          </label>
        </h3>
        <ul className={classes.inlineLabel}>
          {colorList.map((item, index) => {
            if (colorSize !== "all" && index >= (colorSize || sidebarSize)) {
              return (
                <li key={item.id} hidden>
                  <label
                    className={clsx(
                      classes.label__noOverflow,
                      classes.label__noOpacity
                    )}
                    htmlFor={"color" + item.id}
                  >
                    <input
                      onChange={() => checkIsAllSection("color")}
                      id={"color" + item.id}
                      type="checkbox"
                      hidden={true}
                    />
                    <div
                      className={clsx("flex-1", classes.labelColor)}
                      style={{ "--label-color": "#" + item.code }}
                    >
                      <div className={classes.labelColorName}>{item.name}</div>
                    </div>
                    {/* <small>({item.products})</small> */}
                  </label>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <label
                  className={clsx(
                    classes.label__noOverflow,
                    classes.label__noOpacity
                  )}
                  htmlFor={"color" + item.id}
                >
                  <input
                    onChange={() => checkIsAllSection("color")}
                    id={"color" + item.id}
                    type="checkbox"
                    hidden={true}
                  />
                  <div
                    className={clsx("flex-1", classes.labelColor)}
                    style={{ "--label-color": "#" + item.code }}
                  >
                    <div className={classes.labelColorName}>{item.name}</div>
                  </div>
                  {/* <small>({item.products})</small> */}
                </label>
              </li>
            );
          })}
          {colorSize !== "all" &&
            colorList.length - 1 >= (colorSize || sidebarSize) && (
              <button
                onClick={() => setColorSize("all")}
                className={clsx(
                  "w-100",
                  classes.showBtn,
                  classes.showBtn__show
                )}
              >
                <ActionBtnIcon />
              </button>
            )}
          {colorSize === "all" &&
            colorList.length - 1 >= (colorSizeCustom || sidebarSize) && (
              <button
                onClick={() => setColorSize(colorSizeCustom)}
                className={clsx(
                  "w-100",
                  classes.showBtn,
                  classes.showBtn__hide
                )}
              >
                <ActionBtnIcon />
              </button>
            )}
        </ul>
      </div>
      {/* Style */}
      <div className={classes.subFilter}>
        <h3 className="d-flex justify-content-between w-100 align-items-center">
          <label
            className="d-flex align-items-center justify-content-between w-100"
            htmlFor="style"
          >
            Style
            <CustomCheckbox
              checked={isStyleAll}
              onChange={() => sectionAllHandle("style", !isStyleAll)}
              id="style"
              type="checkbox"
            />
          </label>
        </h3>
        <ul className={classes.inlineLabel}>
          {styleList.map((item, index) => {
            if (styleSize !== "all" && index >= (styleSize || sidebarSize)) {
              return (
                <li key={item.id} hidden>
                  <label htmlFor={"style" + item.id}>
                    <CustomCheckbox
                      id={"style" + item.id}
                      type="checkbox"
                      onChange={() => checkIsAllSection("style")}
                      // checked
                      // hidden
                    />
                    <div className={clsx("flex-1", classes.labelName)}>
                      {upperFirstChar(item.name)}
                    </div>{" "}
                    <small>({item.products})</small>
                  </label>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <label htmlFor={"style" + item.id}>
                  <CustomCheckbox
                    id={"style" + item.id}
                    type="checkbox"
                    onChange={() => checkIsAllSection("style")}
                    // checked
                    // hidden
                  />
                  <div className={clsx("flex-1", classes.labelName)}>
                    {upperFirstChar(item.name)}
                  </div>{" "}
                  <small>({item.products})</small>
                </label>
              </li>
            );
          })}
          {styleSize !== "all" &&
            styleList.length - 1 >= (styleSize || sidebarSize) && (
              <button
                onClick={() => setStyleSize("all")}
                className={clsx(
                  "w-100",
                  classes.showBtn,
                  classes.showBtn__show
                )}
              >
                <ActionBtnIcon />
              </button>
            )}
          {styleSize === "all" &&
            styleList.length - 1 >= (styleSizeCustom || sidebarSize) && (
              <button
                onClick={() => setStyleSize(styleSizeCustom)}
                className={clsx(
                  "w-100",
                  classes.showBtn,
                  classes.showBtn__hide
                )}
              >
                <ActionBtnIcon />
              </button>
            )}
        </ul>
      </div>
      {/* Fabric */}
      <div className={classes.subFilter}>
        <h3 className="d-flex justify-content-between w-100 align-items-center">
          <label
            className="d-flex align-items-center justify-content-between w-100"
            htmlFor="fabric"
          >
            Fabric
            <CustomCheckbox
              checked={isFabricAll}
              onChange={() => sectionAllHandle("fabric", !isFabricAll)}
              id="fabric"
              type="checkbox"
            />
          </label>
        </h3>
        <ul className={classes.inlineLabel}>
          {fabricList.map((item, index) => {
            if (fabricSize !== "all" && index >= (fabricSize || sidebarSize)) {
              return (
                <li key={item.id} hidden>
                  <label htmlFor={"fabric" + item.id}>
                    <CustomCheckbox
                      onChange={() => checkIsAllSection("fabric")}
                      id={"fabric" + item.id}
                      type="checkbox"
                    />
                    <div className={clsx("flex-1", classes.labelName)}>
                      {upperFirstChar(item.name)}
                    </div>{" "}
                    <small>({item.products})</small>
                  </label>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <label htmlFor={"fabric" + item.id}>
                  <CustomCheckbox
                    onChange={() => checkIsAllSection("fabric")}
                    id={"fabric" + item.id}
                    type="checkbox"
                  />
                  <div className={clsx("flex-1", classes.labelName)}>
                    {upperFirstChar(item.name)}
                  </div>{" "}
                  <small>({item.products})</small>
                </label>
              </li>
            );
          })}
          {fabricSize !== "all" &&
            fabricList.length - 1 >= (fabricSize || sidebarSize) && (
              <button
                onClick={() => setFabricSize("all")}
                className={clsx(
                  "w-100",
                  classes.showBtn,
                  classes.showBtn__show
                )}
              >
                <ActionBtnIcon />
              </button>
            )}
          {fabricSize === "all" &&
            fabricList.length - 1 >= (fabricSizeCustom || sidebarSize) && (
              <button
                onClick={() => setFabricSize(fabricSizeCustom)}
                className={clsx(
                  "w-100",
                  classes.showBtn,
                  classes.showBtn__hide
                )}
              >
                <ActionBtnIcon />
              </button>
            )}
        </ul>
      </div>
      {/* Brand */}
      <div className={classes.subFilter}>
        <h3 className="d-flex justify-content-between w-100 align-items-center">
          <label
            className="d-flex align-items-center justify-content-between w-100"
            htmlFor="brand"
          >
            Brand
            <CustomCheckbox
              checked={isBrandAll}
              onChange={() => sectionAllHandle("brand", !isBrandAll)}
              id="brand"
              type="checkbox"
            />
          </label>
        </h3>
        <ul className={classes.inlineLabel}>
          {brandList.map((item, index) => {
            if (brandSize !== "all" && index >= (brandSize || sidebarSize)) {
              return (
                <li key={item.id} hidden>
                  <label htmlFor={"brand" + item.id}>
                    <CustomCheckbox
                      onChange={() => checkIsAllSection("brand")}
                      id={"brand" + item.id}
                      type="checkbox"
                    />
                    <div className={clsx("flex-1", classes.labelName)}>
                      {upperAllChar(item.name)}
                    </div>{" "}
                    <small>({item.products})</small>
                  </label>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <label htmlFor={"brand" + item.id}>
                  <CustomCheckbox
                    onChange={() => checkIsAllSection("brand")}
                    id={"brand" + item.id}
                    type="checkbox"
                  />
                  <div className={clsx("flex-1", classes.labelName)}>
                    {upperAllChar(item.name)}
                  </div>{" "}
                  <small>({item.products})</small>
                </label>
              </li>
            );
          })}
          {brandSize !== "all" &&
            brandList.length - 1 >= (brandSize || sidebarSize) && (
              <button
                onClick={() => setBrandSize("all")}
                className={clsx(
                  "w-100",
                  classes.showBtn,
                  classes.showBtn__show
                )}
              >
                <ActionBtnIcon />
              </button>
            )}
          {brandSize === "all" &&
            brandList.length - 1 >= (brandSizeCustom || sidebarSize) && (
              <button
                onClick={() => setBrandSize(brandSizeCustom)}
                className={clsx(
                  "w-100",
                  classes.showBtn,
                  classes.showBtn__hide
                )}
              >
                <ActionBtnIcon />
              </button>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
