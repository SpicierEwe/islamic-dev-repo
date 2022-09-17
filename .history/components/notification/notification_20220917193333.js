import React from "react";
import styles from "./notification.module.css";

export default function NotificationComponent(props) {
  return (
    <div>
      <div className={styles.notification_container}>
        <p className={styles.notification_text}>Submitted Successfully</p>
      </div>
    </div>
  );
}
