import React from "react";

import styles from "./sub_pages_nav.module.css";

export default function SubPagesNav(props) {
  const mainData = props.mainData;
  return (
    <header className={styles.header_bg}>
      <div className={styles.header}>
        {/* main title */}
        <h1>{Object.keys(mainData)}</h1>

        {/* sub nav bar */}
        <nav className={styles.nav_bar}>
          <ul className={styles.nav_items_container}>
            {mainData[Object.keys(mainData)]["resources"].map((data, index) => {
              return (
                <li
                  key={index}
                  className={`${styles.nav_item} ${
                    Object.keys(data)[0] == selectedTab
                      ? styles.nav_item_selected
                      : styles.nav_item_unselected
                  }`}
                  onClick={() => {
                    setSelectedTab(Object.keys(data)[0]);
                  }}
                >
                  <p>
                    {Object.keys(data).toString()[0].toUpperCase() +
                      Object.keys(data)
                        .toString()
                        .substring(1)
                        .replaceAll("_", " ")}
                  </p>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
