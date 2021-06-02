import * as React from 'react'
import Header from "./header.js"

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <Header/>
        <main className="container mx-auto px-6 md:px-8 lg:px-28 pt-28">
            <div className="grid grid-cols-12">

                <div className="md:col-span-4 col-span-12 md:pr-8 lg:pr-10">
                    <h3 className="pb-3">Latest posts</h3>
                </div>

                <div className="md:col-span-8 col-span-12">
                    <h1>{pageTitle}</h1>
                    {children}
                </div>
            </div>
        </main>
        </div>
    )
}

export default Layout