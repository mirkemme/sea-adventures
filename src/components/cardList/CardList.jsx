import { useState } from "react";
import Card from "../card/Card";
import styles from "./CardList.module.scss";

const CardList = ({ data }) => {
  const [show, setShow] = useState(8);

  const onHandleClick = () => setShow(show + 8);
  return (
    <section className={styles.CardList}>
      {data.slice(0, show).map((item) => (
        <Card data={item} key={item.id} />
      ))}
      {data.length > 8 && (
        <div className={styles.CardList__btnContainer}>
          <button
            className={styles.CardList__btnContainer__button}
            onClick={onHandleClick}
          >
            Show more
          </button>
        </div>
      )}
    </section>
  );
};

export default CardList;
