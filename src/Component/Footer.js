import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Kolkata</p>
              <p>West Bengal </p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9733000214
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              avrodipsaha.official@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4> About Myself </h4>
          <p>
            I worked on various types of projects, where I used deffernts types
            Teck-Stacks. I work on React js, JavaScript, HTML , CSS , Material
            UI , Tailwind CSS , Node js , Firebase ,MongoDB, Express js.
          </p>
          <div className="social">
            <a
              href="https://github.com/Avrodipsaha"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              />
            </a>
            <a
              href="https://twitter.com/MrAvrodip"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/avrodip-saha7411/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
