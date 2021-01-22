import React from 'react'
import { AiOutlineInbox } from 'react-icons/ai'
import { Container, Button } from 'react-bootstrap'
import './cash.scss'
import MyBreadCrumb from '../../../components/main/MyBreadCrumb/MyBreadCrumb'
import { useHistory } from 'react-router-dom'

function Null() {
  let history = useHistory()
  function goToBuy() {
    history.push('/productList')
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <Container>
        <MyBreadCrumb />

        <div className="center">
          <AiOutlineInbox className="animate__animated  animate__fadeInUp" />
          <h3 className="animate__animated animate__jackInTheBox">
            現在沒有想參加的講座喔
          </h3>

          <Button variant="info" onClick={goToBuy} className="gobuyProduct">
            現在就去參加
          </Button>
        </div>
      </Container>
    </>
  )
}

export default Null
