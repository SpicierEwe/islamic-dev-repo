import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./contact_us.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Link from "next/link";

export default function ContactUs(props) {
  const userMessage = useRef();
  const userName = useRef();
  const userEmail = useRef();

  const [showWarning, setShowWarning] = useState(false);
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
          </div>
        </Link>
        <div className={styles.form_bg}>
          {/* title container */}
          <div className={styles.title_container}>
            <BsFillPersonFill size="2.3rem"></BsFillPersonFill>
            <h1 className={styles.title}>Contact Us</h1>
          </div>
          {/* form */}
          <form className={styles.form} id="form_id">
            {showWarning ? (
              <p className={styles.warning_message}>
                Please fill all the mandatory fields marked with
              </p>
            ) : null}
            {/* name */}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              ref={userName}
            />
            {/* email */}

            <label htmlFor="email">Email</label>
            <input
              ref={userEmail}
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              required
            />

            {/* message */}
            <label htmlFor="subject">Message</label>
            <textarea
              ref={userMessage}
              id="subject"
              name="subject"
              placeholder="Explain in detail.."
              style={{ height: "17rem" }}
              required
            ></textarea>

            <button
              className={styles.submit_button}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                submitForm(e);
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

  function submitForm(event) {
    console.log("submitting form");

    // check if all the fields are filled
    if (
      userName.current.value === "" ||
      userEmail.current.value === "" ||
      userMessage.current.value === ""
    ) {
      setShowWarning(true);
      return;
    }
    // else
    else {
      fetch("/api/contact_api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName.current.value,
          email: userEmail.current.value,
          message: userMessage.current.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      document.getElementById("form_id").reset();
    }
  }
}
