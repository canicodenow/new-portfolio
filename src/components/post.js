import * as React from 'react'
import { Link } from 'gatsby'
import {
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
    return (
        <main className="container mx-auto px-6 md:px-8 lg:px-28">
            <header>
                <nav className="flex">
                    {/* <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                        <h3 style={{ display: `inline` }}>PoorTrader</h3>
                    </Link> */}
                    <Link to="/">
                    <StaticImage className="" loading="eager"
                        alt="PoorTrader logo"
                        src="../images/PT-logo-2.png"
                    />
                    </Link>
                    <title>{pageTitle}</title>
                    <ul className="nav-links ml-auto">
                        <li className={navLinkItem}>
                            <Link to="/" className={navLinkText}>Home</Link></li>
                        <li className={navLinkItem}>
                            <Link to="/about" className={navLinkText}>About</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="grid grid-cols-12">

                <div className="md:col-span-4 col-span-12 md:pr-8 lg:pr-10">
                    <h3 className="pb-3">Latest posts</h3>
                </div>

                <div className="md:col-span-8 col-span-12">
                    <title>{pageTitle}</title>
                    <h1 className={heading}>{pageTitle}</h1>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout