import React from 'react';
import styled, { keyframes } from 'styled-components';
import FlipCard from './flipcard';

const rotation = keyframes`
  from {
    background-position: 0px;
  }

  to {
    background-position: 1000px;
  }
`;

const HomePageContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 120px); /* Se ajusta el tamaño del navbar y el footer */
  padding: 0em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('https://images.hdqwalls.com/wallpapers/minimalism-technology-cloud.jpg') repeat;
  animation: ${rotation} 30s linear infinite;
  margin-bottom: 120px; /* Ajusta el valor del margen inferior para dejar espacio para el footer */
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`;

const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 50px;
  margin-top: 0;
  
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const TextTitle = styled.p`
  color: #8c8c94;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 100px;
  
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

function HomePage() {
  return (
    <HomePageContainer>
      <Title>Tu aliado en servicios de DevOps y alojamiento web en Girona.</Title>
      <TextTitle>
        Me encargo de la infraestructura para que tú puedas centrarte en lo que mejor sabes hacer.
      </TextTitle>
      <ServicesContainer>
        <FlipCard
          frontContent="Hosting"
          backContent="Brindamos servicios de hosting seguros y confiables."
          frontColor="#1d1d1d"
          backColor="#2c4724"
        />
        <FlipCard
          frontContent="Desarrollo Web"
          backContent="Desarrollamos sitios web personalizados y optimizados."
          frontColor="#2c4724"
          backColor="#1d1d1d"
        />
        <FlipCard
          frontContent="Dominios"
          backContent="Ofrecemos servicios de gestión de dominios para tu negocio."
          frontColor="#1d1d1d"
          backColor="#2c4724"
        />
        <FlipCard
          frontContent="Soporte 24/7"
          backContent="Nuestro equipo de soporte está disponible 24/7 para ayudarte."
          frontColor="#2c4724"
          backColor="#1d1d1d"
        />
        <FlipCard
          frontContent="Seguridad"
          backContent="Nos aseguramos de que tus datos estén seguros."
          frontColor="#1d1d1d"
          backColor="#2c4724"
        />
        <FlipCard
          frontContent="Infraestructura"
          backContent="Mantenemos la infraestructura de tu sitio web para garantizar su funcionamiento."
          frontColor="#2c4724"
          backColor="#1d1d1d"
        />
      </ServicesContainer>
    </HomePageContainer>
  );
}

export default HomePage;
