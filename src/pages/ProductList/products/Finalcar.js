import React, { useState } from 'react'
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
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 3000)
  const spinner = (
    <>
      <Container>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </Container>
    </>
  )

  const display = (
    <>
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
    </>
  )

  return isLoading === true ? spinner : display
}

export default Example
