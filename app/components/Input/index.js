import styled from 'styled-components';

const Input = styled.input`
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 3px;
  border: 1px solid black;
  outline: none;

  ${({ dropdown }) =>
    dropdown &&
    `
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `};

  ${({ dynamic }) => dynamic && `min-width: 400px;`};
`;

export default Input;
