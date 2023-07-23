import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/common/Header';
import Navbar from '@/components/common/Navbar';
import ModalContainer from '@/components/Modal/ModalContainer';

export default function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Suspense fallback={'...loading'}>
      <Header onToggleNav={toggleNav} />
      <Navbar isNavOpen={isNavOpen} />
      <ModalContainer />
      <Outlet />
    </Suspense>
  );
}
