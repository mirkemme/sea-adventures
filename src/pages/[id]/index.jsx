import { useState } from "react";
import { useRouter } from "next/router";
import { API_BASE_URL } from "..";
import styles from "./index.module.scss";
import { formatTime } from "@/utils/formatTime";
import { formatDate } from "@/utils/formatDate";
import { LuSailboat } from "react-icons/lu";
import {
  BsArrowLeftSquareFill,
  BsArrowDown,
  BsBookmark,
  BsBookmarkFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/button";
import Dialog from "@/components/dialog";

export default function Tour({ data }) {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(data.budget.value);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function openModalDialog() {
    setIsDialogOpen((prev) => !prev);
    const timer = setTimeout(() => {
      setIsDialogOpen((prev) => !prev);
    }, 2000);

    return () => clearTimeout(timer);
  }

  const onHandleBack = () => router.back();
  const onHandleBookmark = () => {
    setIsBookmarked((prev) => !prev);
    openModalDialog();
  };
  const onHandleCount = (op) => {
    if (op === "plus" && count < data.reservationsAvailable) {
      setCount(count + 1);
      setPrice(price + data.budget.value);
    } else if (op === "minus" && count > 1) {
      setCount(count - 1);
      setPrice(price - data.budget.value);
    }
  };

  return (
    <section className={styles.Tour}>
      {isBookmarked ? (
        <Dialog isDialogOpen={isDialogOpen} label={"Aggiunto ai salvati"} />
      ) : (
        <Dialog isDialogOpen={isDialogOpen} label={"Rimosso dai salvati"} />
      )}

      <header className={styles.Tour__header}>
        <h1 className={styles.Tour__title}>{data?.title}</h1>
        <div className={styles.Tour__header__container}>
          {isBookmarked ? (
            <BsBookmarkFill
              className={`${styles.Tour__bookmarkIcon} ${
                isDialogOpen && styles.Tour__noClick
              }`}
              alt="bookmarked"
              onClick={onHandleBookmark}
            />
          ) : (
            <BsBookmark
              className={`${styles.Tour__bookmarkIcon} ${
                isDialogOpen && styles.Tour__noClick
              }`}
              alt="bookmark"
              onClick={onHandleBookmark}
              disabled="disabled"
            />
          )}
          <BsArrowLeftSquareFill
            className={styles.Tour__backIcon}
            onClick={onHandleBack}
            alt="back"
          />
        </div>
      </header>
      <div className={`${styles.Tour__gallery} `}>
        <Swiper
          modules={[Navigation, Pagination]}
          className="mySwiper"
          pagination={{ clickable: true }}
          navigation={true}
        >
          {data?.images?.map((image) => (
            <SwiperSlide key={image?.id}>
              <div className={styles.Tour__gallery__container}>
                <img
                  src={image.url}
                  className={styles.Tour__gallery__image}
                  alt="image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.Tour__details}>
          <p className={styles.Tour__price}>
            {price}
            {data?.budget?.currencyCode}
          </p>
          <p className={styles.Tour__nDays}>
            {data?.numberOfDays} {data?.numberOfDays === 1 ? "giorno" : "giorni"}
          </p>
        </div>
      </div>
      <div className={styles.Tour__container}>
        <div className={styles.Tour__info}>
          <div className={styles.Tour__info__wrapper}>
            <p className={styles.Tour__reservationsType}>{data.reservationsType}</p>
            <div className={styles.Tour__counter}>
              <div className={styles.Tour__countIcon}>
                <Button
                  handleClick={() => onHandleCount("minus")}
                  count={count}
                  type={"minus"}
                />
              </div>
              <h3 className={styles.Tour__count}>{count}</h3>
              <div className={styles.Tour__countIcon}>
                <Button
                  handleClick={() => onHandleCount("plus")}
                  count={count}
                  type={"plus"}
                />
              </div>
            </div>
          </div>
          <div className={styles.Tour__info__wrapper}>
            <p className={styles.Tour__departureText}>Partenza da</p>
            <p className={styles.Tour__departure}>{data?.departure?.Port}</p>
            <div className={styles.Tour__info__container}>
              <div>
                <p className={styles.Tour__date}>
                  {formatDate(data?.departureDate)}{" "}
                  <span>{formatTime(data?.departureDate)}</span>
                </p>
                <p className={styles.Tour__date}>
                  {formatDate(data?.arrivalDate)}{" "}
                  <span>{formatTime(data?.arrivalDate)}</span>
                </p>
              </div>
              <BsArrowDown className={styles.Tour__arrowDownIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Tour__description}>
        <h3>Descrizione</h3>
        <p className={styles.Tour__description__text}>{data?.description}</p>
      </div>
      <div className={styles.Tour__container}>
        <div className={styles.Tour__itinerary}>
          <h3>Itinerario</h3>
          <div className={styles.Tour__stages}>
            <div className={styles.Tour__stages__wrapper}>
              <p className={styles.Tour__stages__stage}>{data?.departure?.Port}</p>
              <LuSailboat className={styles.Tour__boatIcon} />
            </div>
            {data.itinerary.map((stage) => (
              <div className={styles.Tour__stages__wrapper} key={stage?.portCode}>
                <p className={styles.Tour__stages__stage}>{stage?.Port}</p>
                <LuSailboat className={styles.Tour__boatIcon} />
              </div>
            ))}
            <p className={styles.Tour__stages__stage}>{data?.arrival?.Port}</p>
          </div>
        </div>
      </div>
      <div className={styles.Tour__container}>
        <h3>Da sapere</h3>
        <div className={styles.Tour__thingsToKnow}>
          <div className={styles.Tour__wrapper}>
            <h6 className={styles.Tour__text}>disponibilità</h6>
            <p className={styles.Tour__reservationsAvailable}>
              {data?.reservationsAvailable}
            </p>{" "}
          </div>
          <div className={styles.Tour__wrapper}>
            <h6 className={styles.Tour__text}>prenotazioni</h6>
            <p className={styles.Tour__reservations}>{data?.reservations}</p>
          </div>
          <div className={styles.Tour__wrapper}>
            <h6 className={styles.Tour__text}>tipo di prenotazione</h6>
            <p className={styles.Tour__reservationsType}>{data?.reservationsType}</p>
          </div>
          <div className={styles.Tour__wrapper}>
            <h6 className={styles.Tour__text}>tipo di barca</h6>
            <p className={styles.Tour__boatType}>{data?.boatType}</p>
          </div>
          <div className={styles.Tour__wrapper}>
            <h6 className={styles.Tour__text}>valutazione</h6>
            <p className={styles.Tour__ratings}>{data?.ratings}</p>
          </div>
          <div className={styles.Tour__wrapper}>
            <h6 className={styles.Tour__text}>recensioni</h6>
            <p className={styles.Tour__nOfReviews}>{data?.numberOfReviews}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const queryId = context.query.id;
  const res = await fetch(`${API_BASE_URL}/${queryId}`);
  const data = await res.json();

  return {
    props: { data },
  };
}
