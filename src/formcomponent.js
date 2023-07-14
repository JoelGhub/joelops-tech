import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px; // Reducido de 600px a 400px
  background: #0A192F;
  padding: 2em;
  border-radius: 10px;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin-bottom: 1em;
  color: #4a4a4a;
  background: #ccd6f6;
  border: none;
  border-radius: 5px;
  font-size: 20px;
`;

export const TextArea = styled.textarea`
  padding: 0.5em;
  margin-bottom: 1em;
  color: #4a4a4a;
  background: #ccd6f6;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  height: 100px;
`;

export const Button = styled.button`
  padding: 0.5em;
  color: #4a4a4a;
  background: #49992f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 20px;

  &:hover {
    background: #1d1d1d;
    color:#dcdada
  }
`;
