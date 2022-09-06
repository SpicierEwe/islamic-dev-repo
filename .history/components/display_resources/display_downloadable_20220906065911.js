/* Documetation - 
This page shows the context of the the selected item category the user will have downloadable links of the resource user a specific selected category
*/

import React, { useContext, useEffect, useState } from "react";
import styles from "./display_downloadable.module.css";
import Image from "next/image";
import Link from "next/link";
import DisplayRecitersConponent from "./reciters_display_component/display_reciters";
import DataContext from "../../store/data_context";
import LoadingScreen from "../loading_screen/loading_screen";

// Here starts the Function
export default function DisplayDownloadable(props) {
  // getting hold of data from context
  const mainData = useContext(DataContext).downlodable_data;

  // loading screen state manager
  const [isLoading, setIsLoading] = useState(true);

  // is download button hovered
  // will change the icon if download button is hovered
  const [isDownloadButtonHovered, setIsDownlaodButtonHovered] = useState(false);

  const [hoveredIndex, setHoveredindex] = useState(0);

  useEffect(() => {
    setIsLoading(false);
  }, [mainData.length]);

  //   im examining the obnject keys if the root key is reciters or translations then display reciters screen. Why displaying them separately? because they have different json data structures.
  // if (!isLoading) {
  //   //
  //   if (
  //     Object.keys(mainData) == "reciters" ||
  //     Object.keys(mainData) == "translations"
  //   ) {
  //     return (
  //       <DisplayRecitersConponent data={mainData}></DisplayRecitersConponent>
  //     );
  //   }
  //   //   if not reciters
  //   else {
  //     return (
  //       <div>
  //         {/* this is the header */}
  //         <header className={styles.header}>
  //           {/* main title */}
  //           <h1>{Object.keys(mainData)}</h1>
  //         </header>

  //         {/* main */}
  //         <main>
  //           <section>
  //             <ul className={styles.items_container}>
  //               {mainData[Object.keys(mainData)]["resources"].map(
  //                 (data, index) => {
  //                   return (
  //                     <li key={index}>
  //                       {/* item image */}
  //                       <div className={styles.flex_intro}>
  //                         <Image
  //                           src={
  //                             // if the page is reciters then show the reciter image else the section icon image
  //                             Object.keys(mainData).toString().toLowerCase() ==
  //                             "reciters"
  //                               ? // data[Object.keys(data)]["reciter_image_link"]
  //                                 `/images/reciter_images/${Object.keys(
  //                                   data
  //                                 )}.jpg`
  //                               : mainData[Object.keys(mainData)]["icon_link"]
  //                           }
  //                           alt="item Icon"
  //                           width="50%"
  //                           height="50%"
  //                           layout="fixed"
  //                           objectFit="cover"
  //                         ></Image>
  //                         <div className={styles.item_title_container}>
  //                           {/* item title */}
  //                           <p className={styles.item_title}>
  //                             {Object.keys(data)
  //                               .toString()
  //                               .replaceAll("_", " ")}
  //                           </p>
  //                           {/* sub-title below it */}
  //                           <p className={styles.item_sub_title}>
  //                             {data[Object.keys(data)]["sub_title"]}
  //                           </p>
  //                         </div>
  //                         {/* downlaod button icon */}

  //                         <Link
  //                           href={`${data[Object.keys(data)]["download_link"]}`}
  //                         >
  //                           <a target="_blank" style={{ display: "contents" }}>
  //                             <Image
  //                               onMouseEnter={() => {
  //                                 setHoveredindex(index);
  //                                 setIsDownlaodButtonHovered(true);
  //                               }}
  //                               onMouseLeave={() => {
  //                                 setHoveredindex(0);
  //                                 setIsDownlaodButtonHovered(false);
  //                               }}
  //                               src={
  //                                 isDownloadButtonHovered &&
  //                                 index == hoveredIndex
  //                                   ? "/images/download_icon_hovered.svg"
  //                                   : "/images/download_icon_default.svg"
  //                               }
  //                               alt="item Icon"
  //                               width="29%"
  //                               height="29%"
  //                               layout="fixed"
  //                               objectFit="cover"
  //                             ></Image>
  //                           </a>
  //                         </Link>
  //                         {/* <MdDownloadForOffline
  //                         size="9.5%"
  //                         color="black"
  //                       ></MdDownloadForOffline> */}
  //                       </div>

  //                       <div>
  //                         <p className={styles.includes_heading}>INCLUDES</p>
  //                         <ul className={styles.included_chip_container}>
  //                           {data[Object.keys(data)].includes.map(
  //                             (included, index) => {
  //                               return (
  //                                 <li
  //                                   key={index}
  //                                   className={styles.included_chip}
  //                                 >
  //                                   {included}
  //                                 </li>
  //                               );
  //                             }
  //                           )}
  //                         </ul>
  //                       </div>
  //                       {/* description */}
  //                       <p className={styles.item_description}>
  //                         {data[Object.keys(data)]["description"]}
  //                       </p>
  //                     </li>
  //                   );
  //                 }
  //               )}
  //             </ul>
  //           </section>
  //         </main>
  //       </div>
  //     );
  //   }
  // }

  // loading screen
  return (
    <div>
      <LoadingScreen></LoadingScreen>
    </div>
  );
}
