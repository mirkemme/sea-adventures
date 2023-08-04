import CardList from "../cardList";
import styles from "./GroupShow.module.scss";

const GroupShow = ({ data }) => {
  return (
    <section className={styles.GroupShow}>
      <header className={styles.GroupShow__header}>
        <h3>Favignana</h3>
      </header>
      <CardList data={data.filter((item) => item.departure.Port.includes("Favignana"))} />
      <header className={styles.GroupShow__header}>
        <h3>Lampedusa</h3>
      </header>
      <CardList data={data.filter((item) => item.departure.Port.includes("Lampedusa"))} />
      <header className={styles.GroupShow__header}>
        <h3>Lipari</h3>
      </header>
      <CardList data={data.filter((item) => item.departure.Port.includes("Lipari"))} />
      <header className={styles.GroupShow__header}>
        <h3>Marsala</h3>
      </header>
      <CardList data={data.filter((item) => item.departure.Port.includes("Marsala"))} />
      <header className={styles.GroupShow__header}>
        <h3>Palermo</h3>
      </header>
      <CardList data={data.filter((item) => item.departure.Port.includes("Palermo"))} />
      <header className={styles.GroupShow__header}>
        <h3>Pantelleria</h3>
      </header>
      <CardList
        data={data.filter((item) => item.departure.Port.includes("Pantelleria"))}
      />
      <header className={styles.GroupShow__header}>
        <h3>Salina</h3>
      </header>
      <CardList data={data.filter((item) => item.departure.Port.includes("Salina"))} />
      <header className={styles.GroupShow__header}>
        <h3>San Vito lo Capo</h3>
      </header>
      <CardList
        data={data.filter((item) => item.departure.Port.includes("San Vito lo Capo"))}
      />
      <header className={styles.GroupShow__header}>
        <h3>Ustica</h3>
      </header>
      <CardList data={data.filter((item) => item.departure.Port.includes("Ustica"))} />
    </section>
  );
};

export default GroupShow;
