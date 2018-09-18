import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;

  &:first-of-type {
    margin-top: 0;
  }

  &:not(:last-of-type) {
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #e5e5e5;
    }
  }
`;

export default Wrapper;
