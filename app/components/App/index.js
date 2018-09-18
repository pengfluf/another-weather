/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import MainPage from 'containers/MainPage';

import Wrapper from './styled/Wrapper';

function App() {
  return (
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
}

export default App;
