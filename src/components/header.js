import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from '../images/logo.svg'
import Balloon from '../images/balloon.svg'

const Header = ({ siteTitle }) => (
  <header className='navigation'>
    <div className='inner-nav'>
      <div className="nav-logo">
        <Link to="/">
          <img src={Logo} alt="Company logo" />
        </Link>
      </div>
      <div className="left-content">
        <Link to="/login"> Log in </Link>
        <div className="btn-chat">
          <Link to="/chat-room"> Join chat room</Link>
        </div>
      </div>
    </div>
    <div className="balloon">
      <img src={Balloon} alt="" />
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
