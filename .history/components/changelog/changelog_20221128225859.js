import React from "react";
import styles from "./changelog.module.css";
import Image from "next/image";
import Link from "next/link";
import LoadingScreen from "../loading_screen/loading_screen";

export default function ChangeLogComponent() {
  const [isLoading, setIsLoading] = React.useState(true);

  const data = changelog_data();

  React.useEffect(() => {
    if (data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);

  if (!isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href={"/"}>
            <div className={styles.logo}>
              <Image
                src={"/images/logo/logo.svg"}
                width="31%"
                height="31%"
                alt="logo_img"
              ></Image>
            </div>
          </Link>
          <h1 className={styles.page_title}>Change-Log</h1>
        </div>

        <div className={styles.spacer}></div>

        <div>
          {data.map((item, index) => {
            return (
              <div key={index} className={styles.content}>
                <div className={styles.content_header}>
                  <h2 className={`${styles.title} ${styles.old}`}>
                    {item.old}
                  </h2>

                  <h2 className={`${styles.title} ${styles.new}`}>
                    {item.new}
                  </h2>
                </div>
                <p className={styles.description}>{item.description}</p>

                <p className={styles.date}>Date of Change - {item.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return LoadingScreen();
  }
}

function changelog_data() {
  return [
    {
      old: "Indo - Pak Scripts v9.6",
      new: "Indo - Pak Scripts v9.6.1",
      date: "28-11-2022",
      description:
        "Surah Maryam 19:31 Ayah icon with pause marks fixed. Font and Data file both are updated to reflect the change.",
    },
    {
      old: "Indo - Pak Font v4.2",
      new: "Indo - Pak v4.2.1",
      date: "28-11-2022",
      description:
        "Improved Compatibility! Only use this Font with all the types of Indo - Pak Scripts.",
    },
  ];
}
