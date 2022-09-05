/* Documetation - 
This page shows the context of the the selected item category the user will have downloadable links of the resource user a specific selected category
*/

import React, { Fragment, useContext, useEffect, useState } from "react";
import DownloadableContext from "../../store/doenloadable_context";
import styles from "./display_downloadable.module.css";

export default function DisplayDownloadable(props) {
  const data = useContext(DownloadableContext).data;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false), [data.length, isLoading];
  });

  if (data.length == 0) {
    return (
      <div>
        {/* this is the header */}
        <header className={styles.header}>
          {/* title */}
          <h1>{Object.keys(data)}</h1>
        </header>

        {/* main */}
        <main>
          <section>
            <ul>
              {/* {data[Object.keys(data)]["resources"].map((data, index) => {
                return <li key={index}>huihii</li>;
              })} */}
            </ul>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div>
      <h1>loading</h1>
    </div>
  );
}
