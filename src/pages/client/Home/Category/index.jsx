import clsx from "clsx";
import Heading from "../Heading";
import classes from "./Category.module.scss";
import { useState } from "react";

const Category = () => {
  const [categoryList, setCategoryList] = useState([
    {
      name: "Dining",
      image: "../../../../../src/assets/images/home/dining.png",
      id: "1",
    },
    {
      name: "Living",
      image: "../../../../../src/assets/images/home/living.png",
      id: "1",
    },
    {
      name: "Bedroom",
      image: "../../../../../src/assets/images/home/bedroom.png",
      id: "1",
    },
  ]);

  return (
    <div className="container w-100">
      <div className={classes.categoryWrapper}>
        <Heading
          title="Browse the range"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <div className={clsx("d-flex", classes.categoryList)}>
          {categoryList.length > 0 &&
            categoryList.map((item) => {
              return (
                <div className="col-4" key={item.name}>
                  <div
                    style={{
                      "--url-image": `url("${item.image}")`,
                    }}
                    className={classes.image}
                  ></div>
                  <div className={classes.name}>{item.name}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Category;
