import Image from "next/image";
import styles from "./Card.module.scss";
import arrowIcon from "../../../public/assets/icons/right-arrow-alt.svg";

const Card = ({ data }) => {
  return (
    <div className={styles.Card}>
      <p className={styles.Card__price}>
        <span>{data.budget.value}€</span> per cabina
      </p>
      <h2 className={styles.Card__locality}>{data.title}</h2>
      <div className={styles.Card__container}>
        <div className={styles.Card__wrapper}>
          <h4 className={styles.Card__departure}>partenza da</h4>
          <h3 className={styles.Card__departureLocality}>{data.departure.Port}</h3>
        </div>
        <div className={styles.Card__wrapperRight}>
          <p className={styles.Card__boat}>{data.boatType}</p>
          <p className={styles.Card__duration}>{data.numberOfDays} giorni</p>
        </div>
      </div>
      <div className={styles.Card__container}>
        <div className={styles.Card__wrapper}>
          <p className={styles.Card__date}>
            {data.arrivalDate.slice(0, 10).split("-").reverse().join("/")}
          </p>
          <p className={styles.Card__time}>{data.arrivalDate.slice(11, 16)}</p>
        </div>
        <div className={styles.Card__arrowIcon}>
          <Image src={arrowIcon} width={30} height={30} alt="arrow" />
        </div>
        <div className={styles.Card__wrapperRight}>
          <p className={styles.Card__date}>
            {data.departureDate.slice(0, 10).split("-").reverse().join("/")}
          </p>
          <p className={styles.Card__time}>{data.departureDate.slice(11, 16)}</p>
        </div>
      </div>
      <div className={styles.Card__wrapper}>
        <p className={styles.Card__cabins}>{data.reservations} Cabine</p>
        <p className={styles.Card__availability}>
          Disponibilità <span>{data.reservationsAvailable}</span>
        </p>
      </div>
      <div className={styles.Card__buttonContainer}>
        <button className={styles.Card__buttonContainer__button}>prenota</button>
      </div>
    </div>
  );
};

export default Card;
