import { Global, ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { path } from './constants/path';
import Layout from './pages/_layout';
import Main from './pages/Main';
import { reset } from './styles/reset';
import { theme } from './styles/theme';

function App() {
  const router = createBrowserRouter([
    {
      path: path.root,
      element: <Layout />,
      children: [{ index: true, element: <Main /> }],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
