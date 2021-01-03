//修改會員資料卡片
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import MemberEdit from '../MemberEdit'

import './MemberList.scss'
function MemberList() {
  const Person = ({ img, name }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    //大頭照的
    const urlapi = `http://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return (
      <div className="person">
        <h3>一般會員</h3>
        <img src={urlapi} alt="" />
        <h4> {name}</h4>
        <button variant="primary" onClick={handleShow}>
          修改資料
        </button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="member-List-modal-box"
        >
          <Modal.Header closeButton>
            <Modal.Title>個人資料</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* 引入會員編輯 */}
            <MemberEdit />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              取消
            </Button>
            <Button variant="primary">確定</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  const memberlist = [{ id: '1', name: 'John' }]
  return (
    <div>
      {memberlist.map(({ id, name }) => (
        <Person key={id} img={id} name={name} />
      ))}
    </div>
  )
}
export default MemberList

// 這是左邊會員卡 Ray
// 照片跟名字要再改
// img檔 放在跟目錄的public/images裡 使用絕對路徑 http://localhost:3000/images/檔名
