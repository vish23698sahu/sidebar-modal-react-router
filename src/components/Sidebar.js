import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { social, links } from '../data/data'
import { useGlobalContext } from '../contextAPI/context'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen, closeSidebar } = useGlobalContext();

  return <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''} `} >
    <div className='sidebar-header'>
      <h3>My Sidebar</h3>
      <button className='close-btn' onClick={closeSidebar}>
        <FaTimes />
      </button>
    </div>
    <ul className='links' >
      {
        links.map((link) => {
          const { id, url, text, icon } = link
          return <li key={id}>
            <Link to={url} onClick={() => setIsSidebarOpen(false)} >{icon} {text}</Link>
          </li>
        })
      }
    </ul>
    <ul className='social-icons' >
      {
        social.map((link) => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })
      }
    </ul>
  </aside>
}

export default Sidebar
