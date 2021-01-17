import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ConfirmBox(props) {
  const {
    cb = () => alert('ok'),
    header = '請再次確認',
    subHeader = '',
    text = '是否進行此操作',
  } = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{subHeader}</h4>
        <p>{text}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.resetDom(<></>)
            props.onHide(false)
            cb({ ...props })
          }}
        >
          送出
        </Button>
        <Button
          onClick={() => {
            props.resetDom(<></>)
            props.onHide(false)
          }}
        >
          取消
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmBox
