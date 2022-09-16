import styles from "./about_us.module.css";

export default function AboutUs(props) {
  return (
    <div className={styles.bg}>
      <h1 className={styles.page_title}>About Us</h1>
      <p className={styles.intro}>This website is Designed and Developed by</p>
      <h3>aBeliever for the Believers</h3>
    </div>
  );
}
