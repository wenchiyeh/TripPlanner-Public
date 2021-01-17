//修改會員資料卡片
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import MemberEdit from '../MemberEdit'
import './MemberProfile.scss'
//import { useHistory } from 'react-router-dom'
function MemberProfile({ member }) {
  //let history = useHistory()
  console.log('???', member)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  let memberimg = 'http://localhost:3000/images/member/member_1.jpg'
  //導入member[0]

  const Loading = <h1>Loading</h1>

  const display = member.length > 0 && (
    <>
      <div className="person">
        <h3>一般會員</h3>
        <img src={memberimg} alt="" />
        <h4>{member[0].member_name}</h4>
        <Button
          variant="primary"
          className="MemberList-title"
          onClick={handleShow}
        >
          修改資料
        </Button>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        //backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title-h4">個人資料</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MemberEdit member={member} />
        </Modal.Body>
        <Modal.Footer className="Line-none"></Modal.Footer>
      </Modal>
    </>
  )
  return display
  //return member.lenght > -1 ? display : Loading
}

export default MemberProfile
