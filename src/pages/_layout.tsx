import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import ErrorFallback from '@/components/common/ErrorFallback';
import Header from '@/components/common/Header';
import Loading from '@/components/common/Loading';
import Navbar from '@/components/common/Navbar';
import ToastContainer from '@/components/common/ToastContainer';
import ModalContainer from '@/components/Modal/ModalContainer';
import { useToggle } from '@/hooks/useToggle';

export default function Layout() {
  const { isToggled, toggle } = useToggle();
  return (
    <div>
      <Header onToggle={toggle} />
      <Navbar isNavOpen={isToggled} onToggle={toggle} />

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>

      <ModalContainer />
      <ToastContainer />
    </div>
  );
}
