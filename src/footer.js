import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 1em 2em;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLinks = styled.div`
  a {
    color: #64ffda;
    text-decoration: none;
    margin: 0 1em;
    transition: color 0.3s ease;

    &:hover {
      color: #ccd6f6;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2023 JoelOpsTech. Todos los derechos reservados.</FooterText>
      <FooterLinks>
        <a href="/">Términos de Servicio</a>
        <a href="/">Política de Privacidad</a>
      </FooterLinks>
    </FooterContainer>
  );
}

export default Footer;
