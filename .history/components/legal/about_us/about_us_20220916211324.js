import styles from "./about_us.module.css";
import Image from "next/image";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaHeartbeat } from "react-icons/fa";
import Link from "next/link";

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
          The main purpose of developing this website was to provide islamic
          developers access to the most authentic islamic data. The struggles of
          the developer of this website in finding the authentic data for his
          projects is the main reason behind the development of this website.
          Ofcourse you can find a lot of resources on the internet but only some
          of them are authentic or are lacking optimization. The data provided
          in this website is collected from the most authentic sources. So
          Alahmadullilah you don&apos;t have to worry about the authenticity of
          the data. But we all are humans and we can make mistakes. So if you
          find any mistake in the data please let us know. We will be very
          thankful to you.
        </p>
      </div>

      <div
        className={`${styles.container_development} ${styles.container_data_source}`}
      >
        <p className={styles.source_title}>
          <span className={styles.head_half}> Our Main</span>
          <br></br> Data Source
        </p>
        {/* data resource description */}
        <div className={styles.resourcer_container}>
          <div>
            <Image
              className={styles.resourcer_image}
              src={
                "https://thumbs.dreamstime.com/b/sheikh-icon-flat-style-isolated-white-background-arab-emirates-symbol-stock-vector-illustration-91220453.jpg"
              }
              height="100%"
              width="100%"
              // layout="fill"

              alt="Sheikh"
            ></Image>
          </div>

          <p className={styles.name}>Ayman Siddiqui</p>

          <div className={styles.work_container}>
            <h3>Works at :</h3>
            <ul>
              <li>
                <Link href={"https://quran.com/"}>
                  <a target="_blank">Quran.com</a>
                </Link>
              </li>
              <li>
                <Link href={"https://quranwbw.com/"}>QuranWbW.com</Link>
              </li>
            </ul>
          </div>
          <p className={styles.resourcer_description}>
            Our Brother Ayman Siddiqui alahmdulillah helped us alot by sharing
            the authentic islamic data with us. And we pray to Allah (swt) that
            he may accept him efforts and reward him with the best of rewards.
          </p>
        </div>
      </div>
    </div>
  );
}
