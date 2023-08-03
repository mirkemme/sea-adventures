import Head from "next/head";
import Image from "next/image";
import logoIcon from "../../public/assets/images/logo.svg";
import heroImage from "../../public/assets/images/hero.jpeg";
import bannerImage from "../../public/assets/images/banner.jpeg";
import styles from "../styles/Home.module.scss";
import CardList from "@/components/cardList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sea Adventures</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <Image src={logoIcon} width={40} height={40} alt="logo" />
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.hero__image}>
            <Image src={heroImage} width={1920} height={1279} alt="hero" />
          </div>
          <h2 className={styles.hero__text}>Lorem ipsum dolor sit amet consectetur.</h2>
        </section>
        <section className={styles.content}>
          <CardList />
        </section>
        <section className={styles.banner}>
          <div className={styles.banner__image}>
            <Image src={bannerImage} width={1920} height={1279} alt="banner" />
          </div>
          <div className={styles.banner__text}>
            <div className={styles.banner__text__wrapper}>
              <h2 className={styles.banner__firstText}>+20</h2>
              <h2 className={styles.banner__firstText}>Destinazioni</h2>
            </div>
            <div className={styles.banner__text__wrapper}>
              <h2 className={styles.banner__secondText}>+15</h2>
              <h2 className={styles.banner__secondText}>Imbarcazioni</h2>
            </div>
            <div className={styles.banner__text__wrapper}>
              <h2 className={styles.banner__thirdText}>+40</h2>
              <h2 className={styles.banner__thirdText}>Itinerari</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
