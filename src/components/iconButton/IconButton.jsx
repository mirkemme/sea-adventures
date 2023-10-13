import styles from "./IconButton.module.scss";
import { LuPlusSquare, LuMinusSquare } from "react-icons/lu";

const IconButton = ({ handleClick, type }) => {
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

export default IconButton;
