import React from 'react'
import { AiOutlineInbox } from 'react-icons/ai'
import { Container, Button } from 'react-bootstrap'
import './cash.scss'
import MyBreadCrumb from '../../main/MyBreadCrumb/MyBreadCrumb'
import { useHistory } from 'react-router-dom'

function Null() {
  let history = useHistory()
  function goToBuy() {
    history.push('/products')
  }
  return (
    <>
      <Container>
        <MyBreadCrumb />

        <div className="center">
          <AiOutlineInbox />
          <h3>現在沒有想參加的講座喔</h3>

          <Button variant="info" onClick={goToBuy}>
            現在就去參加
          </Button>
        </div>
      </Container>
    </>
  )
}

export default Null
