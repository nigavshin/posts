import classes from "./MyButton.module.scss";
function MyButton({ children, ...props }) {
  return <button {...props} className={classes.myBtn}>{children}</button>;
}

export default MyButton;
