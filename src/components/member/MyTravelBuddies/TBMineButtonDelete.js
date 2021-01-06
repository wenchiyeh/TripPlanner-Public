import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function TBMineButtonDelete() {
  const [tbMineDelete, settbMineDelete] = useState(false)
  return (
    <>
      <Button
        className="tbmine-button-delete"
        onClick={() => settbMineDelete(true)}
      >
        刪除
      </Button>{' '}
      <Modal
        size="lg"
        show={tbMineDelete}
        onHide={() => settbMineDelete(false)}
        aria-labelledby="tbMineDelete"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="tbMineDelete" className="tbMine-delete-title">
              您確定要刪除旅行揪團並通知團員嗎？
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="tbMineDeleteMessage">
              <Form.Label htmlFor="tbMineDeleteMessage">通知訊息：</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="" className="tbmine-button-delete-cancel">
              取消
            </Button>
            <Button variant="" className="tbmine-button-delete-confirm">
              確定
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default TBMineButtonDelete
