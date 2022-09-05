/* Documetation - 
This page shows the context of the the selected item category the user will have downloadable links of the resource user a specific selected category
*/

import React, { Fragment, useContext, useEffect, useState } from "react";
import DownloadableContext from "../../store/doenloadable_context";
import styles from "./display_reciters.module.css";
import Image from "next/image";
import Link from "next/link";

// Here starts the Function
export default function DisplayReciters(props) {
  // getting hold of data from context
  const mainData = props.data;

  // loading screen state manager
  const [isLoading, setIsLoading] = useState(true);

  // is download button hovered
  // will change the icon if download button is hovered
  const [isDownloadButtonHovered, setIsDownlaodButtonHovered] = useState(false);

  const [hoveredIndex, setHoveredindex] = useState(0);

  useEffect(() => {
    setIsLoading(false);
  }, [mainData.length]);

  return (
    <div>
      {/* this is the header */}
      <header className={styles.header}>
        {/* main title */}
        <h1>{Object.keys(mainData)}</h1>
      </header>
      {/* sub nav bar */}
      <nav className={styles.nav_bar}>
        <ul className={styles.nav_items_container}>
          {mainData[Object.keys(mainData)]["resources"].map((data, index) => {
            return (
              <li key={index} className={styles.nav_item}>
                <p>
                  {Object.keys(data)
                    .toString()[0]
                    .toUpperCase()
                    .join()
                    .replaceAll("_", " ")}
                </p>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* main */}
      <main>
        <section>
          <ul className={styles.items_container}>
            {mainData[Object.keys(mainData)]["resources"].map((data, index) => {
              return (
                <div key={index}>
                  {data[Object.keys(data)].map((data, index) => {
                    return (
                      <div key={index}>
                        {Object.keys(data).map((keys, index) => {
                          return <h1 key={index}>{keys}</h1>;
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}
