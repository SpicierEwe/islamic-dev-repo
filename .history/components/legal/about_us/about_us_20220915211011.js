import styles from "./about_us.module.css";

export default function AboutUs(props) {
  return (
    <div className={styles.bg}>
      <h1 className={styles.page_title}>About Us</h1>
      <p className={styles.message}>
        {" "}
        This website was developed and designed by
      </p>
    </div>
  );
}
