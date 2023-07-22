import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ModalContainer from './components/Modal/ModalContainer';
import Providers from './Providers';
import { reset } from './styles/reset';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Global styles={reset} />
      <App />
      <ModalContainer />
    </Providers>
  </React.StrictMode>,
);
