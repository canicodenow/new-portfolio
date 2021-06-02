// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to PoorTrader">
      <p>I'm poor in both wallet and trading ability. This is my journey to be poor no more.</p>
      <div className="grid grid-cols-12 md:gap-x-12">
        <div className="col-span-12 md:col-span-6 h-auto relative">
      <p className="text-lg absolute py-1 px-3 text-white z-10 top-5 left-2.5 bg-black bg-opacity-75">Trade...</p>

      <StaticImage className="shadow-lg my-3 border-black border-2 object-cover rounded-r-full object-left md:h-full lg:h-3/4"
        alt="Part of a computer screen with a trading chart on it"
        src="../images/trading-pic.jpg"
      />

      </div>
        <div className="col-span-12 md:col-span-6 h-auto relative">
      <p className="text-lg absolute py-1 px-3 text-white z-10 top-5 right-2.5 bg-black bg-opacity-75">Learn...</p>
      <StaticImage className="shadow-lg my-3 border-black border-2 object-cover rounded-l-full object-right md:h-full lg:h-3/4"
        alt="A notebook on a desk"
        src="../images/notebook.jpg"
      />
      </div>
      </div>
    </Layout>

  )
}

// Step 3: Export your component
export default IndexPage