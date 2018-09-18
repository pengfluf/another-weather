import styled from 'styled-components';

const Wrapper = styled.button`
  max-height: 40px;
  border-radius: 3px;
  padding: 10px 15px;
  margin-left: 10px;

  background-color: #fff;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: rgba(123, 31, 162, 0.8);
    color: #fff;
  }
`;

export default Wrapper;
