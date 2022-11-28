import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";

import styles from "./home_page_nav.module.css";

export default function HomePageNav(props) {
  // resposible to show and hide the nav bar
  const [showMenu, setShowMenu] = React.useState(false);
  const nav_items_list = [
    {
      title: "Change Log",
      link: "/change_log",
    },
    {
      title: "About Us",
      link: "/legal/about_us",
    },
    {
      title: "Contact Us",
      link: "/legal/contact_us",
    },
  ];
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
            <div className={styles.desktop_nav_items}>
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
            {/* these are the items of mobile nav bar */}
            <div className={styles.mobile_nav_items}>
              <HiMenuAlt3
                onClick={(e) => {
                  setShowMenu(!showMenu);
                }}
                size={34}
              ></HiMenuAlt3>
            </div>

            {
              <div>
                {showMenu ? (
                  <div className={styles.overlay}>
                    <div className={styles.overlay_content}>
                      <div className={styles.close_menu}>&times;</div>
                      <ul className={styles.overlay_items}>
                        {nav_items_list.map((item, index) => {
                          return (
                            <Link key={index} href={item.link}>
                              <li>{item.title}</li>
                            </Link>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ) : (
                  
                )}
              </div>
            }
          </div>

          {props.children}
        </div>
      </nav>
    </header>
  );
}
