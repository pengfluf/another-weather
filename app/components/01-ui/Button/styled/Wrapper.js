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
    background-color: #bc8ed0;
    color: rgb(250, 235, 190);
    font-weight: 700;
  }
`;

export default Wrapper;
