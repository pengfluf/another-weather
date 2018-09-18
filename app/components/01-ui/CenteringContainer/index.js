import styled from 'styled-components';

const CenteringContainer = styled.div`
  max-width: ${({ maxWidth }) => maxWidth || '1200'}px;
  margin-left: auto;
  margin-right: auto;
`;

export default CenteringContainer;
