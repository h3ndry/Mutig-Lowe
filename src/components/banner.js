import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useEffect } from "react"
import ImgBig from '../images/hero-img.svg'

import Balloon from '../images/balloon.svg'
import Balloon2 from '../images/balloon2.svg'
import Ellipse from '../images/ellipse.svg'





const Banner = () => {

  let banner = useRef(null)

  useEffect(() => {
    const bg = banner.firstElementChild

    return () => {
      console.log(bg)
    };
  }, [])

  return (
    <div className="banner-container" ref={el => banner = el}  >
      <div className="banner-additiona-bg"></div>
      <div className="inner-banner">
        <div className="content">
          <h1>Helping you take the <br /> advantage on <span>FOREX</span> market</h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC</p>
          <Link to='/application'>
            <button>
              Apply now
            </button>
          </Link>
        </div>
        <div className="images">
          <img src={ImgBig} alt="" />
        </div>
        <Link to="www.youtube.com">
          <div className="video-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12.286" viewBox="0 0 10 12.286">
              <path id="play" d="M5,3l8,5.143L5,13.286Z" transform="translate(-4 -2)" fill="#233567" stroke="#233567" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
            Watch Video
        </div>
        </Link>
      </div>
      <div className="balloons">
        <div><img src={Balloon} alt="" /></div>
        <div><img src={Balloon2} alt="" /></div>
        <div><img src={Ellipse} alt="" className="ellipse" /></div>
      </div>
    </div >
  )
}



export default Banner
