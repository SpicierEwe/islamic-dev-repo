/* Documetation - 
This page shows the context of the the selected item category the user will have downloadable links of the resource user a specific selected category
*/

import React, { Fragment, useContext, useEffect, useState } from "react";
import DownloadableContext from "../../store/doenloadable_context";
import styles from "./display_downloadable.module.css";
import Image from "next/image";
import { MdDownloadForOffline } from "react-icons/md";

// Here starts the Function
export default function DisplayDownloadable(props) {
  // getting hold of data from context
  const mainData = useContext(DownloadableContext).data;

  // loading screen state manager
  const [isLoading, setIsLoading] = useState(true);

  // is download button hovered
  // will change the icon if download button is hovered
  const [isDownloadButtonHovered, setIsDownlaodButtonHovered] = useState(false);

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
                      <div className={styles.flex_intro}>
                        <Image
                          src={mainData[Object.keys(mainData)]["icon_link"]}
                          alt="item Icon"
                          width="50%"
                          height="50%"
                          layout="fixed"
                          objectFit="cover"
                        ></Image>
                        <div className={styles.item_title_container}>
                          {/* item title */}
                          <p className={styles.item_title}>
                            {Object.keys(data).toString().replace("Script", "")}
                          </p>
                          {/* short intro below it */}
                          <p className={styles.item_sub_title}>
                            {data[Object.keys(data)]["sub_title"]}
                          </p>
                        </div>
                        {/* downlaod button icon */}
                        <Image
                          onMouseEnter={() => {
                            setIsDownlaodButtonHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsDownlaodButtonHovered(false);
                          }}
                          src={
                            isDownloadButtonHovered
                              ? "/images/download_icon_hovered.svg"
                              : "/images/download_icon_default.svg"
                          }
                          alt="item Icon"
                          width="29%"
                          height="29%"
                          layout="fixed"
                          objectFit="cover"
                        ></Image>
                        {/* <MdDownloadForOffline
                          size="9.5%"
                          color="black"
                        ></MdDownloadForOffline> */}
                      </div>

                      <div>
                        <p className={styles.includes_heading}>INCLUDES</p>
                        <ul className={styles.included_chip_container}>
                          {data[Object.keys(data)].includes.map(
                            (included, index) => {
                              return (
                                <li
                                  key={index}
                                  className={styles.included_chip}
                                >
                                  {included}
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                      {/* description */}
                      <p className={styles.item_description}>
                        {data[Object.keys(data)]["description"]}
                      </p>
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
