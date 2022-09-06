import React from "react";
import Image from "next/image";

import styles from "./loading_screen.module.css";

export default function LoadingScreen() {
  return (
    <section className={styles.bg}>
      <main className={styles.container}>
        {/* spinner */}
        <div className={styles.parent}></div>
        {/* image */}
        {/* <div className={styles.logo_image}> */}
        <Image
          className={styles.child}
          src={"/images/logo/logo.svg"}
          //   height="100%"
          //   width="100%"
          layout="fill"
          objectFit="contain"
          alt="Loading Image"
        ></Image>
        {/* </div> */}
      </main>
    </section>
  );
}
