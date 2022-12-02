import React from 'react'
import "../../styles/hiddenbar.css"

import Icon1 from "../../img-content/svg/icon1.svg"
import Icon2 from "../../img-content/svg/icon2.svg"
import Icon3 from "../../img-content/svg/icon3.svg"
import Icon4 from "../../img-content/svg/icon4.svg"

function HiddenBar() {
    return (
        <div className='hidden-sidebar'>
            <section className='hidden-sidebar-menu'>
                <section className='hidden-sidebar-menu-list'>
                    <figure className='hidden-sidebar-menu-item'>
                        <img alt='icon1' src={Icon1}></img>
                        <figcaption>Home</figcaption>
                    </figure>
                    <figure className='hidden-sidebar-menu-item'>
                        <img alt='icon2' src={Icon2}></img>
                        <figcaption>Trending</figcaption>
                    </figure>
                    <figure className='hidden-sidebar-menu-item'>
                        <img alt='icon3' src={Icon3}></img>
                        <figcaption>Subscriptions</figcaption>
                    </figure>
                    <figure className='hidden-sidebar-menu-item'>
                        <img alt='icon4' src={Icon4}></img>
                        <figcaption>Library</figcaption>
                    </figure>
                </section>
            </section>
        </div>
    )
}

export default HiddenBar