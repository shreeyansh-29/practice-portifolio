import {Link} from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../../assets/react1.jpg";
import React2 from "../../assets/react2.webp";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a react front-end developer. I create responsive secure websites
          for my clients.
        </p>
        <Link to="">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} alt="true" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
