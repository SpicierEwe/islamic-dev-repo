import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";

import styles from "./home_page_nav.module.css";

export default function HomePageNav(props) {
  return (
    <header className={styles.header_bg}>
      <nav className={styles.desktop_nav}>
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

            <div className={styles.desktop_mav_items}>
              <ul className={styles.ul_container}>
                <Link href={"/change_log"}>
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
          </div>
          {props.children}
        </div>
      </nav>

      <nav className={styles.mobile_nav}>
        <HiMenuAlt3></HiMenuAlt3>
      </nav>
    </header>
  );
}
