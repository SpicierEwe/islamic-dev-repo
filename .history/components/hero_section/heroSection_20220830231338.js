import React from "react";
import styles from "./hero_section.module.css";

function HeroSection(prams) {
  return (
    <div>
      <header className={styles.bg}>
        <div className={styles.center}>
          <h1 className={styles.main_title}>Welcome to Islamic Dev Repo</h1>
        </div>
      </header>
    </div>
  );
}

export default HeroSection;
