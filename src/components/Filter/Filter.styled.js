import styled from 'styled-components';

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
`;

export const FindInput = styled.input`
  display: flex;
  border: 2px solid black;
  margin: 10px auto;
  padding: 10px 30px;
  font-size: 18px;
  &:focus-visible {
    border-radius: 4px;
    border: 2px solid lightblue;
  }
`;
