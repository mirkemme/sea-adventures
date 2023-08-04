import { useState } from "react";
import styles from "./DropdownSelect.module.scss";

const DropdownSelect = (props) => {
  const { options, handleChange } = props || null;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleValue = (option) => {
    if (option.label === "Mostra tutti") {
      setSelected("");
      setIsOpen((prev) => !prev);
      handleChange(option);
    } else {
      setSelected(option);
      setIsOpen((prev) => !prev);
      handleChange(option);
    }
  };

  return (
    <div className={styles.DropdownSelect}>
      <div
        className={`${styles.DropdownSelect__dropdown} ${
          isOpen ? styles.DropdownSelect__arrowTransform : ""
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected ? selected?.label : options.options[0].label}
      </div>
      {options && (
        <ul
          className={`${styles.DropdownSelect__options} ${
            isOpen ? styles.DropdownSelect__isOpen : ""
          }`}
        >
          {options?.options?.map((option) => (
            <li
              onClick={() => handleValue(option)}
              className={styles.DropdownSelect__options__option}
              key={option?.id}
            >
              {option?.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelect;
