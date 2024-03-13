import classes from "./BackgroundHeading.module.scss";

const BackgroundHeading = ({ heading, Breadcrumb }) => {
  return (
    <div className={classes.breadcrumb}>
      <h1>{heading}</h1>
      {Breadcrumb}
    </div>
  );
};

export default BackgroundHeading;
