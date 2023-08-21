import "./FooterStyles.css";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color: "white", marginRight: "2rem"}} />
            <div>
              <p>Kormangala, Bangalore</p>
              <p>India.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{color: "white", marginRight: "2rem"}}
              />
              9695072068, 7451942905
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{color: "white", marginRight: "2rem"}}
              />
              shreeyansh.rawat@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>I work in Nineleaps</h4>
          <p>As a FrontEnd Developer</p>
          <div className="social">
            <a href="https://www.facebook.com/shreeyansh.rawat.1" target="_blank" rel="noopener">
              <FaFacebook
                className="facebook logos"
                size={30}
                style={{marginRight: "1rem"}}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shreeyansh-singh-735364210/"
              target="_blank"
              rel="noopener"
            >
              <FaLinkedin
                className="linkedin logos"
                size={30}
                style={{marginRight: "1rem"}}
              />
            </a>
            <a
              href="https://www.instagram.com/aka.shreeyansh/"
              target="_blank"
              rel="noopener"
            >
              <FaInstagram
                className="instagram logos"
                size={30}
                style={{marginRight: "1rem"}}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
