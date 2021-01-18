import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap'
import '../../style/header.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../logo.svg'
import { FiShoppingCart } from 'react-icons/fi'
import { FaCoins } from 'react-icons/fa'
import '../../style/header.scss'
import MebPopover from './MebPopover'

function Header(props) {
  // const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState('')

  // const icn = () => setCount(count + 1)
  // const desc = () => setCount(count - 1)
  // useEffect((e) => {
  //   if (count < 0) {
  //     setIsLoading()
  //   }
  // }, [])
  const imagePath = '/images/testImage.jpg'
  //登入登出
  const login = (
    <Nav.Link
      as={NavLink}
      to="/login"
      exact
      className="Navbar-Title h5 "
      // onClick={icn}
    >
      登入/註冊
    </Nav.Link>
  )
  const inlogin = (
    <>
      <NavDropdown
        title={
          <figure className="Navebar-figure">
            <img className="header-img-br" src={imagePath} alt="User Avatar" />
          </figure>
        }
      >
        <NavDropdown.Item as={NavLink} to="/login">
          會員中心
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to="/">
          登出
        </NavDropdown.Item>
      </NavDropdown>
    </>
  )

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
              to="/travelBuddies"
              className="Navbar-Title h5 "
            >
              揪團旅行
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/productList"
              className="Navbar-Title h5 "
            >
              達人講座
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/member">
              <FaCoins className="Navbar-icon" />
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shoppingcar">
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
            {/* {isLoading > 0 ? inlogin : login} */}
            {inlogin}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
