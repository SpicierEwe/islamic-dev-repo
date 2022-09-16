import styles from "./about_us.module.css";
import Image from "next/image";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaHeartbeat } from "react-icons/fa";

export default function AboutUs(props) {
  return (
    <div className={styles.bg}>
      <h1 className={styles.page_title}>About Us</h1>
      <div className={styles.container_development}>
        <div>
          <p className={styles.intro}>This website is Designed and Developed</p>
          <blockquote>
            <h3 className={styles.quote}>
              <ImQuotesLeft color="#707070" style={{ marginRight: "1.5rem" }} />
              by aBeliever for the Believers
              <ImQuotesRight color="#707070" style={{ marginLeft: "1.5rem" }} />
            </h3>
          </blockquote>
        </div>
        <FaHeartbeat size="25rem" />
      </div>
    </div>
  );
}
