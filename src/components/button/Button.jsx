import styles from "./Button.module.scss";
import { LuPlusSquare, LuMinusSquare } from "react-icons/lu";

const Button = ({ handleClick, count, type }) => {
  return (
    <>
      {type === "plus" ? (
        <LuPlusSquare onClick={handleClick} />
      ) : (
        <LuMinusSquare onClick={handleClick} />
      )}
    </>
  );
};

export default Button;
