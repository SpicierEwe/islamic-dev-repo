import React from "react";
import Image from "next/image";

import styles from "./loading_screen.module.css";

export default function LoadingScreen() {
  return (
    <section className={styles.bg}>
      <main>
        <h1>LOADING</h1>
        <Image src={"/images/logo/logo.svg"} height="100%" width="100%"></Image>
      </main>
    </section>
  );
}
