// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/post'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>I've been in the crypto game for four years with nothing to show for it, except regret. That needs to change.</p>
      <p>I created this site to track my journey from the world's worst trader to <s>the world's best</s> one who at least makes money.</p>
      <p>My intentions for this site are to:
        <ul>
          <li>keep myself accountable</li>
          <li>plan my journey</li>
          <li>write about what I've learned, what works and what doesn't</li>
          <li>celebrate successes and rant about failures.</li>
        </ul>
      </p>
      <h2>My football team</h2>
      <p>For my sins, I support newly relegated Fulham FC.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage