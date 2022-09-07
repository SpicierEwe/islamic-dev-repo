/* Documetation - 
This page shows the context of the the selected item category the user will have downloadable links of the resource user a specific selected category
*/

import React, { Fragment, useContext, useEffect, useState } from "react";
import styles from "./display_reciters.module.css";

import Image from "next/image";
import Link from "next/link";

import { FaPlay } from "react-icons/fa";
import { BsPauseFill } from "react-icons/bs";

// Here starts the Function
export default function DisplayRecitersComponent(props) {
  // getting hold of data from context
  const mainData = props.data;

  // loading screen state manager
  const [isLoading, setIsLoading] = useState(true);

  // is download button hovered
  // will change the icon if download button is hovered for a particular index
  const [isDownloadButtonHovered, setIsDownlaodButtonHovered] = useState(false);
  // this tracks the index for which the download button is hovered
  const [hoveredIndex, setHoveredindex] = useState(0);

  /// this is the tab tracker displays the content for the selected tab

  const [selectedTab, setSelectedTab] = useState();
  //   this will be the initial selected tab when the page loads for the 1st time
  useEffect(() => {
    mainData[Object.keys(mainData)]["resources"].map((data, index) => {
      if (index == 0) {
        setSelectedTab(Object.keys(data)[0]);
      }
    });
    // setSelectedTab(selectedTab);
  }, [mainData]);

  //
  // MANAGE PREVIEW AUDIO STATE

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioPlayingId, setAudioPLayingId] = useState("audio_0");
  const [currentAudio, setCurrentAudio] = useState("");

  //

  useEffect(() => {
    setIsLoading(false);
  }, [mainData.length]);

  return (
    <Fragment>
      <div className={styles.bg}>
        {/* this is the header */}

        <header className={styles.header_bg}>
          <div className={styles.header}>
            {/* main title */}
            <h1>{Object.keys(mainData)}</h1>

            {/* sub nav bar */}
            <nav className={styles.nav_bar}>
              <ul className={styles.nav_items_container}>
                {mainData[Object.keys(mainData)]["resources"].map(
                  (data, index) => {
                    return (
                      <li
                        key={index}
                        className={`${styles.nav_item} ${
                          Object.keys(data)[0] == selectedTab
                            ? styles.nav_item_selected
                            : styles.nav_item_unselected
                        }`}
                        onClick={() => {
                          setSelectedTab(Object.keys(data)[0]);
                        }}
                      >
                        <p>
                          {Object.keys(data).toString()[0].toUpperCase() +
                            Object.keys(data)
                              .toString()
                              .substring(1)
                              .replaceAll("_", " ")}
                        </p>
                      </li>
                    );
                  }
                )}
              </ul>
            </nav>
          </div>
        </header>
        {/* main */}
        <main>
          <section>
            <div>
              {mainData[Object.keys(mainData)]["resources"].map(
                (data, index) => {
                  return (
                    <ul key={index} className={styles.items_container}>
                      {Object.keys(data) == selectedTab
                        ? data[selectedTab].map((data, index) => {
                            return (
                              <li key={index}>
                                {/* item image */}
                                <div className={styles.flex_intro}>
                                  <Image
                                    src={`/images/reciter_images/${Object.keys(
                                      data
                                    )}.jpg`}
                                    alt="item Icon"
                                    width="50%"
                                    height="50%"
                                    layout="fixed"
                                    objectFit="cover"
                                  ></Image>
                                  <div className={styles.item_title_container}>
                                    {/* item title */}
                                    <p className={styles.item_title}>
                                      {/* if the main key is tranaltions then show item title = subtitle cause subtitle has the translation name and the main title has the author name and translation name should appear 1st*/}
                                      {Object.keys(mainData)[0] ===
                                      "translations"
                                        ? //
                                          data[Object.keys(data)]["sub_title"]
                                        : //
                                          Object.keys(data)
                                            .toString()
                                            .replaceAll("_", " ")}
                                    </p>
                                    {/* sub-title below it */}
                                    <p className={styles.item_sub_title}>
                                      {Object.keys(mainData)[0] ===
                                      "translations"
                                        ? //
                                          Object.keys(data)
                                            .toString()
                                            .replaceAll("_", " ")
                                        : //
                                          data[Object.keys(data)]["sub_title"]}
                                    </p>
                                  </div>
                                  {/* buttons */}
                                  <div className={styles.interactive_buttons}>
                                    {/* preview audio button */}

                                    <div>
                                      <audio
                                        id={`audio_${index}`}
                                        src={`${
                                          data[Object.keys(data)]
                                            .generatable_link_template
                                        }${
                                          // if the rciter name is "Husary" then the audio links ends with "ogg" else it ends with "mp3"
                                          // this is because the audio links for husary ends with "ogg" and the rest ends with "mp3"
                                          Object.keys(data)[0] == "Husary"
                                            ? "025059.ogg"
                                            : "025059.mp3"
                                        }`}
                                      ></audio>
                                      {/* Audio Play */}

                                      <div
                                        style={{
                                          display: "block",
                                        }}
                                      >
                                        {isAudioPlaying &&
                                        audioPlayingId == `audio_${index}` ? (
                                          // AUdio Playing / pause button
                                          <BsPauseFill
                                            className={` ${styles.hover_button}}`}
                                            // size={"1.9rem"}
                                            onClick={() => {
                                              var audio =
                                                document.getElementById(
                                                  `audio_${index}`
                                                );
                                              setIsAudioPlaying(false);
                                              // setAudioPLayingIndex(index);
                                              audio.pause();
                                            }}
                                          ></BsPauseFill>
                                        ) : (
                                          //
                                          // PLAY PREVIEW AUDIO BUTTON
                                          //
                                          <FaPlay
                                            className={`${styles.hover_button}`}
                                            // size={"1.5rem"}
                                            onClick={() => {
                                              // before playing will check if any preview already playing if lp
                                              if (isAudioPlaying) {
                                                const audio =
                                                  document.getElementById(
                                                    audioPlayingId
                                                  );

                                                audio.pause();

                                                // ressting the audio played duration to 0
                                                audio.currentTime = 0;
                                              }
                                              // PLAYING THE selected audio
                                              var audio =
                                                document.getElementById(
                                                  `audio_${index}`
                                                );
                                              setIsAudioPlaying(true);
                                              setAudioPLayingId(
                                                `audio_${index}`
                                              );
                                              audio.play();
                                              //
                                              // reset the player on finish
                                              audio.onended = function () {
                                                setIsAudioPlaying(false);
                                                audio.pause();
                                              };
                                            }}
                                          ></FaPlay>
                                        )}
                                      </div>
                                    </div>

                                    {/* DOWNLOAD BUTTON */}
                                    <Link
                                      href={`${
                                        data[Object.keys(data)]["download_link"]
                                      }`}
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
                                          isDownloadButtonHovered &&
                                          index == hoveredIndex
                                            ? "/images/download_icon_hovered.svg"
                                            : "/images/download_icon_default.svg"
                                        }
                                        alt="item Icon"
                                        width="29%"
                                        height="29%"
                                        layout="fixed"
                                        objectFit="cover"
                                      ></Image>
                                    </Link>
                                  </div>
                                </div>
                                <div>
                                  <p className={styles.includes_heading}>
                                    INCLUDES
                                  </p>
                                  <ul
                                    className={styles.included_chip_container}
                                  >
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
                                {/* mistakes */}

                                <div>
                                  {selectedTab.includes("mistakes") ? (
                                    <div>
                                      <p className={styles.includes_heading}>
                                        MISTAKES
                                      </p>
                                      <ul
                                        className={
                                          styles.included_chip_container
                                        }
                                      >
                                        {data[Object.keys(data)].mistakes.map(
                                          (mistakes, index) => {
                                            return (
                                              <li
                                                style={{
                                                  backgroundColor: "red",
                                                }}
                                                key={index}
                                                className={styles.included_chip}
                                              >
                                                {`Surah : ${mistakes.surah_number} Verse : ${mistakes.verse_number}`}
                                              </li>
                                            );
                                          }
                                        )}
                                      </ul>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>

                                {/* description */}
                                <p className={styles.item_description}>
                                  {data[Object.keys(data)]["description"]}
                                </p>
                              </li>
                            );
                          })
                        : ""}
                    </ul>
                  );
                }
              )}
            </div>
          </section>
        </main>
      </div>
    </Fragment>
  );
}
