import CardList from "../cardList";
import styles from "./Itinerary.module.scss";

const Itinerary = ({ data }) => {
  function getMultipleRandom(data, num) {
    const shuffled = [...data].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  const randomItinerary = getMultipleRandom(data, 8);
  return <CardList data={randomItinerary} />;
};

export default Itinerary;
