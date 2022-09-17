import React from "react";

export default function NotificationComponent(props) {
  return (
    <div>
      <div className="notification">
        <div className="notification__icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="notification__text">
          <p>Notification text</p>
        </div>
        <div className="notification__close">
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
}
