/* Documetation - 
This page shows the context of the the selected item category the user will have downloadable links of the resource user a specific selected category
*/

import React, { Fragment, useContext, useEffect, useState } from "react";
import styles from "./display_downloadable.module.css";
import Image from "next/image";
import Link from "next/link";
import DisplayRecitersConponent from "./reciters_display_component/display_reciters";
import DataContext from "../../store/data_context";
import LoadingScreen from "../loading_screen/loading_screen";
import SubPagesNav from "../nav_bar/sub_pages_nav/sub_pages_nav";
import JSZip from "jszip";
//

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
  if (!isLoading) {
    //
    if (
      Object.keys(mainData) == "reciters" ||
      Object.keys(mainData) == "translations"
    ) {
      return (
        <div>
          <Fragment>
            <DisplayRecitersConponent
              data={mainData}
            ></DisplayRecitersConponent>
          </Fragment>
        </div>
      );
    }
    //   if not reciters
    else {
      return (
        <div>
          {/* this is the sub pages main nav bar  */}
          <SubPagesNav
            page_title={Object.keys(mainData)}
            resources_count={mainData[Object.keys(mainData)].resources.length}
          ></SubPagesNav>

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
                            src={
                              // if the page is reciters then show the reciter image else the section icon image

                              data[Object.keys(data)]["icon_link"] ==
                                undefined ||
                              data[Object.keys(data)]["icon_link"] == ""
                                ? mainData[Object.keys(mainData)]["icon_link"]
                                : data[Object.keys(data)]["icon_link"]
                              // "/images/flags/Saudi_Arabia.svg"
                            }
                            alt="item Icon"
                            width="50%"
                            height="50%"
                            layout="fixed"
                            objectFit="cover"
                          ></Image>
                          <div className={styles.item_title_container}>
                            {/* item title */}
                            <p className={styles.item_title}>
                              {Object.keys(data)
                                .toString()
                                .replaceAll("_", " ")}
                            </p>
                            {/* sub-title below it */}
                            <p className={styles.item_sub_title}>
                              {data[Object.keys(data)]["sub_title"]}
                            </p>
                          </div>
                          {/* downlaod button icon */}

                          {/* IF THE RESOURCE NAME IS NOT language tranaltions SHOW THIS DOWNLOAD BUTTON */}

                          {Object.keys(mainData).toString().toLowerCase() !=
                          "language translations"
                            ? // <Link
                              //   href={`${
                              //     data[Object.keys(data)]["download_link"]
                              //   }`}
                              // >
                              //   <a
                              //     target="_blank"
                              //     style={{ display: "contents" }}
                              //   >
                              //     <Image
                              //       onMouseEnter={() => {
                              //         setHoveredindex(index);
                              //         setIsDownlaodButtonHovered(true);
                              //       }}
                              //       onMouseLeave={() => {
                              //         setHoveredindex(0);
                              //         setIsDownlaodButtonHovered(false);
                              //       }}
                              //       src={
                              //         isDownloadButtonHovered &&
                              //         index == hoveredIndex
                              //           ? "/images/download_icon_hovered.svg"
                              //           : "/images/download_icon_default.svg"
                              //       }
                              //       alt="item Icon"
                              //       width="29%"
                              //       height="29%"
                              //       layout="fixed"
                              //       objectFit="cover"
                              //     ></Image>
                              //   </a>
                              // </Link>
                              regularDownloadButton(data, index)
                            : languageTranslationsDownloadButton(data, index)}
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

                        {/* authors */}
                        {data[Object.keys(data)].author.length != 0 &&
                        data[Object.keys(data)].author != undefined ? (
                          <div>
                            <p className={styles.includes_heading}>AUTHORS</p>
                            <ul className={styles.included_chip_container}>
                              {data[Object.keys(data)].author.map(
                                (included, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className={styles.author_chip}
                                    >
                                      {included}
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                            {/* <hr></hr> */}
                          </div>
                        ) : (
                          ""
                        )}

                        {/* description */}
                        <p className={styles.item_description}>
                          {data[Object.keys(data)].description}
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
  }

  // loading screen
  return (
    <div>
      <LoadingScreen></LoadingScreen>
    </div>
  );

  // / this is the regular download buttton
  function regularDownloadButton(data, index) {
    return (
      <Link href={`${data[Object.keys(data)]["download_link"]}`}>
        <a target="_blank" style={{ display: "contents" }}>
          <Image
            onMouseEnter={() => {
              setHoveredindex(index);
              setIsDownlaodButtonHovered(true);
            }}
            onMouseLeave={() => {
              setHoveredindex(0);
              setIsDownlaodButtonHovered(false);
            }}
            src={
              isDownloadButtonHovered && index == hoveredIndex
                ? "/images/download_icon_hovered.svg"
                : "/images/download_icon_default.svg"
            }
            alt="item Icon"
            width="29%"
            height="29%"
            layout="fixed"
            objectFit="cover"
          ></Image>
        </a>
      </Link>
    );
  }

  // THIS IS THE DOWNLOAD BUTTON SHOWED FOR LANGUAGE TRANSLATIONS PAGE
  // THIS IS BUTTON IS DIFFERENT CAUSE IT HAS NOT A SINGLE LINK BUT LINKS ARE DOWNLOADED AND ZIPPED MANUALLY USING DYNAMIC END IN THE LINK FROM TANZIL WEBSITE RESOURCES
  function languageTranslationsDownloadButton(data, index) {
    // /////////////////////////////////
    return (
      <a
        target="_blank"
        style={{ display: "contents" }}
        onClick={async () => {
          console.log("im the translations download page");
          var urls = [
            "https://tanzil.net/trans/?transID=bn.hoque&type=txt",
            "https://tanzil.net/trans/?transID=ar.jalalayn&type=txt",
          ];

          (await fetch("https://tanzil.net/trans/?transID=bn.hoque&type=txt"))
            .blob;
          var x = new Blob(["hiiii jjbcbsddnfdfk "], { type: "text/plain" });

          var zip = JSZip();
          zip.file("hello.txt", x);
          zip.generateAsync({ type: "blob" }).then(function (content) {
            saveAs(content, "example.zip");
          });
        }}
      >
        <Image
          onMouseEnter={() => {
            setHoveredindex(index);
            setIsDownlaodButtonHovered(true);
          }}
          onMouseLeave={() => {
            setHoveredindex(0);
            setIsDownlaodButtonHovered(false);
          }}
          src={
            isDownloadButtonHovered && index == hoveredIndex
              ? "/images/download_icon_hovered.svg"
              : "/images/download_icon_default.svg"
          }
          alt="item Icon"
          width="29%"
          height="29%"
          layout="fixed"
          objectFit="cover"
        ></Image>
      </a>
    );
  }
}
