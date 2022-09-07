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
          src={"/images/loading_logo.svg"}
          layout="fill"
          objectFit="contain"
          alt="Loading Image"
          priority:true
        ></Image>
        {/* </div> */}
      </main>
    </section>
  );
}
