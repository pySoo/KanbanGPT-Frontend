import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';

import IssueProvider from './contexts/Issue/IssueProvider';
import ModalProvider from './contexts/Modal/ModalProvider';
import { theme } from './styles/theme';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <IssueProvider>
        <ModalProvider>{children}</ModalProvider>
      </IssueProvider>
    </ThemeProvider>
  );
}
