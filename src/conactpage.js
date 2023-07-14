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
  gap: 0.7em; // Espacio adicional entre los elementos
`;

const ContactTitle = styled.h1`
  color: #41812c;
`;

const ContactText = styled.p`
  margin-bottom: 0.4em;
`;

const ContactPage = () => (
  <ContactContainer>
    <ContactTitle>Contacto</ContactTitle>
    <ContactText>Si tienes alguna pregunta, no dudes en contactarme.</ContactText>
    <Form action="https://formspree.io/f/mpzgzewz" method="POST">
    <Input type="text" name="name" placeholder="Tu nombre" required />
    <Input type="email" name="_replyto" placeholder="Tu correo electrónico" required />
    <TextArea name="message" placeholder="Tu mensaje" required />
    <Button type="submit">Enviar</Button>
    </Form>
  </ContactContainer>
);

export default ContactPage;
