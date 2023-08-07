import React, { useState } from 'react'
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styled from "styled-components";
export default function ExpandMenu({route}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <SMenu>
    <MenuButton onClick={toggleMenu}>
      {route.name} {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
    </MenuButton>
    <SubRoutesContainer isOpen={isMenuOpen}>
      {route.subRoutes.map((subRoute) => (
        <SubRoute to={subRoute.link} key={subRoute.name}>
          {subRoute.name}
        </SubRoute>
      ))}
    </SubRoutesContainer>
  </SMenu>
  )
};


const SubRoutesContainer = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 1rem;
`;
const SMenu = styled.div``;

const MenuButton = styled.div`
  font-size: 1rem;
  padding: 0.5rem;
  display: flex;
  color:#000;
  align-items: center;
  justify-content: space-between;
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color:#000;
  padding: 0.5rem;
  font-size: 1rem;
`;
