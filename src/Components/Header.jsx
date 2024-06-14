import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, Link } from "react-router-dom";
function Header() {
  const [burgerStatus, setBurgerstatus] = useState(false);

  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.svg" alt="" />
      </Link>
      <Menu>
        <NavLink to="/modelS">Model S</NavLink>
        <NavLink to="/ModelQ">Model Q</NavLink>
        <NavLink to="/ModelX">Model X</NavLink>
        <NavLink to="/ModelY">Model Y</NavLink>
        <NavLink to="/ModelY">Solar Panel/uder process </NavLink>
        <NavLink to="/ModelY">Solar roof / under process</NavLink>
        {/* <NavLink to="/solarRoof">Solar Roof</NavLink> */}
        {/* <NavLink to="/solarPanels">Solar Panels</NavLink> */}
      </Menu>
      <RightMenu>
        <NavLink to="#">Feedback</NavLink>
        <NavLink to="#">Contect Us</NavLink>
        <CustomMenu onClick={() => setBurgerstatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerstatus(false)} />
        </CloseWrapper>
        <li>
          <NavLink to="/modelS"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/ModelQ">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/ModelX">Our Product</NavLink>
        </li>
        <li>
          <NavLink to="/ModelY">Gallery</NavLink>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  margin-left: 5%;
  padding-left: 5%;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  a {
    font-weight: 900;
    text-transform: uppercase;
    padding: 0 75px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 900;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    margin: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background: white;
  list-style: none;
  z-index: 16;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out; /* Add transition for smooth animation */

  li {
    padding: 15px 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
