import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const Item = styled.li`
  margin-right: 5px;
  margin-bottom: 10px;
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
  margin-left: 10px;

  &:hover {
    background: rgb(53, 167, 110);
  }
`;
