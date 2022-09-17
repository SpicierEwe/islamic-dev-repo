import React from "react";

export default function ContactUs(props) {
  return (
    <div>
      <h1>Contact Us</h1>
      <form type="post" action="/api/contact_us.js">
        <textarea></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
