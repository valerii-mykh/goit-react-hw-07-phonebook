import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  max-width: 100%;
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
`;

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
`;

export const Input = styled(Field)`
  display: flex;
  border: 2px solid black;
  margin: 10px auto;
  padding: 10px 30px;
  font-size: 20px;
  &:focus-visible {
    border-radius: 4px;
    border: 2px solid lightblue;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: 0.8em 1em calc(0.8em + 3px);
  border-radius: 3px;
  background: rgb(64, 199, 129);
  box-shadow: 0 -3px rgb(53, 167, 110) inset;
  transition: 0.2s;
  margin: 15px 0;

  &:hover {
    background: rgb(53, 167, 110);
  }
`;
