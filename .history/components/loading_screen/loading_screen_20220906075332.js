import React from "react";
import Image from "next/image";

import styles from "./loading_screen.module.css";

export default function LoadingScreen() {
  return (
    <section className={styles.bg}>
      <main className={styles.container}>
        <div className={styles.spinner}>
          <div className={styles.logo_image}></div>
          <Image
            src={"/images/logo/logo.svg"}
            height="100%"
            width="100%"
            alt="Loading Image"
          ></Image>
        </div>
      </main>
    </section>
  );
}
