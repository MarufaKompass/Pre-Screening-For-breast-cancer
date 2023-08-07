import React from 'react'
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom'
export default function Menu({ route }) {
  return (
<SMenu>
    <div className="flex items-center">
    <MenuButton>{route.name} </MenuButton>
      <FaAngleDown />
    </div>
      <SubRoutesContainer>
        {route.subRoutes.map((subRoute) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>

  )
}


const SubRoutesContainer = styled.div`
  position: absolute;
  min-width: 13rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: .4rem .4rem .4rem 1rem;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  // border-radius: 1rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  background:white
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
  padding: .5rem;
  color:#000;
  &:hover {
    transition: 0.5s ease;
    color: #12a9b2;

  }
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color:#757575;
  padding: .3rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
  font-size: .9rem;
  &:hover {
    transition: 0.3s ease-in;
    color:#12a9b2;

  }
`;
