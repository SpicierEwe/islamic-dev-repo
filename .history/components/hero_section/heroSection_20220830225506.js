import React from "react";
import styles from "./hero_section.module.css";

function HeroSection(prams) {
  return (
    <div>
      <div className={styles.bg}>
        {" "}
        <h1>Welcome to Islamic Dev Repo</h1>
      </div>
    </div>
  );
}

export default HeroSection;
