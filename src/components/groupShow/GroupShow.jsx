import CardList from "../cardList";
import styles from "./GroupShow.module.scss";

const GroupShow = ({ data }) => {
  function compare(a, b) {
    if (a.departure.Port < b.departure.Port) {
      return -1;
    }
    if (a.departure.Port > b.departure.Port) {
      return 1;
    }
    return 0;
  }
  const array = data.sort(compare);

  return (
    <section className={styles.GroupShow}>
      <header className={styles.GroupShow__header}>
        <h3>Favignana</h3>
      </header>
      <CardList
        data={array.filter((item) => item.departure.Port.includes("Favignana"))}
      />
      <header className={styles.GroupShow__header}>
        <h3>Lampedusa</h3>
      </header>
      <CardList
        data={array.filter((item) => item.departure.Port.includes("Lampedusa"))}
      />
      <header className={styles.GroupShow__header}>
        <h3>Lipari</h3>
      </header>
      <CardList data={array.filter((item) => item.departure.Port.includes("Lipari"))} />
      <header className={styles.GroupShow__header}>
        <h3>Marsala</h3>
      </header>
      <CardList data={array.filter((item) => item.departure.Port.includes("Marsala"))} />
      <header className={styles.GroupShow__header}>
        <h3>Palermo</h3>
      </header>
      <CardList data={array.filter((item) => item.departure.Port.includes("Palermo"))} />
    </section>
  );
};

export default GroupShow;
