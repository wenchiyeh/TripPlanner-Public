//修改會員資料卡片
import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import MemberEdit from '../MemberEdit'
import { useParams } from 'react-router-dom'
import './MemberProfile.scss'
// import Upload from './Upload'
function MemberProfile({ setMember }) {
  const [memberData, setMemberData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  )
  // console.log('mp member:', memberData)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // const handleChangeShow = () => setShow(true)
  // const handleChangeclose = () => setShow(true)
  //   handleChange(event) {
  //     this.setState({
  //       file: URL.createObjectURL(event.target.files[0]),
  //     })
  //   }

  // async function getMember(id) {
  //   try {
  //     const response = await fetch(`http://localhost:5000/member/${id}`, {
  //       mode: 'cors',
  //       method: 'get',
  //     })

  //     if (response.ok) {
  //       const data = await response.json()
  //       console.log('response:', response)
  //       setMember(data)
  //       localStorage.setItem('userData', JSON.stringify(data))
  //       console.log('memberdata:', data)
  //       // 最後關起spinner，改呈現真正資料
  //       setTimeout(() => {
  //         // setIsLoading(false)
  //       }, 0)
  //     }
  //   } catch (err) {
  //     alert('無法得到伺服器資料，請稍後再重試')
  //     console.log(err)
  //   }
  // }
  function readURL(imgFile) {
    var newPreview = document.getElementById('preview_ie')
    newPreview.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src =
      imgFile.value
    newPreview.style.width = '150px'
    newPreview.style.height = '150px'
  }
  const display = (
    <>
      <div className="person">
        <h3>一般會員</h3>
        <img
          src={'/images/userphoto/' + memberData.member_photo_id}
          alt={memberData.member_name}
        />
        <h4>{memberData.member_name}</h4>
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
          <MemberEdit
            member={memberData}
            setMember={setMember}
            handleClose={handleClose}
          />
        </Modal.Body>
        <Modal.Footer className="Line-none"></Modal.Footer>
      </Modal>
    </>
  )

  return <>{display}</>
}

export default MemberProfile
