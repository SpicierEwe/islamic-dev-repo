// THIS COMPONENT DISPLAYS THE TEXT LANGUAGE TRANSLATIONS WITH A VARIENT OF DIFFERENT FILES TYPES

import Image from "next/image";
import Link from "next/link";
import SubPagesMainNav from "../../nav_bar/sub_pages_nav/sub_pages_nav";
import { useState } from "react";

import borrowredStyles from "../display_downloadable.module.css";
import styles from "./display_language_transaltions.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DisplayLanguageTranslations(props) {
  drop_down_options = [
    {
      option: ".txt",
      value: "txt-2",
    },
    {
      option: ".txt (with ayah numbers)",
      value: "txt-2",
    },
    {
      option: ".xml",
      value: "txt-2",
    },
    {
      option: ".sql",
      value: "txt-2",
    },
  ];

  const mainData = props.data;

  // is download button hovered
  // will change the icon if download button is hovered
  const [isDownloadButtonHovered, setIsDownlaodButtonHovered] = useState(false);

  const [hoveredIndex, setHoveredindex] = useState(0);

  return (
    <div>
      {/* this is the sub pages main nav bar  */}
      <SubPagesMainNav
        page_title={Object.keys(mainData)}
        resources_count={mainData[Object.keys(mainData)].resources.length}
      ></SubPagesMainNav>

      {/* main */}
      <main>
        <div className={styles.drop_down_bg}>
          <div
            className={styles.drop_down_flex}
            onMouseEnter={() => {
              console.log("fsdnmfdfjknjk");
              document.getElementById("drop_down_content").style.display =
                "block";
            }}
            onMouseLeave={() => {
              console.log("fsdnmfdfjknjk");
              document.getElementById("drop_down_content").style.display =
                "none";
            }}
          >
            <p className={styles.message}>File Extension</p>
            <div className={styles.file_extension}>
              <p>.txt</p>
              <RiArrowDropDownLine className={styles.drop_down_icon} />
            </div>
          </div>
          <div id={"drop_down_content"} className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <section>
          <ul className={borrowredStyles.items_container}>
            {mainData[Object.keys(mainData)]["resources"].map((data, index) => {
              return (
                <li key={index}>
                  {/* item image */}
                  <div className={borrowredStyles.flex_intro}>
                    <Image
                      src={
                        // HERE IS THE IMAGE OF THE FLAG

                        data[Object.keys(data)]["icon_link"]
                      }
                      alt="item Icon"
                      width="50%"
                      height="50%"
                      layout="fixed"
                      objectFit="cover"
                    ></Image>
                    <div className={borrowredStyles.item_title_container}>
                      {/* item title */}
                      <p className={borrowredStyles.item_title}>
                        {Object.keys(data).toString().replaceAll("_", " ")}
                      </p>
                      {/* sub-title below it */}
                      <p className={borrowredStyles.item_sub_title}>
                        {data[Object.keys(data)]["sub_title"]}
                      </p>
                    </div>
                    {/* downlaod button icon */}

                    {/* IF THE RESOURCE NAME IS NOT language tranaltions SHOW THIS DOWNLOAD BUTTON */}

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
                  </div>

                  <div>
                    <p className={borrowredStyles.includes_heading}>INCLUDES</p>
                    <ul className={borrowredStyles.included_chip_container}>
                      {data[Object.keys(data)].includes.map(
                        (included, index) => {
                          return (
                            <li
                              key={index}
                              className={borrowredStyles.included_chip}
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
                      <p className={borrowredStyles.includes_heading}>
                        AUTHORS
                      </p>
                      <ul className={borrowredStyles.included_chip_container}>
                        {data[Object.keys(data)].author.map(
                          (included, index) => {
                            return (
                              <li
                                key={index}
                                className={borrowredStyles.author_chip}
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
                  <p className={borrowredStyles.item_description}>
                    {data[Object.keys(data)].description}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}
