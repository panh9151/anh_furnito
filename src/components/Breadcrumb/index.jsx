import { Link } from "react-router-dom";
import classes from "./Breadcrumb.module.scss";
import clsx from "clsx";
const RightArrow = () => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="#333333" />
    </svg>
  );
};

const Breadcrumb = ({ icon = <RightArrow />, url }) => {
  function generateBreadcrumb(url) {
    const currentUrl = url || window.location.href;

    let cleanedUrl = currentUrl.replace(/^(https?:\/\/)?/i, "");

    cleanedUrl = cleanedUrl.replace(/^[^/]+/, "");

    const urlParts = [];
    // console.log(cleanedUrl.split("/").filter((part) => part !== ""));
    let path = "/";
    urlParts.push({
      name: "Home",
      path: path,
    });
    cleanedUrl
      .split("/")
      .filter((part) => part !== "")
      .map((item) => {
        path += item;
        const breadcrumbItem = {
          name: item,
          path: path,
        };
        urlParts.push(breadcrumbItem);
        // console.log(item);
      });

    return urlParts;
  }

  // generateBreadcrumb();

  return (
    <div className={clsx(classes.breadcrumb, "gap")}>
      {generateBreadcrumb(url).map((item, index) => {
        if (index === 0) {
          return (
            <Link key={index} className={classes.breadcrumbLink} to={item.path}>
              {item.name}
            </Link>
          );
        } else {
          return (
            <div key={index} className="gap d-flex align-items-center">
              {icon}
              <Link className={classes.breadcrumbLink} to={item.path}>
                {item.name}
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Breadcrumb;
