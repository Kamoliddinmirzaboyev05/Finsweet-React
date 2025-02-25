import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contactPage">
      <div className="container">
        <div className="contactText">
          <p>Contact us</p>
          <h2>Let’s Start a Conversation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
        <div className="workHours">
          <div className="hours">
            <p className="boxTitle">Working hours</p>
            <h2>Monday To Friday</h2>
            <h2>9:00 AM to 8:00 PM </h2>
            <p>Our Support Team is available 24/7</p>
          </div>
          <div className="ourContact">
            <p className="boxTitle">Contact Us</p>
            <h2>020 7993 2905</h2>
            <p>hello@finsweet.com</p>
          </div>
        </div>
        <form action="#">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Query Related  " />
          <textarea
            name=",essage"
            id="message"
            placeholder="Message"
          ></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
