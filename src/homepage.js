import React from 'react';
import styled, { keyframes } from 'styled-components';
import FlipCard from './flipcard';

// Define la animación
const rotation = keyframes`
  from {
    background-position: 0px;
  }

  to {
    background-position: 1000px;
  }
`;

// Define un componente de estilo para tu página principal
const HomePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('https://images.hdqwalls.com/wallpapers/minimalism-technology-cloud.jpg') repeat;
  animation: ${rotation} 30s linear infinite;
`;

// Define un componente de estilo para el contenedor de servicios
const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin-top: 50px;
`;

// Define un componente de estilo para tu título
const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom:50px;
`;
const TextTitle = styled.p`
  color: #8c8c94;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom:100px;
`;


function HomePage() {
  return (
    <HomePageContainer>
      <Title>Tu aliado en servicios de DevOps y alojamiento web.</Title>
      <TextTitle>Me encargo de la infraestructura para que tú puedas centrarte en lo que mejor sabes hacer.</TextTitle>
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



//https://images.hdqwalls.com/wallpapers/minimalism-technology-cloud.jpg