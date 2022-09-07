import "../../db/db.json";

import { useState, useContext } from "react";
import DataContext from "../../store/data_context";
import Image from "next/image";
import styles from "./main_section.module.css";

import Link from "next/link";

export function MainSection(props) {
  const dataCtx = useContext(DataContext);

  // console.log(dataCtx.data);

  // this is the home page component

  return (
    <div className={styles.bg}>
      <section>
        {dataCtx.db.map((mainData, index) => {
          return (
            <div key={index} className={styles.section_bg}>
              <div>
                <h2
                  className={styles.section_titles}
                  key={Object.keys(mainData)[0]}
                >
                  {/* TITLE */}
                  {Object.keys(mainData)}
                </h2>
              </div>

              {Object.keys(mainData).map((titleKeys, index) => {
                return (
                  <ul key={index} className={styles.items_container}>
                    {mainData[titleKeys].map((data, index) => {
                      return (
                        <Link
                          key={index}
                          href={`${titleKeys}/${Object.keys(data)}`}
                        >
                          <li>
                            {/* item image */}

                            <Image
                              src={data[Object.keys(data)]["icon_link"]}
                              alt={Object.keys(data) + " Icon"}
                              width="50%"
                              height="50%"
                              layout="fixed"
                              objectFit="cover"
                            ></Image>

                            {/* title */}
                            <h3 className={styles.item_title}>
                              {Object.keys(data)}
                            </h3>
                            {/* description */}
                            <p className={styles.item_description}>
                              {data[Object.keys(data)]["description"]}
                            </p>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
}
