import styles from "./about_us.module.css";
import Image from "next/image";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaHeartbeat } from "react-icons/fa";
import { SiHandshakeProtocol, SiHandshake } from "react-icons/si";
import Link from "next/link";

export default function AboutUs(props) {
  return (
    <div className={styles.bg}>
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
        <h1 className={styles.page_title}>About Us</h1>
      </div>
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
          <SiHandshake size="9rem" color="f4000e" />
        </div>
      </div>
      <div className={styles.container_development}>
        <p className={styles.summary}>
          The main purpose of developing this website is to provide Islamic
          Developers access to the most authentic Islamic Data at a single place
          and in the most accessible form. The struggles of the Islamic
          Developers is in finding the authentic data for their projects, and it
          is the main reason behind the development of this website. Of course,
          you can find a lot of resources on the internet today, but only some
          of them are authentic and complete and/or are lacking optimization
          (unable to implement perfectly). The data provided in this website is
          collected from the most authentic sources. So, Alahmadullilah! you
          don't have to worry about the authenticity of the data. But we all are
          humans and we can make mistakes. So if you find any mistake in the
          data please let us know. We will be very thankful to you. Jazak'Allahu
          khair!
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
              alt="Sheikh"
            ></Image>
          </div>

          <p className={styles.name}>Ayman Siddiqui</p>

          <div className={styles.work_container}>
            <h3>Data Contributer & Volunteer at -</h3>
            <ul>
              <li>
                <Link href={"https://quran.com/"}>
                  <a target="_blank">Quran.com</a>
                </Link>
              </li>
              <li>
                <Link href={"https://quranwbw.com/"}>
                  <a target="_blank">QuranWbW.com</a>
                </Link>
              </li>
              <li>many others</li>
            </ul>
          </div>
          <p className={styles.resourcer_description}>
            Our Brother Ayman Siddiqui helped us alot alahmdulillah by sharing
            the authentic islamic data with us. And we pray to Allah ( swt )
            that he may accept his efforts and reward him with the best of
            rewards.
          </p>
        </div>
      </div>
    </div>
  );
}
