import React, {useState} from "react";
import {
  CloseButton,
  HamBurger,
  Header,
  Icon,
  NavItems,
  NavMenu,
} from "./exampleElements";
import {Link, NavLink} from "react-router-dom";

const Example = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <Header>
      <Link to="/">Portfolio</Link>
      <NavMenu>
        <NavItems>
          <NavLink to="/">Home</NavLink>
        </NavItems>
        <NavItems>
          <NavLink to="/about">About</NavLink>
        </NavItems>
        <NavItems>
          <NavLink to="/projects">Projects</NavLink>
        </NavItems>
        <NavItems>
          <NavLink to="/contact">Contact</NavLink>
        </NavItems>
      </NavMenu>
      <Icon onClick={handleClick}>
        {click ? <HamBurger /> : <CloseButton />}
      </Icon>
    </Header>
  );
};

export default Example;
