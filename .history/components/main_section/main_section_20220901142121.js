import "../../db/db.json";

import { useState, useContext } from "react";
import DataContext from "../../store/data_context";

import styles from "./main_section.module.css";

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
        {dataCtx.data.map((data, index) => {
          return (
            <div key={index} className={styles.section_bg}>
              <div>
                <h2 className={styles.section_titles}>{Object.keys(data)}</h2>
              </div>

              {Object.keys(data).map((titleKeys, index) => {
                return (
                  <ul key={index} className={styles.options}>
                    {data[titleKeys].map((data, index) => {
                      return (
                        <li key={index}>
                          <h3 className={styles.item}>{Object.keys(data)}</h3>
                          <p>{data[resources]}</p>
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
