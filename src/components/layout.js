import * as React from 'react'
import Header from "./header.js"

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
        <Header/>
        <main className="container mx-auto px-6 md:px-8 lg:px-28 pt-32">
            <h1>{pageTitle}</h1>
            {children}
        </main>
        </div>
    )
}

export default Layout