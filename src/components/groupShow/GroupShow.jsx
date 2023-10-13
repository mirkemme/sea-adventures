import CardList from "../cardList";
import styles from "./GroupShow.module.scss";

const GroupShow = ({ props }) => {
  const { data } = props || null;
  const portList = props.portList.current || null;

  return (
    <section className={styles.GroupShow}>
      {portList?.map((item) => (
        <div key={item?.portCode}>
          <header className={styles.GroupShow__header}>
            <h3>{item?.Port}</h3>
          </header>
          <CardList
            data={data?.filter((tour) => tour?.departure?.Port?.includes(item?.Port))}
            isButtonVisible={false}
          />
        </div>
      ))}
    </section>
  );
};

export default GroupShow;
