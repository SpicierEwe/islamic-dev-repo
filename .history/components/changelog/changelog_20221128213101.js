import React from "react";
import styles from "./changelog.module.css";

export default function ChangeLogComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Change-Log <span>|</span>
      </h1>
      <p>Here is the change log</p>
    </div>
  );
}
