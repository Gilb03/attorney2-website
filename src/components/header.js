import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#343a40`,
      marginBottom: `1.15rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textAlign: `right`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark"><button class="navbar-toggler" type="button" data-target="#navigation"> <span class="navbar-toggler-icon"></span> </button>
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
            <li class="nav-item active"> <a href="/" class="nav-link"> Home </a> </li>
            <li class="nav-item"> <a href="/about/" class="nav-link"> About</a> </li>
            <li class="nav-item"> <a href="/contact/" class="nav-link"> Contact </a> </li>
        </ul>
    </div>
</nav>
  </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
