import styles from "./about_us.module.css";
import Image from "next/image";

export default function AboutUs(props) {
  return (
    <div className={styles.bg}>
      <h1 className={styles.page_title}>About Us</h1>
      <div className={styles.container}>
        <p className={styles.intro}>This website is Designed and Developed</p>
        <blockquote>
          <h3 className={styles.quote}>
            <Image
              src={"/images/quote_icon.svg"}
              height="50%"
              width="100%"
              alt="quote_icon"
            ></Image>
            by aBeliever for the Believers
            <div>
              <Image
                src={"/images/quote_icon.svg"}
                height="50%"
                width="100%"
                alt="quote_icon"
              ></Image>
            </div>
          </h3>
        </blockquote>
      </div>
    </div>
  );
}
