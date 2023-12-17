import React from "react";
import "./contact.css";
import { GiMailbox } from "react-icons/gi";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rbyx6tj",
        "service_rbyx6tj",
        form.current,
        "0QLQxh2eNcWa-5vs2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h5 className="text-light">Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div id="contact" className="contact__options">
          <article className="contact__option">
            <GiMailbox className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ahmed.solimanth57@gmail.com</h5>
            <a href="mailto:ahmed.solimanth57@gmail.com" target="_blank">
              {" "}
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Ahmed soliman Gohnaim</h5>
            <a href="https://m.me/ahmed.soliman.3591267" target="_blank">
              {" "}
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />

            <h4>Whats App</h4>
            <h5>___________</h5>
            <a
              href="https://api.whatsapp.com/send?phone=201010351108"
              target="_blank"
            >
              {" "}
              Open whats app
            </a>
          </article>
        </div>

        {/* End of Contact */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email " required />
          <textarea
            name="message"
            placeholder="Your Messsage"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
