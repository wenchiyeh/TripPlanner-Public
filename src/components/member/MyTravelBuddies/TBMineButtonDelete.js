import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function TBMineButtonDelete(props) {
  const [tbMineDelete, settbMineDelete] = useState(false)
  console.log(props.tb_themeName_)
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
            <Modal.Title id="tbMineDelete" className="tbmine-delete-title">
              您確定要刪除<span>{' ' + props.tb_themeName_ + ' '}</span>
              並通知團員嗎？
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
            <Button
              variant=""
              className="tbmine-button-delete-confirm"
              onClick="tbDelete()"
            >
              確定
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default TBMineButtonDelete
