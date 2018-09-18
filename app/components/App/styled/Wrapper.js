import styled from 'styled-components';
import pattern from 'images/leaves.png';

const Wrapper = styled.div`
  position: relative;

  ${'' /* This trick needs just for background-image opacity */} &::after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    content: '';
    display: block;
    background-image: url(${pattern});
    position: absolute;
    z-index: -1;
  }
`;

export default Wrapper;
