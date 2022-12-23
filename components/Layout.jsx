import React from 'react';
import Header from './Header';
import ScrolltoTop from './ScrolltoTop';
import ScrolltoBottom from './ScrolltoBottom';
// import Poster from './Poster';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    {/* <Poster /> */}
    <ScrolltoTop />
    <ScrolltoBottom />
    {children}
    <Footer />
  </>
);

export default Layout;
