import Card from "../card/Card";
import styles from "./CardList.module.scss";
import { data } from "../../mock/data.js";
import { useState } from "react";

const CardList = () => {
  const [show, setShow] = useState(8);

  const onHandleClick = () => setShow(show + 8);
  return (
    <section className={styles.CardList}>
      {data.slice(0, show).map((item) => (
        <Card props={item} key={item.id} />
      ))}
      <button className={styles.CardList__button} onClick={onHandleClick}>
        Show more
      </button>
    </section>
  );
};

export default CardList;
