import React, { useContext } from "react";
import styles from "./notification.module.css";
import { MdNotificationsActive } from "react-icons/md";
import DataContext from "../../store/data_context";

export default function NotificationComponent(props) {
  const dataCtx = useContext(DataContext);

  return (
    <div>
      <div className={styles.notification_container}>
        <MdNotificationsActive size="2.5rem" color="white" />
        <p className={styles.notification_text}>Submitted Successfully</p>
      </div>
    </div>
  );
}
