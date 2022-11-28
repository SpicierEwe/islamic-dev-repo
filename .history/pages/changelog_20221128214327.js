import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChangeLogComponent from "../components/changelog/changelog";
import styles from "../components/changelog/changelog.module.css";
import shared_styles from "../components/legal/about_us/about_us.module.css";

export default function ChangeLog() {
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
        <h1 className={styles.page_title}>Change0Log</h1>
      </div>
      <ChangeLogComponent></ChangeLogComponent>
    </div>
  );
}
