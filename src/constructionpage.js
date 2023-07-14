import React from 'react';
import styled from 'styled-components';

const ConstructionContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0a192f;
`;

const ConstructionTitle = styled.h1`
  color: #64ffda;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ConstructionText = styled.p`
  color: #ccd6f6;
`;

const ConstructionPage = () => (
  <ConstructionContainer>
    <ConstructionTitle>¡Estamos trabajando en ello!</ConstructionTitle>
    <ConstructionText>
      Esta sección de nuestro sitio web está actualmente en construcción. Por favor, vuelve más tarde.
    </ConstructionText>
  </ConstructionContainer>
);

export default ConstructionPage;
