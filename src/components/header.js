import * as React from 'react'
import { Link } from 'gatsby'

import {
    navLinkText
} from './layout.module.css'
import Logo from "../images/PT-logo-2.png"

const Header = ({ pageTitle }) => {

    return (

<header className="mb-3 md:mb-5 lg:mb-7 border-b-2 border-blue-200 fixed w-full z-50 bg-white">
<nav className="flex shadow-lg pb-3 px-3 md:px-6 lg:px-8">
<Link to="/">
    <img loading="eager"
        alt="PoorTrader logo"
        src={ Logo }
        width="200"
    ></img>
    </Link>
    <ul className="nav-links ml-auto mr-3">
        <li className="pl-8 self-center">
            <Link to="/" className={navLinkText}>Home</Link></li>
        <li className="pl-8 self-center">
            <Link to="/about" className={navLinkText}>About</Link></li>
    </ul>
</nav>
</header>
    )
}

export default Header