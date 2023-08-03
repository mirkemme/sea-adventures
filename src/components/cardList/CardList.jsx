import Card from "../card/Card";
import styles from "./CardList.module.scss";

import { useState } from "react";

const CardList = ({ data }) => {
  const [show, setShow] = useState(8);

  const onHandleClick = () => setShow(show + 8);
  return (
    <section className={styles.CardList}>
      {data.slice(0, show).map((item) => (
        <Card data={item} key={item.id} />
      ))}
      {data.length > 8 && (
        <button className={styles.CardList__button} onClick={onHandleClick}>
          Show more
        </button>
      )}
    </section>
  );
};

export default CardList;
