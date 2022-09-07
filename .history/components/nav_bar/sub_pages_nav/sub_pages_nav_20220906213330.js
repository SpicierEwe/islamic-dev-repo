import React from "react";

import styles from "./sub_pages_nav.module.css";
import { useState, useEffect } from "react";

export default function SubPagesNav(props) {
  const mainData = props.data;
  return (
    <header className={styles.header_bg}>
      <div className={styles.header}>
        {/* main title */}
        <h1>{Object.keys(mainData)}</h1>
        {props.children}
      </div>
    </header>
  );
}
