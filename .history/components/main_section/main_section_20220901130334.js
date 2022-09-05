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
      {dataCtx.data.map((data, index) => {
        return (
          <div key={index}>
            <h2 className={styles.section_titles}>{Object.keys(data)}</h2>
            <h3>
              {Object.keys(data).map((titleKeys, index) => {
                return <h3 key={index}>{data.titleKeys}</h3>;
              })}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
