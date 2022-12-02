import React from 'react'
import { Content } from "../../text-content/SidebarContent"

function Sidebar() {
  const { title, comment, author, list } = Content
  const ContentList = list.map((item, index) => <figure className='content-sidebar-item' key={index}>
    <img src={item.cover} alt='ch' className='cphoto'></img>
    <figcaption className='content-sidebar-timing'>{item.timing}</figcaption>
    <figcaption className='content-sidebar-figcaption'>{item.title}</figcaption>
    <figcaption className='content-sidebar-figcaption-stats'>
      <p>{item.discription}</p>
      <p>{author}</p>
    </figcaption>
  </figure>)

  return (
    <section className='content-sidebar-right'>
      <section className='content-sidebar-header'>
        <figure className='content-sidebar-desc'>
          <figcaption className='content-sidebar-desc-title'>
            <h3>{title}</h3>
          </figcaption>
          <figcaption className='content-sidebar-desc-rec'>
            <p>{comment}</p>
            <p className='blue_dot'></p>
          </figcaption>
        </figure>
      </section>
      <section className='content-sidebar-content'>
        {ContentList}
      </section>
    </section>
  )
}

export default Sidebar