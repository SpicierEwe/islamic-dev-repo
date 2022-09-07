// this is the nav for sub pages which displayed the selected unit name and total resources

import React from "react";
import Image from "next/image";

import styles from "./sub_pages_nav.module.css";

export default function SubPagesNav(props) {
  const mainData = props.data;
  return (
    <header className={styles.header_bg}>
      <div className={styles.header}>
        {/* main title */}

        <Image src={"/images/logo/logo.svg"}></Image>
        <h1>{Object.keys(mainData)}</h1>
        {props.children}
      </div>
    </header>
  );
}
