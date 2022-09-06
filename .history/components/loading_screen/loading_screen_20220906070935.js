import React from "react";
import Image from "next/image";

import styles from "./loading_screen.module.css";

export default function LoadingScreen() {
  return (
    <section className={styles.bg}>
      <main>
        <div>
          <Image
            src={"/images/logo/logo.svg"}
            height="100%"
            width="100%"
          ></Image>
        </div>
      </main>
    </section>
  );
}
