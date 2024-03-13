import classes from "./Customcheckbox.module.scss";

const CustomCheckbox = ({ className, hidden, onChange, ...props }) => {
  return (
    <div
      hidden={hidden}
      className={(classes.className, classes.customCheckbox)}
    >
      <input onChange={onChange} {...props} />
      <span className={classes.checkmark}></span>
    </div>
  );
};

export default CustomCheckbox;
