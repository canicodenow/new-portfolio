import * as React from 'react';

import Nav from './Nav';

const Header = () => (
  <header className="mb-3 md:mb-5 lg:mb-7 border-b-2 border-teal-700 fixed w-full z-50 bg-white">
    <Nav />
  </header>
);

export default Header;
