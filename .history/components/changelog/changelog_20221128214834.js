import React from "react";
import styles from "./changelog.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ChangeLogComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href={"/"}>
          <div className={styles.logo}>
            <Image
              src={"/images/logo/logo.svg"}
              width="31%"
              height="31%"
              alt="logo_img"
            ></Image>
          </div>
        </Link>
        <h1 className={styles.page_title}>Change-Log</h1>
      </div>

      <div>
        <h1 className={styles.title}>Version 1.0.0</h1>
      </div>
    </div>
  );
}
