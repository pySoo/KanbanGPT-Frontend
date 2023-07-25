import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

import { theme } from './styles/theme';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RecoilRoot>
  );
}
