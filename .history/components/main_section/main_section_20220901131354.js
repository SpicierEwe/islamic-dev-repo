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
              <h2 className={styles.section_titles}>{Object.keys(data)}</h2>
              <div className={styles.options}>
                {Object.keys(data).map((titleKeys, index) => {
                  return (
                    <h3 key={index}>
                      {data[titleKeys].map((data, index) => {
                        return <p key={index}>{Object.keys(data)}</p>;
                      })}
                    </h3>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
