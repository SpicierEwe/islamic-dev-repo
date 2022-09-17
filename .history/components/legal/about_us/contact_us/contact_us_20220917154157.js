import React, { useRef } from "react";
import Image from "next/image";
import styles from "./contact_us.module.css";

export default function ContactUs(props) {
  const userMessage = useRef();
  return (
    <div>
      {/* main container */}
      <div className={styles.main_container}>
        {/* image container */}
        <div className={styles.pattern_container}></div>

        {/* title container */}
        <div className={styles.title_container}>
          <h1 className={styles.title}>Contact Us</h1>
        </div>
        {/* form */}
        <form className={styles.aa}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          />

          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "15rem" }}
            ref={userMessage}
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
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
