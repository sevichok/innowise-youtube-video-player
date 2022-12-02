import React from 'react'
import "../../styles/content.css"
import HiddenIcon from "../../img-content/svg/rightArrow.svg"
import PauseSVG from "../../img-content/svg/Pause.svg"
import NextSVG from "../../img-content/svg/Next.svg"
import VolumeSVG from "../../img-content/svg/Volume.svg"

import FullScreenSVG from "../../img-content/svg/FullScreen.svg"
import SubtitlesSVG from "../../img-content/svg/Subtitles.svg"
import SettingsSVG from "../../img-content/svg/Settings.svg"
import SizeSVG from "../../img-content/svg/Size.svg"

import LikeSVG from "../../img-content/svg/like.svg"
import DislikeSVG from "../../img-content/svg/dislike.svg"
import ShareSVG from "../../img-content/svg/arr.svg"

import { ContentStore } from "../../text-content/MainContent"
function Content() {
  const { main_title, main_date, main_disc, cover, button_title } = ContentStore

  return (
    <div className='content'>
      <section className='content-video'>
        <figure className='content-video_figure'>
          <section className='cover-image'>
            <section className='cover-placeholder'>
              <div className='progress-timing'>
                <p className='progress-time'>1:34</p>
                <p className='progress-time'>19:00</p>
              </div>
              <div className='progress-full'>
                <div className='progress-part'></div>
              </div>
              <div className='progress-icons'>
                <div className='progress-icons-left'>
                  <figure><img src={PauseSVG} alt='' className="icon-pause"></img></figure>
                  <figure><img src={NextSVG} alt='' className="icon-next"></img></figure>
                  <figure><img src={VolumeSVG} alt='' className="icon-vol" ></img></figure>
                  <p className='hidden-progress-time'>1:34</p>
                  <div className='progress-full-volume'>
                    <div className='progress-part-volume'></div>
                  </div>
                  <p className='hidden-progress-time'>-10:00</p>
                </div>
                <div className='progress-icons-right'>
                  <img src={SubtitlesSVG} alt='' style={{ paddingRight: "27px" }}></img>
                  <img src={SettingsSVG} alt='' style={{ paddingRight: "25px" }}></img>
                  <img src={SizeSVG} alt='' style={{ paddingRight: "23px" }}></img>
                  <img src={FullScreenSVG} alt=''></img>
                </div>
              </div>
            </section>
          </section>
          <figcaption>
            <h3>Dude You Re Getting A Telescope</h3>
            <img className='hidden-icon' alt='' src={HiddenIcon}></img>
          </figcaption>
          <figcaption className='clicking-content'>
            <p>123k views</p>
            <section className='clicking-content-area'>
              <figure className='clicking-area'>
                <img src={LikeSVG} alt=''></img>
                <figcaption className='clicking-area-btn'>123k</figcaption>
              </figure>
              <figure className='clicking-area'>
                <img src={DislikeSVG} alt=''></img>
                <figcaption className='clicking-area-btn'>435k</figcaption>
              </figure>
              <figure className='clicking-area'>
                <img src={ShareSVG} alt=''></img>
                <figcaption className='clicking-area-btn'>Share</figcaption>
              </figure>
              <figure className='clicking-dots'>
                <span></span>
                <span></span>
                <span></span>
              </figure>
            </section>
          </figcaption>
        </figure>
      </section>
      <section className='content-channel'>
        <figure className='content-channel-cover'>
          <img src={cover} alt='ch2'></img>
          <figcaption>
            <h3>{main_title}</h3>
            <p>{main_date}</p>
            <p>{main_disc}</p>
            <h4>Show more</h4>
          </figcaption>
        </figure>
        <section className='content-sub-button'>
          <button className='sub-button'>{button_title}</button>
        </section>
      </section>
    </div>
  )
}

export default Content