import React from "react";

export default function ContactUs(props) {
  return (
    <div>
      <h1>Contact Us</h1>
      <form type="post" mailTo="dev.abeliever@gmail.com">
        <textarea></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
