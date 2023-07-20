import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 1em 2em;
  position: fixed;
  bottom: 0;
  width: 100vw;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1em;
  }
`;

const FooterText = styled.p`
  margin: 0;

  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-right: 1em;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #64ffda;
    text-decoration: none;
    margin: 0 1em;
    transition: color 0.3s ease;

    &:hover {
      color: #ccd6f6;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1em;
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
