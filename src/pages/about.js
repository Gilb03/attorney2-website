import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SeoInfo from "../components/seo"

const About = () => (
  <Layout>
    <SeoInfo title="Attorney" />
    <h1>About</h1>
    <StaticImage
      src="../images/IMG_0076.JPG"
      width={960}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`,display:`block`, objectPosition:`center`, objectFit:`cover`}}
   />
    <p>I have over 40 years of experience in practicing civil law including corporation counsel and misdemeanor law. 
    My primary focus include personal injury and property acquisition for the city of Gary and corporations. 
    Additionally, I was on the Board of Law Examiners for the state of Indiana for 10 years. 
       </p>
    <p>
    I worked at the City of Gary - Law Department, January 1988 to April 15, 1993.  As Corporation Counsel I served as the senior official responsible for all activities of the Law Department. 
    I was the principal legal advisor to the Common Council, the Mayor and the executive departments of the city government.  My office prosecuted all violators of the City ordinances, 
    defended the City against lawsuits, drafted ordinances and other legal documents, interpreted and advised on legal matters, and carried out other duties commonly associated with the 
    office of Corporation Counsel including developed plans, budgets, policy, and procedures for the Law Department.  In addition, I  directed the work of all assigned personnel on the 
    basis of the approved programs. 
    </p>

    <p>
      I also acted as an official representative of the Mayor on major policy, and administrative matters and carried out special project assignments as directed. Lastly, 
    I personally was involved in a number of Federal and State court cases from trial through brief preparation.
    </p>
    <h1>Current Services</h1>
      <p>The current service offerings include Juvenile and land acquisition. If you or somebody you know is 
        facing any legal challenges in these two areas head over to the contact page and drop me a line. 
        Please call to schedule an appointment first. We look forward to your call! 
      </p>

    <Link to="/">Back</Link>
  </Layout>
)

export default About
