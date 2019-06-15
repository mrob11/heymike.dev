import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../images/mike.inline.svg"

const Header = ({ siteTitle, imageData }) => (
  <header className="absolute top-0 left-0 w-full h-16 z-10 px-2">
    <div className="container mx-auto flex flex-row h-full items-center">
      <Link to="/">
        <Logo className="stroke-current text-transparent" />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
