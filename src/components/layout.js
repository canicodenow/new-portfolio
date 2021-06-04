import * as React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer.js';
import Header from './Header.js';

const Layout = ({ pageTitle, children }) => (
  <div>
    <Header />
    <main className="container mx-auto px-6 md:px-8 lg:px-28 lg:pt-32 md:pt-28 pt-20">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <h1>{pageTitle}</h1>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
