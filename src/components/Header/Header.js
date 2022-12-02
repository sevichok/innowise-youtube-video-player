import React from 'react'
import "../../styles/header.css"

import YTLogo from "../../img-content/YT1.svg"
import YTTitle from "../../img-content/YT2.svg"
import SearchLogo from "../../img-content/svg/search.svg"
import HIconDots from "../../img-content/svg/header-dots.svg"
import HIconCamera from "../../img-content/svg/header-camera.svg"
import HIconBell from "../../img-content/svg/header-bell.svg"
import HUserpic from "../../img-content/photos/photo7.png"

function Header() {
  return (
    <div className='header'>
      <section className='header-logo-menu'>
        <section className='header-menu'>
          <span></span>
          <span></span>
          <span></span>
        </section>
        <section className='header-logo'>
          <img src={YTLogo} alt='logo-yt' style={{ marginRight: "3.67px" }} className='header-logo-logo'></img>
          <img src={YTTitle} alt='logo-yt' className='header-logo-title'></img>
        </section>
      </section>
      <section className='header-search'>
        <input type="text" placeholder='Search'></input>
        <img className='header-input-icon' src={SearchLogo} alt="search-icon"></img>
      </section>
      <section className='header-sidebar'>
        <section className='header-sidebar-icons'>
          <img src={HIconCamera} alt='icon-1'></img>
          <img src={HIconDots} alt='icon-2'></img>
          <img src={HIconBell} alt='icon-3'></img>
          <span className='icon-notification'>
            <p>3</p>
          </span>
        </section>
        <section className='header-sidebar-user'>
          <figure>
            <img src={HUserpic} alt="userpic"></img>
          </figure>
        </section>
      </section>
    </div>
  )
}

export default Header