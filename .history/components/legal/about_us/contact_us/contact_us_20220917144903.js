import React, { useRef } from "react";

export default function ContactUs(props) {
  const userMessage = useRef();
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Have a question? We'd love to hear from you. Send us a message and we'll
        respond as soon as possible.
      </p>

      <div>
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
