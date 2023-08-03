import Card from "../card/Card";
import styles from "./CardList.module.scss";
import { data } from "../../mock/data.js";

const CardList = () => {
  return (
    <section className={styles.CardList}>
      {data.map((item) => (
        <Card props={item} key={item.id} />
      ))}
    </section>
  );
};

export default CardList;
