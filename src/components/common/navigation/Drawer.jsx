import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import logo from "../images/logo.png";
import ExpandMenu from "./ExpandMenu";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from "../../../images/breast-cancer-logo.png"
export default function Drawer({ isOpen, toggleDrawer, routes }) {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
          <SNavbarBrand>

            <div>
              <LazyLoadImage src={logo} alt="" />
            </div>
          </SNavbarBrand>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.name} />;
              }
              return (
                <NavRoute
                  onClick={toggleDrawer}
                  to={route.link}
                  key={route.name}
                >
                  {route.name}
                </NavRoute>
              );
            })}

          </NavRoutes>
        </RightNav>
      </SDrawer>
    </>
  );
}

const SNavbarBrand = styled.h2`
  font-size: 3rem;
`;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  background: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: fixed;
  top: 0;
  height: 100%;
  width: 73%;
  transition: 0.3s ease;
  background:white;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;
const NavRoutes = styled.div``;
const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #757575;
  font-size:.9rem;
  padding: 0.5rem;
 font-family: 'Poppins', sans-serif;
  &:hover {
    transition: 0.5s ease;
    color: #12a9b2;
  }
`;
