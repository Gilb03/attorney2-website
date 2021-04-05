import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <nav />
    <p>Specializing in Family and Juvenile Law for over 40 Years</p>
    <StaticImage
      src="../images/office.png"
      width={960}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="legal services"
      style={{ marginBottom: `1.45rem`,display:`block`, objectPosition:`center`, objectFit:`cover`}}
   />
    <p>
    I am admitted to practice law in the states of Iowa and Indiana.  
    Additionally, I have passed the Pennsylvania Bar Examination and upon meeting residency  requirements, can practice in the courts of that state. 
    I am also admitted to practice in the following federal courts: Northern and Southern Districts of Indiana, Northern District of Illinois, and the Eastern District of Michigan. 
     U.S. Tax Court, U.S. Court of Appeals, Sixth & Seventh Circuit and the U.S. Supreme Court.
    </p>
    <p> Additionally, I have served as corporation counsel, county counsel, trial counsel, labor law 
      and community development attorney. These experinces have allowed me a truly unique perspective when it comes to helping 
      the every day person understand all the legal jargon that comes with any issues they may be dealing with. Patience, empathy and hard work 
      are the foundations of this practice.  </p>
  </Layout>
)

export default IndexPage
