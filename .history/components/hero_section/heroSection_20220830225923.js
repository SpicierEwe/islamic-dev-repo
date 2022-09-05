import React from "react";
import styles from "./hero_section.module.css";

function HeroSection(prams) {
  return (
    <div>
      <header className={styles.bg}>
        <div>
          <h1>Welcome to Islamic Dev Repo</h1>
        </div>
      </header>
    </div>
  );
}

export default HeroSection;
