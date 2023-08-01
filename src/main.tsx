import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Providers from './Providers';
import { reset } from './styles/reset';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Providers>
    <Global styles={reset} />
    <App />
  </Providers>,
);
