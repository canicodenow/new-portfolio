import * as React from 'react'
import { Link } from 'gatsby'
import {
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <main className="container mx-auto px-6 md:px-8 lg:px-28">
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link></li>
                </ul>
            </nav>

            <div className="grid grid-cols-12">

            <div className="md:col-span-3 col-span-12"></div>

            <div className="md:col-span-9 col-span-12">
                <title>{pageTitle}</title>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </div>
            </div>
        </main>
    )
}

export default Layout