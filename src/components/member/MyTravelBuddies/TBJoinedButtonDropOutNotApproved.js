import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function TBJoinedButtonDropOutNotApproved() {
  const [tbJoinedDropNot, settbJoinedDropNot] = useState(false)
  return (
    <>
      <Button
        className="tbjoined-button-dropout"
        onClick={() => settbJoinedDropNot(true)}
      >
        取消報名
      </Button>{' '}
      <Modal
        size="lg"
        show={tbJoinedDropNot}
        onHide={() => settbJoinedDropNot(false)}
        aria-labelledby="tbJoinedDropNot"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title
              id="tbJoinedDropNot"
              className="tbjoined-dropout-title"
            >
              您確定要取消報名此旅行揪團嗎？
            </Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Button variant="" className="tbjoined-button-dropout-cancel">
              取消
            </Button>
            <Button variant="" className="tbjoined-button-dropout-confirm">
              確定
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default TBJoinedButtonDropOutNotApproved
