import React from 'react';

import { Link } from 'gatsby';

import Logo from '../images/PT-logo-2.png';

export default function Nav() {
  return (
    <nav className="flex shadow-lg pb-3 px-3 md:px-6 lg:px-8">
      <Link activeClassName="active" to="/">
        <img
          loading="eager"
          alt="PoorTrader logo"
          src={Logo}
          width="200"
          className="max-h-12 w-auto md:max-h-16 lg:max-h-full"
        />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/rules" activeClassName="active">
            Rules
          </Link>
        </li>
        <li>
          <Link to="/resources" activeClassName="active">
            Resources
          </Link>
        </li>
      </ul>
    </nav>
  );
}
