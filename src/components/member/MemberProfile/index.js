//修改會員資料卡片
import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import MemberEdit from '../MemberEdit/index'
import { useHistory } from 'react-router-dom'
import './MemberProfile.scss'

function MemberList(props) {
  const [member, setMember] = useState([])
  let history = useHistory()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  async function getMember() {
    try {
      const response = await fetch('http://localhost:5000/member', {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        setMember(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getMember()
  }, [])

  let display = <></>
  let memberimg = 'http://localhost:3000/images/member/member_1.jpg'

  //導入member[1]
  display = member.length > 0 && (
    <>
      <div className="person">
        <h3>一般會員</h3>
        <img src={memberimg} alt="" />
        <h4>{member[0].member_name}</h4>
        <Button
          variant="primary"
          className="MemberList-title"
          onClick={handleShow}
          // history.push('/member/edit/' + member[1].id)
        >
          修改資料
        </Button>
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
            <MemberEdit />
          </Modal.Body>
          <Modal.Footer className="Line-none"></Modal.Footer>
        </Modal>
      </div>
    </>
  )
  return <>{display}</>
}

export default MemberList
