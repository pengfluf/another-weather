import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  margin-left: 30px;
  margin-top: 5px;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.12),
      0 0 1px 1px rgba(0, 0, 0, 0.08);
  }
`;

export default Wrapper;
