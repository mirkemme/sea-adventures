import { useState } from "react";
import Card from "../card/Card";
import styles from "./CardList.module.scss";
import Button from "../button";

const CardList = ({ data, isButtonVisible = false }) => {
  const [show, setShow] = useState(8);

  const onHandleClick = () => setShow((prev) => prev + 8);
  return (
    <section className={styles.CardList}>
      {data.slice(0, show).map((item) => (
        <Card data={item} key={item.id} />
      ))}
      {isButtonVisible && <Button handleClick={onHandleClick} label={"Show more"} />}
    </section>
  );
};

export default CardList;
