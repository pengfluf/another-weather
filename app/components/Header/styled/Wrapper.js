import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;

  & > [class^='CenteringContainer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  background-color: #bc8ed0;
  max-height: 70px;
`;

export default Wrapper;
