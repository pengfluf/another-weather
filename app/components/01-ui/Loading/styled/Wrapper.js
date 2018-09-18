import styled from 'styled-components';

const Wrapper = styled.div`
  & > svg {
    position: fixed;
    z-index: 6;
    top: 45vh;
    left: 45vw;

    width: 100px;
    height: 100px;
  }
`;

export default Wrapper;
