import React from 'react';
import styled from 'styled-components';
import { FaLinux, FaReact, FaPython, FaTerminal, FaDocker } from 'react-icons/fa';
import { SiRedhat, SiKubernetes, SiAmazonaws, SiMysql, SiGoland } from 'react-icons/si';

const AboutContainer = styled.div`
  margin: 40px;
  padding: 40px;
  background-color: #0a192f;
  color: #ccd6f6;
  min-height: calc(100vh - 600px); /* Ajusta el valor para dejar suficiente espacio para el footer */
`;

const Title = styled.h2`
  color: #64ffda;
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1em;
  line-height: 1em;
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Ajusta el espacio entre los íconos */
  margin-top: 40px;
`;

const TechIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px; /* Ajusta el tamaño de los íconos */
  width: 120px; /* Ajusta el tamaño de los contenedores de los íconos */
  height: 120px; /* Ajusta el tamaño de los contenedores de los íconos */
  background-color: ${props => props.color};
  color: #fff;
  border-radius: 8px;
`;

function Stack() {
  return (
    <AboutContainer>
      <Title>Sobre mí</Title>
      <Text>
        Soy un chico joven apasionado por la tecnología, con varios años de experiencia llevando hosting webs y servidores de aplicaciones. Me he especializado en Linux, Kubernetes y AWS, y también tengo conocimientos en programación.
      </Text>
      <Text>
        A lo largo de mi carrera, he obtenido certificaciones en Kubernetes y Linux, lo que me ha permitido adquirir un sólido conocimiento en el despliegue y gestión de aplicaciones en entornos de contenedores. Además, tengo experiencia en el manejo de servidores web y en el diseño e implementación de infraestructuras escalables en la nube de AWS.
      </Text>
      <Text>
        Mi pasión por la tecnología me impulsa a estar siempre actualizado y aprender nuevas herramientas y tecnologías. Estoy comprometido con brindar soluciones de calidad y trabajar en colaboración con equipos para lograr los objetivos establecidos.
      </Text>
      <Title>Stack</Title>
      <StackContainer>
        <TechIcon color="#333"><FaLinux title="Linux" /></TechIcon>
        <TechIcon color="#EE0000"><SiRedhat title="Red Hat" /></TechIcon>
        <TechIcon color="#326CE5"><SiKubernetes title="Kubernetes" /></TechIcon>
        <TechIcon color="#61DBFB"><FaReact title="React" /></TechIcon>
        <TechIcon color="#FF9900"><SiAmazonaws title="AWS" /></TechIcon>
        <TechIcon color="#4B8BBE"><FaPython title="Python" /></TechIcon>
        <TechIcon color="#000000"><FaTerminal title="Bash" /></TechIcon>
        <TechIcon color="#2496ED"><FaDocker title="Docker" /></TechIcon>
        <TechIcon color="#00758F"><SiMysql title="SQL" /></TechIcon>
        <TechIcon color="#00ADD8"><SiGoland title="GO" /></TechIcon>
      </StackContainer>
    </AboutContainer>
  );
}

export default Stack;
