import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa'
import { Container, Button } from 'react-bootstrap'
import MyBreadCrumb from '../../../components/main/MyBreadCrumb/MyBreadCrumb'
import { useHistory } from 'react-router-dom'

import './cash.scss'

function Example() {
  let history = useHistory()
  function goHome() {
    history.push('/')
  }

  return (
    <Container>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <MyBreadCrumb />
      <div className="final-page">
        <h1 className="animate__animated animate__bounceInRight">完成購買</h1>
        <FaRegPaperPlane className="airplanner animate__animated animate__fadeInBottomLeft " />
        <Button variant="primary" className="gohomePage" onClick={goHome}>
          回首頁
        </Button>
      </div>
    </Container>
  )
}

export default Example
