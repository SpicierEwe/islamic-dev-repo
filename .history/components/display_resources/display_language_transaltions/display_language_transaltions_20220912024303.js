import Image from "next/image";
import Link from "next/link";
import SubPagesMainNav from "../../nav_bar/sub_pages_nav/sub_pages_nav";

export default function DisplayLanguageTranslations(props) {
  const mainData = props.data;
  return (
    <div>
      {/* this is the sub pages main nav bar  */}
      <SubPagesMainNav
        page_title={Object.keys(mainData)}
        resources_count={mainData[Object.keys(mainData)].resources.length}
      ></SubPagesMainNav>

      {/* main */}
      <main>
        <section>
          <ul className={styles.items_container}>
            {mainData[Object.keys(mainData)]["resources"].map((data, index) => {
              return (
                <li key={index}>
                  {/* item image */}
                  <div className={styles.flex_intro}>
                    <Image
                      src={
                        // if the page is reciters then show the reciter image else the section icon image

                        data[Object.keys(data)]["icon_link"] == undefined ||
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
                        {Object.keys(data).toString().replaceAll("_", " ")}
                      </p>
                      {/* sub-title below it */}
                      <p className={styles.item_sub_title}>
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
                    <p className={styles.includes_heading}>INCLUDES</p>
                    <ul className={styles.included_chip_container}>
                      {data[Object.keys(data)].includes.map(
                        (included, index) => {
                          return (
                            <li key={index} className={styles.included_chip}>
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
                              <li key={index} className={styles.author_chip}>
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
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}
