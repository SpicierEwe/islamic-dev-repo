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
            <Link href={"/"}>
              <div className={styles.logo}>
                <Image
                  src={"/images/logo/logo.svg"}
                  width="25%"
                  height="25%"
                  alt="logo_img"
                ></Image>
              </div>
            </Link>
            {/* <p>IDV</p> */}
            <ul className={styles.ul_container}>
              <Link href={"/legal/change_log"}>
                <li>Change Log</li>
              </Link>
              <Link href={"/legal/about_us"}>
                <li>Contact Us</li>
              </Link>
              <Link href={"/legal/contact_us"}>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          {props.children}
        </div>
      </nav>
    </header>
  );
}
