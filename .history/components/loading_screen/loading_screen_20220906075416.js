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
        <div className={styles.logo_image}>
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
