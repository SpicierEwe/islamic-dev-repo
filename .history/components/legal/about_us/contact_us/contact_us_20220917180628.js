import React, { useRef } from "react";
import Image from "next/image";
import styles from "./contact_us.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Link from "next/link";

export default function ContactUs(props) {
  const userMessage = useRef();
  const userName = useRef();
  const userEmail = useRef();
  return (
    <div>
      {/* main container */}
      <div className={styles.main_container}>
        <Link href={"/"}>
        <div className={styles.logo}>
          <Image
            src={"/images/logo/logo.svg"}
            height="45%"
            width="45%"
            alt="logo"
          ></Image>
          </Link>
        </div>
        <div className={styles.form_bg}>
          {/* image container */}
          <div className={styles.pattern_container}></div>

          {/* title container */}
          <div className={styles.title_container}>
            <BsFillPersonFill size="2.3rem"></BsFillPersonFill>
            <h1 className={styles.title}>Contact Us</h1>
          </div>
          {/* form */}
          <form className={styles.form}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name "
              ref={userName}
            />

            <label htmlFor="email">Email</label>
            <input
              ref={userEmail}
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

            <button
              className={styles.submit_button}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Submit
              <IoMdSend />
            </button>
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
