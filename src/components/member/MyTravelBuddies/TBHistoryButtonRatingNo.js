import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function TBHistoryButtonRatingNo() {
  const [tbHistoryButtonRatingNo, settbHistoryButtonRatingNo] = useState(false)
  return (
    <>
      <Button
        className="tbhistory-button-rating"
        onClick={() => settbHistoryButtonRatingNo(true)}
      >
        評價團員
      </Button>{' '}
      <Modal
        size="lg"
        show={tbHistoryButtonRatingNo}
        onHide={() => settbHistoryButtonRatingNo(false)}
        aria-labelledby="tbHistoryButtonRatingNo"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title
              id="tbHistoryButtonRatingNo"
              className="tbhistory-rating-title"
            >
              查看本次旅行揪團收到的評價
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="tb-star-rating-no">您尚未收到任何評價</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="" className="tbhistory-button-rating-close">
              關閉
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default TBHistoryButtonRatingNo
