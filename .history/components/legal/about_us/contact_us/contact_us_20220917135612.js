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
  }
}
