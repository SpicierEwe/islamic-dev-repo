import "../../db/db.json";

import { useState, useContext } from "react";
import DataContext from "../../store/data_context";
import Image from "next/image";

import styles from "./main_section.module.css";

import { HiSpeakerWave } from "react-icons/Hi";
import Link from "next/link";
export function MainSection(prams) {
  const dataCtx = useContext(DataContext);

  console.log(dataCtx.data);

  const [data, setData] = useState([]);

  return (
    <div className={styles.bg}>
      <div className={styles.filter_chip_container}>
        {/* FILTER CHIP */}
        {dataCtx.data.map((data, index) => {
          return (
            <ul key={index} className={styles.filter_chip}>
              {/* {data["title"]} */}
              {Object.keys(data)}
            </ul>
          );
        })}
      </div>
      {/* TITLE */}
      <section>
        {dataCtx.data.map((mainData, index) => {
          return (
            <div key={index} className={styles.section_bg}>
              <div>
                <h2 className={styles.section_titles}>
                  {Object.keys(mainData)}
                </h2>
              </div>

              {Object.keys(mainData).map((titleKeys, index) => {
                return (
                  <Link key={index} href={`${index}`}>
                    <ul className={styles.items_container}>
                      {mainData[titleKeys].map((data, index) => {
                        console.log(`${titleKeys}/${Object.keys(data)}`);
                        return (
                          <li key={index}>
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
                        );
                      })}
                    </ul>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
}
