import React from "react";
import styles from "./changelog.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ChangeLogComponent() {
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

      <div className={styles.content}>
        <h2 className={styles.title}>Indo - Pak Font</h2>
        <p className={styles.description}>
          This will be the definition of the title. lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel
          tincidunt aliquam, nisl nisl fermentum massa, nec luctus nunc ante ut
          dui. Nulla facilisi. Sed
        </p>
      </div>
    </div>
  );

  const changelog_data = [
    {
      title: "Indo - Pak Font",
    },
  ];
}
