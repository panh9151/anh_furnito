import classes from "./Heading.module.scss";

const Heading = ({ subTitle = "", title = "" }) => {
  return (
    <div className={classes.heading}>
      {title && <h2>{title}</h2>}
      {subTitle && <h3>{subTitle}</h3>}
    </div>
  );
};

export default Heading;
