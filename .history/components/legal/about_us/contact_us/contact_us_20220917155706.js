import React, { useRef } from "react";
import Image from "next/image";
import styles from "./contact_us.module.css";

export default function ContactUs(props) {
  const userMessage = useRef();
  return (
    <div>
      {/* main container */}
      <div className={styles.main_container}>
        <div className={styles.form_bg}>
          {/* image container */}
          <div className={styles.pattern_container}></div>

          {/* title container */}
          <div className={styles.title_container}>
            <h1 className={styles.title}>Contact Us</h1>
          </div>
          {/* form */}
          <form className={styles.form}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name " />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
            />

            <label htmlFor="subject">Message</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Explain in detail.."
              style={{ height: "17rem" }}
              ref={userMessage}
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );

  function submitForm() {
    console.log("submitting form");

    fetch("/api/contact_api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userMessage.current.value }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
}
