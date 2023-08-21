import {Link as Linkr} from "react-router-dom";
import styled from "styled-components";
import {FaBars, FaTimes} from "react-icons/fa";

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  backdrop-filter: blur(10px);
  padding: 1rem;
  position: fixed;
`;
export const NavMenu = styled.ul`
  display: flex;

  @media screen and (max-width: 1040px) {
    flex-direction: column;
    justify-content: center;
    z-index: -3;
    background: rbga(0, 0, 0, 0.9);
    width: 100%;
    height: 100vh;
    top: 0;
    left: -100%;
    transition: 0.3s ease-in-out;
    position: absolute;
  }
`;
export const NavLink = styled(Linkr)`
  font-size: 1.2rem;
  font-weight: 500;

  @media sreen and (max-width: 1040px) {
    font-size: 2rem;
  }
`;
export const NavItems = styled.li`
  list-style: none;
  padding: 0 1rem;

  @media sreen and (max-width: 1040px) {
    padding: 1rem 0;
  }
`;

export const Icon = styled.div`
  display: none;
  @media sreen and (max-width: 1040px) {
    display: initial;
  }
`;

export const HamBurger = styled(FaBars)`
  color: white;
  size: 20;
`;
export const CloseButton = styled(FaTimes)`
  color: white;
  size: 20;
`;
