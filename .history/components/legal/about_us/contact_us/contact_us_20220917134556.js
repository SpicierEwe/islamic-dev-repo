import React from "react";

export default function ContactUs(props) {
  return (
    <div>
      <h1>Contact Us</h1>
      <form type="post" action="subscriberform.php">
        <textarea></textarea>
        <input type="submit">SUBMIT</input>
      </form>
    </div>
  );
}
