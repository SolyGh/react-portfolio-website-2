import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithubSquare />
      </a>
      <a href="https://facebook.com" target="_blank">
        <FaFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
