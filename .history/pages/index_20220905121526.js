import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/hero_section/heroSection";
import { MainSection } from "../components/main_section/main_section";
import styles from "../styles/Home.module.css";

import { useContext, useEffect } from "react";
import DataContext from "../store/data_context";

export default function Home(props) {
  const dataCtx = useContext(DataContext);
  // if the data is not empty globalise the data

  useEffect(() => {
    // console.log(props.data);
    dataCtx.globaliseDataFunction(props.data), [];
  });

  return (
    <div>
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
export async function getStaticProps() {
  // checking envirnment
  const hostName =
    process.env.NODE_ENV != "production"
      ? "http://localhost:3000"
      : `https://${NEXT_PUBLIC_VERCEL_URL}`;

  // requesting from next js api
  const res = await fetch(`${hostName}/api/resources`);

  const data = await res.json();

  // console.log(data);

  return {
    props: {
      data,
    },
  };
}
