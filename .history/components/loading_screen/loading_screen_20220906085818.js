import React from "react";
import Image from "next/image";

import styles from "./loading_screen.module.css";

export default function LoadingScreen() {
  return (
    <section className={styles.bg}>
      <main className={styles.container}>
        {/* spinner */}
        <div className={styles.spinner}></div>
        {/* image */}
        {/* <div className={styles.logo_image}> */}
        <Image
          className={styles.logo_image}
          src={"/images/logo/logo.svg"}
          layout="fixed"
          height="70%"
          width="70%"
          objectFit="contain"
          alt="Loading Image"
        ></Image>
        {/* </div> */}
      </main>
    </section>
  );
}
