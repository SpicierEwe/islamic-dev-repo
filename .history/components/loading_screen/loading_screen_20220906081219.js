import React from "react";
import Image from "next/image";

import styles from "./loading_screen.module.css";

export default function LoadingScreen() {
  return (
    <section className={styles.bg}>
      <main className={styles.container}>
        <div class={styles.parent}></div>
        <div class={styles.child}>This is child</div>
      </main>
    </section>
  );
}
