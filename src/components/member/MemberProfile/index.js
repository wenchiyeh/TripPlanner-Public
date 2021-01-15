//修改會員資料卡片
import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import MemberEdit from '../MemberEdit/index'
import './MemberProfile.scss'
import { useHistory } from 'react-router-dom'

function MemberProfile({ member }) {
  let history = useHistory()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // let { id } = useParams()
  // async function getMember() {
  //   try {
  //     const response = await fetch(`http://localhost:5000/member/${id}`, {
  //       method: 'get',
  //     })
  //     console.log(response)
  //     if (response.ok) {
  //       const data = await response.json()
  //       setMember(data)
  //       console.log(data)
  //     }
  //   } catch (err) {
  //     alert('無法得到伺服器資料，請稍後再重試')
  //     console.log(err)
  //   }
  // }
  // useEffect(() => {
  //   getMember()
  //   console.log('hi')
  // }, [])
  // useEffect(() => {
  //   console.log(member)
  // }, [member])

  //let display = <></>
  let memberimg = 'http://localhost:3000/images/member/member_1.jpg'

  //導入member[1]
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
          // onClick={() => {
          //   history.push(${member})
          // }}
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
            <MemberEdit member={member} />
          </Modal.Body>
          <Modal.Footer className="Line-none"></Modal.Footer>
        </Modal>
      </div>
    </>
  )
  return display
}

export default MemberProfile
