import { lazy } from 'react';

import Layout from '../pages/_layout';
import NotFound from '../pages/NotFound';
import { path } from './path';

const CodeArchive = lazy(() => import('../pages/CodeArchive'));
const Main = lazy(() => import('../pages/Main'));

export const routes = [
  {
    path: path.root,
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: path.codeArchive, element: <CodeArchive /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
