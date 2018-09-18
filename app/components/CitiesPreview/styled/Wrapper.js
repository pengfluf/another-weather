import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: calc(100% - 10px);
  left: 10px;
  top: 100%;

  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;

  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export default Wrapper;
