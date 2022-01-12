import styled from 'styled-components';

const Button = styled.button`
  display: block;
  color: #fff;
  background-color: red;
  font-size: 1em;
  text-align: center;
  padding: 10px 15px;
  border: 0;
  margin: 10px 0;
  border-radius: 8px;
  flex-grow: 0;

  &:hover {
    background-color: green;
  }
  &:active {
    background-color: green;
    box-shadow: 0 2px #333;
    transform: tranlsateY(2px);
    transform: scale(0.98);
  }

  &:disabled {
    background-color: gray;
  }
`;

export default Button;
