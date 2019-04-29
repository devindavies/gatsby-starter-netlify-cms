import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import Menu from './Menu.js'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  showSettings(event) {
    event.reventDefault()
  }
  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  render() {
    return (
      <div>
        <div
          className={
            this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'
          }
        >
          <div className="HeaderContainer">
            <Link to="/">
              <img
                src={require('../images/Logo/White (with text).svg')}
                height="45"
              />
            </Link>
            <div className="HeaderGroup">
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
            </div>
          </div>
        </div>
        <Menu />
      </div>
    )
  }
}

export default Header
