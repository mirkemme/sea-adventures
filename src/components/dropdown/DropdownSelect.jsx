import styles from "./DropdownSelect.module.scss";
import { updateDropdownList } from "@/utils/fn/updateDropdownList";

const DropdownSelect = (props) => {
  const { options, handleChange, dropdown } = props || null;
  const { dropdownList, setDropdownList } = props || null;
  console.log(options);
  const onHandleClick = () =>
    setDropdownList(updateDropdownList(dropdownList, dropdown.id));

  const handleValue = (option) => {
    if (option.label === "Mostra tutti")
      setDropdownList(updateDropdownList(dropdownList, dropdown.id, ""));
    else setDropdownList(updateDropdownList(dropdownList, dropdown.id, option.label));
    handleChange(option);
  };

  return (
    <div className={styles.DropdownSelect}>
      <div
        className={`${styles.DropdownSelect__dropdown} ${
          dropdownList[dropdown.id].isOpen ? styles.DropdownSelect__arrowTransform : ""
        }`}
        onClick={onHandleClick}
      >
        {dropdown.selectedOption ? dropdown.selectedOption : options.options[0].label}
      </div>
      {options && (
        <ul
          className={`${styles.DropdownSelect__options} ${
            dropdownList[dropdown.id].isOpen ? styles.DropdownSelect__isOpen : ""
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
