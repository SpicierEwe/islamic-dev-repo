import React from "react";
import Image from "next/image";

import styles from "./loading_screen.module.css";

export default function LoadingScreen() {
  return (
    <main className={styles.bg}>
      <h1>LOADING</h1>
      <Image src={"/images/logo/logo.svg"}></Image>
    </main>
  );
}
