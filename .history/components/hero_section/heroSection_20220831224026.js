import React from "react";
import styles from "./hero_section.module.css";
import Image from "next/image";

function HeroSection(prams) {
  return (
    <div>
      <header className={styles.bg}>
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
          src={"/images/logo/logo_2.svg"}
          alt={"logo"}
          width="350px"
          height="300px"
          layout="fize"
        ></Image>
      </header>
    </div>
  );
}

export default HeroSection;
