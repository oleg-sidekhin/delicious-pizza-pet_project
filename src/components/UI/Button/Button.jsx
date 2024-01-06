import classes from './Button.module.scss';

function Button({ children, onClick, ...props }) {
  return (
    <button
      type="button"
      className={classes.cButton}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
