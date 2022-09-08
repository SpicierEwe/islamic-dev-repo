import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./home_page_nav.module.css";

export default function HomePageNav(props) {
  return (
    <header className={styles.header_bg}>
      <nav>
        <div className={styles.header}>
          {/* main title */}
          <div className={styles.heading_container}>
            <div className={styles.logo}>
              <Link href={"/"}>
                <Image
                  src={"/images/logo/logo.svg"}
                  width="25%"
                  height="25%"
                  alt="logo_img"
                ></Image>
              </Link>
            </div>
            <ul>
              <li>ABOUT</li>
              <li>DATA SOURCE</li>
            </ul>
          </div>
          {props.children}
        </div>
      </nav>
    </header>
  );
}