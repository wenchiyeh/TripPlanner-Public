import React from 'react'
import { Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap'
import '../../style/header.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../logo.svg'
import { FiShoppingCart } from 'react-icons/fi'
import { FaCoins } from 'react-icons/fa'
import '../../style/header.scss'
import MebPopover from './MebPopover'
function Header(props) {
  const imagePath = '/images/testImage.jpg'

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg={'primary'} variant="dark">
        <Navbar.Brand as={NavLink} to="/" className="Navbar-Logo">
          <img src={Logo} width="150" alt="圖片替代文字" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={NavLink}
              to="/itinerary"
              exact
              className="Navbar-Title h5 "
            >
              行程規劃
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/travelBuddy"
              className="Navbar-Title h5 "
            >
              揪團旅行
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products" className="Navbar-Title h5 ">
              達人講座
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/member">
              <FaCoins className="Navbar-icon" />
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shoppingcar/">
              <FiShoppingCart className="Navbar-icon" />
            </Nav.Link>
            <Nav.Link>
              <div className="not-icon-mover">
                <MebPopover className="Navbar-icon" />
                {/* <Notification className="Navbar-icon " /> */}
              </div>
              {/* <FaRegBell className="Navbar-icon" /> */}
              <Badge variant="light">5</Badge>
            </Nav.Link>
            <NavDropdown
              title={
                <figure className="Navebar-figure">
                  <img
                    className="header-img-br"
                    src={imagePath}
                    alt="User Avatar"
                  />
                </figure>
              }
            >
              <NavDropdown.Item as={NavLink} to="/login">
                會員中心
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/home">
                登出
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
