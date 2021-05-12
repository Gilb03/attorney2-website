import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Location from "../components/location"
import SeoInfo from "../components/seo"

const ContactUs = () => (
  <Layout>
    <SeoInfo title="Contact Us" />
    <h1>Contact</h1>
    <div className="container">
    <p>Feel free to get in touch with me by using the information below. Please call ahead to schedule an appointmemt. 
      Due to Covid-19, I do emphasize that all meetings are via phone or zoom until further notice. 
    I look forward to your call!</p>
    <p>Email: gilkin@gilbertkingjrpc.com</p>
    <p>Phone: (219) 938-8302</p>
    <br></br>
    <h3><bold>Hours of Operation</bold></h3>
    <p>Mon-Fri: &nbsp;  &nbsp;  &nbsp; 9:00am - 5:00pm</p>
    <p>Sat-Sun: &nbsp;  &nbsp;  &nbsp; closed</p>
    </div>
    <Link to="/">Back</Link>
    <Location  />
  </Layout>
)

export default ContactUs
