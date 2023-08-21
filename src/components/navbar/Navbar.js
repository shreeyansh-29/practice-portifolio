import {Link} from "react-router-dom";
import "./NavbarStyles.css";
import {FaBars, FaTimes} from "react-icons/fa";
import React, {useState} from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const handleClick = () => setClick(!click);
  const changeColor = () => {
    if (window.screenY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li onClick={handleClick}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/projects">Projects</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes color="white" size={20} />
        ) : (
          <FaBars color="white" size={20} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
