import React from "react";
import styles from "./hero_section.module.css";

function HeroSection(prams) {
  return (
    <div>
      <header className={styles.bg}>
        <div className={styles.center}>
          <h1 className={styles.main_title}>
            <span className={styles.greetings}>Welcome to</span> Islamic Dev
            Repo
          </h1>
          <h2>Find all islamic handy resources at one place</h2>
        </div>
      </header>
    </div>
  );
}

export default HeroSection;
