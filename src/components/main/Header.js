import React, { useState, useEffect } from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'

import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscBell } from 'react-icons/vsc'

function Header(props) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <img src="http://localhost:3000/images/Logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="center-text">
            <Nav.Link as={NavLink} to="/" exact>
              <p>行程規劃</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              <p>揪團旅行</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              <p>達人講座</p>
            </Nav.Link>
          </Nav>
          <Nav className="icons">
            <Nav.Link href="#deets">
              <VscBell />
            </Nav.Link>
            <Nav.Link href="#deets">
              <AiOutlineShoppingCart />
            </Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              <img src="http://localhost:3000/images/testImage.jpg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
