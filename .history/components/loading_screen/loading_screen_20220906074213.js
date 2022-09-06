import React from "react";
import Image from "next/image";

import styles from "./loading_screen.module.css";

export default function LoadingScreen() {
  return (
    <section className={styles.bg}>
      <main>
        <div className={styles.spinner}></div>

        <Image
          src={"/images/logo/logo.svg"}
          height="100%"
          width="100%"
          alt="Loading Image"
        ></Image>
      </main>
    </section>
  );
}
