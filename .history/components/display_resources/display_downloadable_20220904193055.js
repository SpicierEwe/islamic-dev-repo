/* Documetation - 
This page shows the context of the the selected item category the user will have downloadable links of the resource user a specific selected category
*/

import React, { Fragment, useContext, useEffect, useState } from "react";
import DownloadableContext from "../../store/doenloadable_context";
import styles from "./display_downloadable.module.css";
import Image from "next/image";
import Link from "next/link";
import DisplayReciters from "../reciters_display_component/display_reciters";

// Here starts the Function
export default function DisplayDownloadable(props) {
  // getting hold of data from context
  const mainData = useContext(DownloadableContext).data;

  // loading screen state manager
  const [isLoading, setIsLoading] = useState(true);

  // is download button hovered
  // will change the icon if download button is hovered
  const [isDownloadButtonHovered, setIsDownlaodButtonHovered] = useState(false);

  const [hoveredIndex, setHoveredindex] = useState(0);

  useEffect(() => {
    setIsLoading(false);
  }, [mainData.length]);

  //   im examining the obnject keys if the root key is reciters then display reciters screen
  if (!isLoading) {
    if (Object.keys(mainData) == "reciters") {
      return <DisplayReciters data={mainData}></DisplayReciters>;
    }
    //   if not reciters
    else {
      return (
        <div>
          {/* this is the header */}
          <header className={styles.header}>
            {/* main title */}
            <h1>{Object.keys(mainData)}</h1>
          </header>

          {/* main */}
          <main>
            <section>
              <ul className={styles.items_container}>
                {mainData[Object.keys(mainData)]["resources"].map(
                  (data, index) => {
                    return <div key={index}>hihii</div>;
                  }
                )}
              </ul>
            </section>
          </main>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>loading</h1>
    </div>
  );
}
