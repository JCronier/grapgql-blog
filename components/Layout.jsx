import React from 'react';
import { Children } from 'react/cjs/react.production.min';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
