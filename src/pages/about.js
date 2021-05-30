// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <h2>My football team</h2>
      <p>For my sins, I support newly relegated Fulham FC.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage