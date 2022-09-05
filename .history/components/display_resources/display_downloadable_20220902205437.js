/* Documetation - 
This page shows the context of the the selected item category the user will have downloadable links of the resource user a specific selected category
*/

import React, { Fragment, useContext, useEffect, useState } from "react";
import DownloadableContext from "../../store/doenloadable_context";
import styles from "./display_downloadable.module.css";
import Image from "next/image";
import { FcDownload } from "react-icons/fc";

export default function DisplayDownloadable(props) {
  const downloadIconUrl =
    "https://cdn-icons-png.flaticon.com/512/3325/3325322.png";

  const mainData = useContext(DownloadableContext).data;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [mainData.length]);

  if (!isLoading) {
    return (
      <div>
        {/* this is the header */}
        <header className={styles.header}>
          {/* title */}
          <h1>{Object.keys(mainData)}</h1>
        </header>

        {/* main */}
        <main>
          <section>
            <ul className={styles.items_container}>
              {mainData[Object.keys(mainData)]["resources"].map(
                (data, index) => {
                  return (
                    <li key={index}>
                      {/* item image */}
                      <Image
                        src={mainData[Object.keys(mainData)]["icon_link"]}
                        alt="item Icon"
                        width="50%"
                        height="50%"
                        layout="fixed"
                        objectFit="cover"
                      ></Image>
                      <p>
                        {Object.keys(data).toString().replace("Script", "")}
                      </p>
                      {/* downlaod button */}

                      <Image
                        src={downloadIconUrl}
                        alt="item Icon"
                        width="35%"
                        height="35%"
                        layout="fixed"
                        objectFit="cover"
                      ></Image>
                    </li>
                  );
                }
              )}
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
