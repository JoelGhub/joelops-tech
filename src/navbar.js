import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a192f;
  padding: 1em 2em;
`;

const Logo = styled.div`
  font-size: 2em;
  color: #ccd6f6;
`;

const Menu = styled.div`
  a {
    color: #ccd6f6;
    text-decoration: none;
    margin: 0 1em;

    &.active {
      color: #64ffda;
    }
  }
`;

function NavBar() {
  return (
    <Navigation>
      <Logo>JoelOpsTech</Logo>
      <Menu>
        <NavLink exact to="/" activeClassName="active">Inicio</NavLink>
        <NavLink to="/services" activeClassName="active">Servicios</NavLink>
        <NavLink to="/contact" activeClassName="active">Contacto</NavLink>
        <NavLink to="/about" activeClassName="active">Sobre mí</NavLink>
        <NavLink to="/blog" activeClassName="active">Blog</NavLink>
      </Menu>
    </Navigation>
  );
}

export default NavBar;
