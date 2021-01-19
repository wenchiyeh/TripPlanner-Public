import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap'
import '../../style/header.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../logo.svg'
import { FiShoppingCart } from 'react-icons/fi'
import { FaCoins } from 'react-icons/fa'
import '../../style/header.scss'
import MebPopover from './MebPopover'

function Header({ auth, setAuth }) {
  const imagePath = '/images/testImage.jpg'
  const [memberData, setMemberData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  )
  // const [isLoading, setIsLoading] = useState(true)
  //連結伺服器端
  // useState
  // useEffect(() => {

  // console.log('hahaha')
  // setTimeout(() => {
  //   setIsLoading(false)
  // }, 0)
  // console.log('me有資料嗎?', member)
  // }, [])
  // const loginout = (
  // <Nav.Link as={NavLink} to="/login" exact className="Navbar-Title h5 ">
  //   登入/註冊
  // </Nav.Link>
  // )

  // const login = (
  //   <>
  //     <NavDropdown
  //       title={
  //         <figure className="Navebar-figure">
  //           <img
  //             className="header-img-br"
  //             // src={'images/userphoto/' + member[0].member_photo_id}
  //             src={imagePath}
  //             alt="User Avatar"
  //           />
  //         </figure>
  //       }
  //     >
  //       <NavDropdown.Item as={NavLink} to="/myAccount">
  //         會員中心
  //       </NavDropdown.Item>
  //       <NavDropdown.Divider />
  //       <NavDropdown.Item
  //         as={NavLink}
  //         to="/"
  //         onClick={() => {
  //           localStorage.clear()
  //           sessionStorage.clear()
  //         }}
  //       >
  //         登出
  //       </NavDropdown.Item>
  //     </NavDropdown>
  //   </>
  // )

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
            <Nav.Link as={NavLink} to="/productList/car">
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
            {auth ? (
              <NavDropdown
                title={
                  <figure className="Navebar-figure">
                    <img
                      className="header-img-br"
                      // src={'images/userphoto/' + member[0].member_photo_id}
                      src={imagePath}
                      alt="User Avatar"
                    />
                  </figure>
                }
              >
                <NavDropdown.Item as={NavLink} to="/myAccount">
                  會員中心
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={NavLink}
                  to="/"
                  onClick={() => {
                    localStorage.clear()
                    sessionStorage.clear()
                    setAuth(false)
                  }}
                >
                  登出
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                as={NavLink}
                to="/login"
                exact
                className="Navbar-Title h5 "
              >
                登入/註冊
              </Nav.Link>
            )}
            {/* {login} */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
