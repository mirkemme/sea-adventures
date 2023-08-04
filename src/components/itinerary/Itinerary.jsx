import { useEffect, useState } from "react";
import CardList from "../cardList";
import styles from "./Itinerary.module.scss";

const Itinerary = ({ data }) => {
  const [randomItinerary, setRandomItinerary] = useState([]);

  function getMultipleRandom(data, num) {
    const shuffled = [...data].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  useEffect(() => {
    const randomItinerary = getMultipleRandom(data, 8);
    setRandomItinerary(randomItinerary);
  }, []);

  return (
    <section className={styles.Itinerary}>
      <h3>Avventure da scoprire</h3>
      <CardList data={randomItinerary} />;
    </section>
  );
};

export default Itinerary;
