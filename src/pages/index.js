// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage className="rounded-2xl shadow-lg my-3"
        alt="Joe Bryan, of Fulham Football Club, celebrating with Harrison Reed and Aleksandar Mitrovic"
        src="../images/Wembley.webp"
      />
    </Layout>

  )
}

// Step 3: Export your component
export default IndexPage