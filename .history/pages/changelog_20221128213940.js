import Image from "next/image";
import React from "react";
import ChangeLogComponent from "../components/changelog/changelog";
import shared_styles from "../components/legal/about_us/about_us.module.css";

export default function ChangeLog() {
  return (
    <div>
      <div className={styles.header}>
        <link href={"/"}>
          <div className={styles.logo}>
            <Image
              src={"/images/logo/logo.svg"}
              width="31%"
              height="31%"
              alt="logo_img"
            ></Image>
          </div>
        </link>
        <h1 className={styles.page_title}>About Us</h1>
      </div>
      <ChangeLogComponent></ChangeLogComponent>
    </div>
  );
}
