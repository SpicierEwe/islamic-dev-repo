import styles from "./about_us.module.css";
import Image from "next/image";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function AboutUs(props) {
  return (
    <div className={styles.bg}>
      <h1 className={styles.page_title}>About Us</h1>
      <div className={styles.container}>
        <p className={styles.intro}>This website is Designed and Developed</p>
        <blockquote>
          <h3 className={styles.quote}>
            <ImQuotesLeft
              color="black"
              size="1px"
              style={{ marginRight: "1rem" }}
            />
            by aBeliever for the Believers
            <ImQuotesRight color="black" style={{ marginLeft: "1rem" }} />
          </h3>
        </blockquote>
      </div>
    </div>
  );
}
