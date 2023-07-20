import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Suspense fallback={'...loading'}>
      <Header onToggleNav={toggleNav} />
      <Navbar isNavOpen={isNavOpen} />
      <Outlet />
    </Suspense>
  );
}
