import Head from "next/head";
import Image from "next/image";
import logoIcon from "../../public/assets/images/logo.svg";
import heroImage from "../../public/assets/images/hero.jpeg";
import styles from "../styles/Home.module.scss";
import Card from "@/components/card";

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
          <Image src={logoIcon} width={40} height={40} />
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.hero__image}>
            <Image src={heroImage} width={1920} height={1279} />
          </div>
          <h2 className={styles.hero__text}>Lorem ipsum dolor sit amet consectetur.</h2>
        </section>
        <section className={styles.content}>
          <Card />
        </section>
      </main>
    </>
  );
}
