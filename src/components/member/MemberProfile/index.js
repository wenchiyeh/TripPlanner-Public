//修改會員資料卡片
import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import MemberEdit from '../MemberEdit'
import { useParams } from 'react-router-dom'
import './MemberProfile.scss'
//import { useHistory } from 'react-router-dom'
function MemberProfile({ member }) {
  //let history = useHistory()
  //let { id } = useParams(1)
  //console.log('p有拿到member?', member)
  console.log('mp member:', member)
  //const [member, setMembber] = useState(1)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const display = (
    <>
      <div className="person">
        <h3>一般會員</h3>
        <img src={'images/userphoto/' + member[0].member_photo_id} alt="" />
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

  return <>{display}</>
}

export default MemberProfile
