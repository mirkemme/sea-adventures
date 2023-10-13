import styles from "./Button.module.scss";

const Button = ({ handleClick, label }) => {
  return (
    <div className={styles.Button}>
      <button className={styles.Button__button} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
