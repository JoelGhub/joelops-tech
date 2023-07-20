import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a192f;
  padding: 1em 2em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    position: relative; /* Agregamos position: relative */
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto; /* Alineamos el logo a la izquierda y el resto a la derecha */
  @media (max-width: 768px) {
    margin-bottom: 1em; /* Agregamos un margen inferior en dispositivos móviles */
  }
`;

const Logo = styled.div`
  font-size: 1em;
  color: #ccd6f6;
`;

const Menu = styled.div`
  display: flex;
  align-items: center; /* Alineamos los elementos del menú verticalmente */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1em;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    min-height: 200px;
  }

  a {
    color: #ccd6f6;
    text-decoration: none;
    margin: 0 1em;

    &.active {
      color: #64ffda;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5em;
  color: #ccd6f6;
  cursor: pointer;
  margin-left: auto;
  @media (max-width: 768px) {
    display: block;
    position: absolute; /* Agregamos position: absolute */
    top: 50%; /* Centramos verticalmente */
    right: 1em; /* Alineamos a la derecha */
    transform: translateY(-50%); /* Centramos verticalmente */
  }
`;

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnResize);

    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, []);

  return (
    <Navigation>
      <LogoContainer>
        <Logo>JoelOpsTech</Logo>
      </LogoContainer>
      <MenuIcon onClick={toggleMenu}>
        {isMenuOpen ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
      </MenuIcon>
      <Menu isOpen={isMenuOpen}>
        <NavLink exact to="/" activeClassName="active">
          Inicio
        </NavLink>
        <NavLink to="/services" activeClassName="active">
          Servicios
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contacto
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          Sobre mí
        </NavLink>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
        <NavLink to="/proyectos" activeClassName="active">
          Proyectos
        </NavLink>
      </Menu>
    </Navigation>
  );
}

export default NavBar;
