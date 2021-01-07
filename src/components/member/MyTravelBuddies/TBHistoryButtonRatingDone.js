import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function TBHistoryButtonRatingDone() {
  const [tbHistoryButtonRatingDone, settbHistoryButtonRatingDone] = useState(
    false
  )
  return (
    <>
      <Button
        className="tbhistory-button-giverating"
        onClick={() => settbHistoryButtonRatingDone(true)}
      >
        評價團員
      </Button>{' '}
      <Modal
        size="lg"
        show={tbHistoryButtonRatingDone}
        onHide={() => settbHistoryButtonRatingDone(false)}
        aria-labelledby="tbHistoryButtonRatingDone"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title
              id="tbHistoryButtonRatingDone"
              className="tbhistory-giverating-title"
            >
              評價團員
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="tb-star-rating-done">您已完成評價</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="" className="tbhistory-button-giverating-cancel">
              關閉
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default TBHistoryButtonRatingDone
