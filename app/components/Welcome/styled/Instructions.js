import styled from 'styled-components';

const Instructions = styled.div`
  text-align: center;

  & > p {
    margin-top: 20px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export default Instructions;
