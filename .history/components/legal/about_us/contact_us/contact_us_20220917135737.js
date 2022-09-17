import React from "react";

export default function ContactUs(props) {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <textarea></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );

  function submitForm() {
    console.log("submitting form");

    fetch("/api/contact_api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "John Doe" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
}
