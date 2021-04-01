import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1>Contact Us</h1>
    <div className="container">
    <p>Feel free to get in touch with us by using the information below.We look forward to your call!</p>
    <p>Email: legalgking@aol.com</p>
    <p>Phone: (219) 938-8302</p>
    <br></br>
    <h3><bold>Hours of Operation</bold></h3>
    <p>Mon-Fri &nbsp;  &nbsp;  &nbsp; 9:00am - 5:00pm</p>
    <p>Sat-Sun &nbsp;  &nbsp;  &nbsp; closed</p>

    <h3><bold>Location</bold></h3>
    <p>1001 N. Shelby St. Gary, IN 46403</p>
    </div>
    <Link to="/">Back to homepage</Link>
  </Layout>
)

export default ContactUs
