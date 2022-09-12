// THIS COMPONENT DISPLAYS THE TEXT LANGUAGE TRANSLATIONS WITH A VARIENT OF DIFFERENT FILES TYPES

import Image from "next/image";
import Link from "next/link";
import SubPagesMainNav from "../../nav_bar/sub_pages_nav/sub_pages_nav";
import { useState } from "react";

import borrowredStyles from "../display_downloadable.module.css";
import styles from "./display_language_translations.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiText } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";

export default function DisplayLanguageTranslations(props) {
  // drop down options
  const drop_down_options_list = [
    {
      option: ".txt",
      value: "txt",
      icon: <BiText />,
    },
    {
      option: ".txt ( with ayah numbers )",
      value: "txt-2",
      icon: <BiText />,
    },
    {
      option: ".xml",
      value: "xml",
      icon: <BsCodeSlash />,
    },
    {
      option: ".sql ( MySQL dump )",
      value: "sql",
      icon: <GrMysql />,
    },
  ];

  /// drop down selected manager
  const [selectedDropDownIndex, setSelectedDropDownIndex] = useState(0);

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
        {/* DROP DOWN */}
        <div className={styles.drop_down_bg}>
          <div className={styles.drop_down_flex}>
            <p className={styles.message}>File Extension</p>
            <button
              className={styles.file_extension} // CLICK TO OPEN OR CLOSE DROP DOWN
              onClick={(e) => {
                // console.log(e.currentTarget);
                document
                  .getElementById("drop_down_content")
                  .classList.toggle(styles.show);

                document.addEventListener("click", (e) => {
                  if (e.target !== e.currentTarget) {
                    // document
                    //   .getElementById("drop_down_content")
                    //   .classList.remove(styles.show);
                  }
                });
              }}
            >
              {/* selected drop down display */}
              <p>{drop_down_options_list[selectedDropDownIndex].option}</p>
              <RiArrowDropDownLine className={styles.drop_down_icon} />
            </button>
          </div>

          {/* DROP DOWN CONTENT */}
          <div id={"drop_down_content"} className={styles.dropdown_content}>
            {drop_down_options_list.map((item, index) => {
              // dropdown content
              return (
                <div
                  key={index}
                  className={styles.drop_down_option}
                  style={{
                    backgroundColor:
                      selectedDropDownIndex == index ? "#3061aa" : null,
                  }}
                  onClick={() => {
                    setSelectedDropDownIndex(index);
                  }}
                >
                  <div className={styles.drop_dop_icons}>{item.icon}</div>
                  <p
                    style={{
                      color: selectedDropDownIndex == index ? "white" : null,
                    }}
                  >
                    {item.option}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/*  */}
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

                    <Link
                      href={`${data[Object.keys(data)]["download_link"]}&type=${
                        drop_down_options_list[selectedDropDownIndex].value
                      }`}
                    >
                      <a download={"download"} style={{ display: "contents" }}>
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
                      {/* this will show the current selected extenson file in the included */}
                      <li className={borrowredStyles.included_chip}>
                        {`${drop_down_options_list[selectedDropDownIndex].option} Files`}
                      </li>
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
