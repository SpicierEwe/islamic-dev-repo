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
        <div className={styles.heart_icon}>
          <FaHeartbeat size="9rem" color="f4000e" />
        </div>
      </div>
      <div className={styles.container_development}>
        <p className={styles.summary}>
          The main purpose of developing this website is to provide developers
          access to the most authentic islamic data. The struggle of the
          developer of this website in finding the authentic data for his
          projects is the main reason behind the development of this website.
          Yes you can find a lot of resources on the internet but only some of
          them are authentic or lacking optimization. The data provided in this
          website is collected from the most authentic sources. So
          Alahmadullilah you don\'t have to worry about the authenticity of the
          data.
        </p>
      </div>
    </div>
  );
}
