import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Attorney" />
    <h1>About</h1>
    <p>Mr. King has over 20 years of experience in practicing civil law including family, juvenile and mortgage foreclosures.
       </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
