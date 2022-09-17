import React from "react";

export default function ContactUs(props) {
  return (
    <div>
      <h1>Contact Us</h1>
      <form type="POST" action="subscriberform.php">
        <textarea></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
