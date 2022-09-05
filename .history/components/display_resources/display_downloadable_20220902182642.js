/* Documetation - 
This page shows the context of the the selected item category the user will have downloadable links of the resource user a specific selected category
*/

import React, { Fragment, useContext } from "react";
import DownloadableContext from "../../store/doenloadable_context";
import styles from "./display_downloadable.module.css";

export default function DisplayDownloadable(props) {
  const data = useContext(DownloadableContext).data;

  return (
    <div className={styles.bg}>
      {/* this is the header */}
      <header className={styles.header}>
        {/* title */}
        <h1>{Object.keys(data)}</h1>
      </header>

      {/* main */}
      <main>
        <section>
          <ul>{data[Object.keys(data)])</ul>
        </section>
      </main>
    </div>
  );
}
