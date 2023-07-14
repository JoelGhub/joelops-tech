import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  perspective: 1000px;
  margin: 20px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

const CardFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  color: #ccd6f6; // este es el color del texto
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const CardFront = styled(CardFace)`
  background: ${props => props.frontColor || '#0a192f'}; // este es el color de fondo
`;

const CardBack = styled(CardFace)`
  background: ${props => props.backColor || '#0a192f'}; // este es el color de fondo
  transform: rotateY(180deg);
`;

const FlipCard = ({ frontContent, backContent, frontColor, backColor }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <CardContainer onClick={handleFlip}>
      <Card flipped={flipped}>
        <CardFront frontColor={frontColor}>{frontContent}</CardFront>
        <CardBack backColor={backColor}>{backContent}</CardBack>
      </Card>
    </CardContainer>
  );
};

export default FlipCard;
