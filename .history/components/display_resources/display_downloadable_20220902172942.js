/* Documetation - 
This page shows the context of the the selected item category the user will have downloadable links of the resource user a specific selected category
*/

import React, { Fragment, useContext } from "react";
import DataContext from "../../store/data_context";
export default function DisplayDownloadable(props) {
  const data = useContext(DataContext).data;

  console.log(data);
  return (
    <Fragment>
      <div>
        {/* this is the header */}
        <header>{data["description"]}</header>

        {/* main */}
        <main>
          <section></section>
        </main>
      </div>
    </Fragment>
  );
}
