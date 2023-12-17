import React from "react";
import "./footer.css";
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        soly
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#"></a>Services
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaMeta />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://x.com">
          <FaXTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ssssssssssssssssssssss all rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
