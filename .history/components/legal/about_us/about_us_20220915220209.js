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
            <ImQuotesLeft size="1rem" style={{ marginRight: "1.5rem" }} />
            by aBeliever for the Believers
            <ImQuotesRight style={{ marginLeft: "1.5rem" }} />
          </h3>
        </blockquote>
      </div>
    </div>
  );
}
