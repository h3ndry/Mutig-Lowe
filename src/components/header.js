import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useEffect, useState } from "react"

import Logo from '../images/logo.svg'
import Balloon from '../images/balloon.svg'

const Header = ({ siteTitle }) => {

  let menu = useRef(null)
  const [menuState, setMenu] = useState(false)


  useEffect(() => {
    // menu.add
  })

  // console.log(menuState)

  return (
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

        <div className={menuState ? `icon-menu icon-menu__active` : `icon-menu`} onClick={() => { setMenu(!menuState) }} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
      <div className="balloon">
        <img src={Balloon} alt="" />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
