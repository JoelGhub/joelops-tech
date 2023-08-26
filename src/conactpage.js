import React from 'react';
import styled from 'styled-components';
import { Form, Input, TextArea, Button } from './formcomponent';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 2em;
  gap: 0.7em;
`;

const ContactTitle = styled.h1`
  color: #41812c;
`;

const ContactText = styled.p`
  margin-bottom: 0.4em;
`;

const MapContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 1em;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 300px;
  border: 0;
`;

const ContactPage = () => (
  <ContactContainer>
    <ContactTitle>Contacto</ContactTitle>
    <ContactText>¿Tienes alguna pregunta? No dudes en ponerte en contacto con nosotros en nuestra ubicación en Fornells de la Selva, Girona.</ContactText>
    <Form action="https://formspree.io/f/mpzgzewz" method="POST">
      <Input type="text" name="name" placeholder="Tu nombre" required />
      <Input type="email" name="_replyto" placeholder="Tu correo electrónico" required />
      <TextArea name="message" placeholder="Tu mensaje" required />
      <Button type="submit">Enviar</Button>
    </Form>
    <MapContainer>
      <StyledIframe title="Ubicación en Girona" src="https://www.google.com/maps/embed/v1/place?q=Fornells+de+la+Selva,+España&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></StyledIframe>
    </MapContainer>
  </ContactContainer>
);

export default ContactPage;
