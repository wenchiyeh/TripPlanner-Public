import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function TBHistoryButtonGiveRating() {
  const [tbJoinedDropOut, settbJoinedDropOut] = useState(false)
  return (
    <>
      <Button
        className="tbjoined-button-dropout"
        onClick={() => settbJoinedDropOut(true)}
      >
        取消報名
      </Button>{' '}
      <Modal
        size="lg"
        show={tbJoinedDropOut}
        onHide={() => settbJoinedDropOut(false)}
        aria-labelledby="tbJoinedDrop"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="tbJoinedDrop" className="tbjoined-dropout-title">
              您確定要退出旅行揪團並通知團員嗎？
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="tbMineDeleteMessage">
              <Form.Label htmlFor="tbMineDeleteMessage">通知訊息：</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Modal.Body>
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

export default TBHistoryButtonGiveRating
