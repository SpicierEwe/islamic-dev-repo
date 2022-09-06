import React from "react";
import Image from "next/image";

import styles from "./loading_screen.module.css";

export default function LoadingScreen() {
  return (
    <section className={styles.bg}>
      <main className={styles.container}>
        <div className={styles.parent}></div>
        <div className={styles.child}>This is child</div>
      </main>
    </section>
  );
}
