import styles from "./about_us.module.css";

export default function AboutUs(props) {
  return (
    <div className={styles.bg}>
      <h1 className={styles.page_title}>About Us</h1>
      <div className={styles.container}>
        <p className={styles.intro}>This website is Designed and Developed</p>
        <blockquote>
          <h3 className={styles.quote}>by aBeliever for the Believers</h3>
        </blockquote>
      </div>
    </div>
  );
}
