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
                  width="30%"
                  height="30%"
                  alt="logo_img"
                ></Image>
              </Link>
            </div>
            <p>hjk</p>
          </div>
          {props.children}
        </div>
      </nav>
    </header>
  );
}
