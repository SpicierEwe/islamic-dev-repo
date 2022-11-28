import React from "react";
import styles from "./changelog.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ChangeLogComponent() {
  const data = changelog_data();

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

      <div>
        {data.map((item, index) => {
          <div className={styles.content}>
            <div className={styles.content_header}>
              <h2 className={`${styles.title} ${styles.old}`}>
                {item[index]["old"]}
              </h2>

              <h2 className={`${styles.title} ${styles.new}`}>{item.new}</h2>
            </div>
            <p className={styles.description}>{item.description}</p>

            <p className={styles.date}>Date of Change - {item.date}</p>
          </div>;
        })}
      </div>

      {/* <div className={styles.content}>
        <div className={styles.content_header}>
          <h2 className={`${styles.title} ${styles.old}`}>
            Indo - Pak Font OLD
          </h2>

          <h2 className={`${styles.title} ${styles.new}`}>
            Indo - Pak Font New
          </h2>
        </div>
        <p className={styles.description}>
          This will be the definition of the title. lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel
          tincidunt aliquam, nisl nisl fermentum massa, nec luctus nunc ante ut
          dui. Nulla facilisi. Sed
        </p>

        <p className={styles.date}>Date of Change - 2021-09-01</p>
      </div> */}
    </div>
  );
}

function changelog_data() {
  return [
    {
      old: "Indo - Pak Font OLD",
      new: "Indo - Pak Font New",
      date: "2021-09-01",
      description:
        "This will be the definition of the title. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel tincidunt aliquam, nisl nisl fermentum massa, nec luctus nunc ante ut dui. Nulla facilisi. Sed",
    },
    {
      old: "Indo - Pak Font OLD",
      new: "Indo - Pak Font New",
      date: "2021-09-01",
      description:
        "This will be the definition of the title. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel tincidunt aliquam, nisl nisl fermentum massa, nec luctus nunc ante ut dui. Nulla facilisi. Sed",
    },
    {
      old: "Indo - Pak Font OLD",
      new: "Indo - Pak Font New",
      date: "2021-09-01",
      description:
        "This will be the definition of the title. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel tincidunt aliquam, nisl nisl fermentum massa, nec luctus nunc ante ut dui. Nulla facilisi. Sed",
    },
    {
      old: "Indo - Pak Font OLD",
      new: "Indo - Pak Font New",
      date: "2021-09-01",
      description:
        "This will be the definition of the title. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel tincidunt aliquam, nisl nisl fermentum massa, nec luctus nunc ante ut dui. Nulla facilisi. Sed",
    },
    {
      old: "Indo - Pak Font OLD",
      new: "Indo - Pak Font New",
      date: "2021-09-01",
      description:
        "This will be the definition of the title. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel tincidunt aliquam, nisl nisl fermentum massa, nec luctus nunc ante ut dui. Nulla facilisi. Sed",
    },
    {
      old: "Indo - Pak Font OLD",
      new: "Indo - Pak Font New",
      date: "2021-09-01",
      description:
        "This will be the definition of the title. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel tincidunt aliquam, nisl nisl fermentum massa, nec luctus nunc ante ut dui. Nulla facilisi. Sed",
    },
    {
      old: "Indo - Pak Font OLD",
      new: "Indo - Pak Font New",
      date: "2021-09-01",
      description:
        "This will be the definition of the title. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel tincidunt aliquam, nisl nisl fermentum massa, nec luctus nunc ante ut dui. Nulla facilisi. Sed",
    },
  ];
}
