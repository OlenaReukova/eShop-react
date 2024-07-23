import React from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
