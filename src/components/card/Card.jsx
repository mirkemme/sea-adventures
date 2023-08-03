import Image from "next/image";
import styles from "./Card.module.scss";
import arrowIcon from "../../../public/assets/icons/right-arrow-alt.svg";

const Card = ({ props }) => {
  return (
    <div className={styles.Card}>
      <p className={styles.Card__price}>
        <span>480€</span> per cabina
      </p>
      <h2 className={styles.Card__locality}>Isole Egadi</h2>
      <div className={styles.Card__container}>
        <div className={styles.Card__wrapper}>
          <h4 className={styles.Card__departure}>partenza da</h4>
          <h3 className={styles.Card__departureLocality}>Favignana</h3>
        </div>
        <div className={styles.Card__wrapper}>
          <p className={styles.Card__boat}>Barca a vela</p>
          <p className={styles.Card__duration}>3 giorni</p>
        </div>
      </div>
      <div className={styles.Card__container}>
        <div className={styles.Card__wrapper}>
          <p className={styles.Card__date}>01/01/2023</p>
          <p className={styles.Card__time}>07:50</p>
        </div>
        <div className={styles.Card__arrowIcon}>
          <Image src={arrowIcon} width={30} height={30} alt="arrow" />
        </div>
        <div className={styles.Card__wrapper}>
          <p className={styles.Card__date}>10/01/2023</p>
          <p className={styles.Card__time}>15:00</p>
        </div>
      </div>
      <div className={styles.Card__wrapper}>
        <p className={styles.Card__cabins}>4 Cabine</p>
        <p className={styles.Card__availability}>
          Disponibilità <span>2</span>
        </p>
      </div>
      <div className={styles.Card__buttonContainer}>
        <button className={styles.Card__buttonContainer__button}>prenota</button>
      </div>
    </div>
  );
};

export default Card;
