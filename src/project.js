import React from 'react';
import styled from 'styled-components';

const ProjectCard = styled.div`
  background-color: ${props => props.color};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #000;
  text-decoration: none;
`;

const projects = [
  {
    title: 'Proyecto 1',
    url: 'https://www.ejemplo.com/proyecto1',
    color: '#1d1d1d',
  },
  {
    title: 'Proyecto 2',
    url: 'https://www.ejemplo.com/proyecto2',
    color: '#2c4724',
  },
];

function Project() {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} color={project.color}>
          <Title>{project.title}</Title>
          <Link href={project.url} target="_blank" rel="noopener noreferrer">
            {project.url}
          </Link>
        </ProjectCard>
      ))}
    </div>
  );
}

export default Project;
