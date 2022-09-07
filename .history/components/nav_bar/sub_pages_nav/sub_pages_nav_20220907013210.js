// this is the nav for sub pages which displayed the selected unit name and total resources

import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./sub_pages_nav.module.css";

export default function SubPagesNav(props) {
  const page_title = props.page_title;
  const resources_count = props.resources_count;

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

          <div className={styles.heading_titles}>
            <h1>{page_title}</h1>
            <div className={styles.resource_count_container}>
              <h3>{resources_count.toString().replaceAll(",", "")}</h3>
              <h4>resources available</h4>
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </header>
  );
}
