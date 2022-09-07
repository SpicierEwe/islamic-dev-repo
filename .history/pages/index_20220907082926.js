import { promises as fs } from "fs";
import path from "path";

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
        <title>Islamic Dev Repo</title>
        <meta
          name="description"
          content="Islamic Dev Repo. Find all islamic handy resources at one place"
        />
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

  // requesting from next js api

  const data = await getDb();

  // console.log(data);

  return {
    props: {
      data,
    },
  };
}

// this function fetched the entire resourse json file
async function getDb() {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "/db", "/db.json");
  //Read the json data file data.json
  const db = await JSON.parse(await fs.readFile(jsonDirectory));

  return db;
}
