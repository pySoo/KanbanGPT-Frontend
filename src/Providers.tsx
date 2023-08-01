import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { theme } from './styles/theme';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
