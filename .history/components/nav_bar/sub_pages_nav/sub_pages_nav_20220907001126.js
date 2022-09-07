// this is the nav for sub pages which displayed the selected unit name and total resources

import React from "react";
import Image from "next/image";

import styles from "./sub_pages_nav.module.css";

export default function SubPagesNav(props) {
  const mainData = props.data;

  console.log(mainData);
  return (
    <header className={styles.header_bg}>
      <div className={styles.header}>
        {/* main title */}
        <div className={styles.heading_container}>
          <div className={styles.logo}>
            <Image
              src={"/images/logo/logo.svg"}
              width="50%"
              height="50%"
              alt="logo_img"
            ></Image>
          </div>

          <div className={styles.heading_titles}>
            <h1>{Object.keys(mainData)}</h1>
            <h3>{mainData.length + "resources available"}</h3>
          </div>
        </div>
        {props.children}
      </div>
    </header>
  );
}
