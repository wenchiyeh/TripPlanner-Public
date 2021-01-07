import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function TBHistoryButtonGiveRating() {
  const [tbHistoryGiveRating, settbHistoryGiveRating] = useState(false)
  return (
    <>
      <Button
        className="tbhistory-button-giverating"
        onClick={() => settbHistoryGiveRating(true)}
      >
        評價團員
      </Button>{' '}
      <Modal
        size="lg"
        show={tbHistoryGiveRating}
        onHide={() => settbHistoryGiveRating(false)}
        aria-labelledby="tbHistoryGiveRating"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title
              id="tbHistoryGiveRating"
              className="tbhistory-giverating-title"
            >
              評價團員
            </Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button variant="" className="tbhistory-button-giverating-cancel">
              取消
            </Button>
            <Button variant="" className="tbhistory-button-giverating-confirm">
              確定
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default TBHistoryButtonGiveRating
