import "../../db/db.json";

import { useState, useContext } from "react";
import DataContext from "../../store/data_context";
import Image from "next/image";

import styles from "./main_section.module.css";

import { HiSpeakerWave } from "react-icons/Hi";

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
                  <ul key={index} className={styles.items_container}>
                    {mainData[titleKeys].map((data, index) => {
                      return (
                        <li key={index}>
                          {/* item image */}
                          <Image
                            className={styles.item_image}
                            src={
                              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            }
                            alt={Object.keys(data)}
                            width="15px"
                            height="15px"
                            layout="fixed"
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
                );
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
}
