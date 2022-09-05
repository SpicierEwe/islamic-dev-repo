import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/hero_section/heroSection";
import { MainSection } from "../components/main_section/main_section";
import styles from "../styles/Home.module.css";

import { useContext } from "react";
import DataContext from "../store/data_context";

export default function Home(props) {
  const dataCtx = useContext;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection></HeroSection>
        <MainSection></MainSection>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  fetch("/api/db")
    .then((res) => res.json())
    .then((responseData) => setData(responseData));

  return {
    props: {},
  };
}
