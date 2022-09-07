import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./home_page_nav.module.css";

export default function HomePageNav(props) {
  return (
    <header className={styles.header_bg}>
      <div className={styles.header}>
        {/* main title */}
        <div className={styles.heading_container}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <Image
                src={"/images/logo/logo.svg"}
                width="50%"
                height="50%"
                alt="logo_img"
              ></Image>
            </Link>
          </div>
        </div>
        {props.children}
      </div>
    </header>
  );
}
