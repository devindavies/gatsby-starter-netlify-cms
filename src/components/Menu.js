import React from 'react'
import { Link } from 'gatsby'
import { slide as Slide } from 'react-burger-menu'
import './Menu.css'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Slide right id="sidebar" className="sideMenu">
        <Link id="about" className="menu-item" to="/about">
          ABOUT
        </Link>
        <Link id="ministries" className="menu-item" to="/ministries">
          MINISTRIES
        </Link>
        <Link id="resources" className="menu-item" to="/resources">
          RESOURCES
        </Link>
        <Link id="give" className="menu-item" to="/give">
          GIVE
        </Link>
        <Link id="contact" className="menu-item" to="/contact">
          CONTACT
        </Link>
      </Slide>
    )
  }
}

export default Menu
