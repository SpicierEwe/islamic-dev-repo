/* Documetation - 
This page shows the context of the the selected item category the user will have downloadable links of the resource user a specific selected category
*/

import React, { Fragment, useContext } from "react";
import DataContext from "../../store/data_context";

import styles from "../display_resources/display_downloadable.module";

export default function DisplayDownloadable(props) {
  const data = useContext(DataContext).data;

  console.log(data);
  return (
    <Fragment>
      <div className={styles.bg}>
        {/* this is the header */}
        <header>
          <h1>{Object.keys(data)}</h1>
        </header>

        {/* main */}
        <main>
          <section></section>
        </main>
      </div>
    </Fragment>
  );
}
