import React from "react";
import styles from "./notification.module.css";
import { MdNotificationsActive } from "react-icons/md";

export default function NotificationComponent(props) {
  return (
    <div>
      <div className={styles.notification_container}>
        <MdNotificationsActive size="3rem" />
        <p className={styles.notification_text}>Submitted Successfully</p>
      </div>
    </div>
  );
}
