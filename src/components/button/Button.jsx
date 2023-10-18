import styles from "./Button.module.scss";

const Button = ({ handleClick, label }) => {
  return (
    <button className={styles.Button} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
