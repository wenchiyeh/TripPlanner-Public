//修改會員資料卡片
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import MemberEdit from '../MemberEdit/index'
import './MemberProfile.scss'
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
        {/* className="member-List-modal-box" */}
        <h4> {name}</h4>
        {/* 編輯會員 */}
        <Button
          variant="primary"
          className="MemberList-title"
          onClick={handleShow}
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
          {/* Modal原生的按鈕 */}
          {/* <Modal.Footer>
            <Button
              variant="secondary"
              className="mef-secondary-close"
              onClick={handleClose}
            >
              取消
            </Button>
            <Button variant="primary" className="mef-secondary-none">
              Understood
            </Button>
          </Modal.Footer> */}
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
