import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { path } from './constants/path';
import Layout from './pages/_layout';
import Main from './pages/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: path.root,
      element: <Layout />,
      children: [{ index: true, element: <Main /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
