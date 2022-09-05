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
      <div>
        {dataCtx.data.map((data, index) => {
          return (
            <div key={index} className={styles.filter_chip}>
              {data["title"]}
            </div>
          );
        })}
      </div>
      {/* <h1>hiii</h1> */}
    </div>
  );
}
