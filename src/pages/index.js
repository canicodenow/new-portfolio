// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to PoorTrader">
      <p>I'm poor in both wallet and trading ability. This is my journey to be poor no more.</p>
      <StaticImage className="rounded-2xl shadow-lg my-3"
        alt="Joe Bryan, of Fulham Football Club, celebrating with Harrison Reed and Aleksandar Mitrovic"
        src="../images/Wembley.webp"
      />
    </Layout>

  )
}

// Step 3: Export your component
export default IndexPage