import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
// import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import cartIcon from "../../../../../assets/image/cartIcon.png";
// import { PricingContext } from "../../../../../context/PricingProvider";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaAngleDown } from "react-icons/fa";
import "./NavStyles.css";

import logo from "../../../images/breast-cancer-logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Navbar({ toggleDrawer, routes }) {
  // const { cart } = useContext(PricingContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        
      <div>
        <LazyLoadImage src={logo} alt="logo" />
      </div>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
}

const DrawerButton = styled.button`
  all: unset;
  display: grid;
  font-size: 1.5rem;
  @media (min-width: 991px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  // background-color:#efceda;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 100px;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #757575;
`;

const RightNav = styled.div`
  display: flex;
  gap: 1rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: #BCA44E;
  }
`;
