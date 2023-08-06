import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/common/Header';
import Loading from '@/components/common/Loading';
import Navbar from '@/components/common/Navbar';
import ToastContainer from '@/components/common/ToastContainer';
import ModalContainer from '@/components/Modal/ModalContainer';

export default function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <Header onToggleNav={toggleNav} />
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>

      <ModalContainer />
      <ToastContainer />
    </div>
  );
}
