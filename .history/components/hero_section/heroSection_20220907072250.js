import React from "react";
import styles from "./hero_section.module.css";
import Image from "next/image";
import HomePageNav from "../nav_bar/home_page_nav/home_page_nav";
import DataContext from "../../store/data_context";
import { useContext } from "react";

function HeroSection(prams) {
  const dataCtx = useContext(DataContext);

  return (
    <div className={styles.nav_hero_bg}>
      {/* home page nav */}
      <HomePageNav></HomePageNav>
      <div className={styles.bg}>
        <div>
          <h1 className={styles.main_title}>
            <span className={styles.greetings}>Welcome to</span> Islamic Dev
            Repo
          </h1>
          <h2 className={styles.sub_heading}>
            Find all islamic handy resources at one place
          </h2>
        </div>

        <Image
          // className={styles.logo_image}
          src={"/images/logo/logo.svg"}
          alt={"logo"}
          width="350px"
          height="300px"
          // layout="fixed"
        ></Image>
      </div>
      {/* filters  */}
      <div className={styles.filter_chip_container_parent}>
        <div className={styles.filter_chip_container}>
          {/* FILTER CHIP */}
          {dataCtx.db.map((data, index) => {
            return (
              <ul key={index} className={styles.filter_chip}>
                {/* {data["title"]} */}
                <li onClick={document.getElementById({{Object.keys(data)}})}>{Object.keys(data)}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
