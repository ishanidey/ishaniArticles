import React from 'react';
import Header from './Header';
import ScrolltoTop from './ScrolltoTop';
import Poster from './Poster';
import Footer from './Footer';
import SearchBar from './SearchBar';

const Layout = ({ children }) => (
  <>
    <Header />
    <Poster />
    <SearchBar />
    <ScrolltoTop />
    {children}
    <Footer />
  </>
);

export default Layout;
