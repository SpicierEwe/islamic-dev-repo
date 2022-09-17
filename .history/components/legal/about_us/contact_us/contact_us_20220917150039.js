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
        <div className={styles.pattern_container}>
          <Image
            src={
              "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }
            // layout="fill"
            // height="100%"
            width="100%"
            objectFit="cover"
            alt="pattern"
          ></Image>
        </div>

        {/* title container */}
        <div className={styles.title_container}></div>
        {/* form */}
        <form>
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
            style={{ height: "200px" }}
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
