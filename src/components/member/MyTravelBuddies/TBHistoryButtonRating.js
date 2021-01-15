import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import TBStarRating from './TBStarRating'

function TBHistoryButtonRating() {
  const [tbHistoryButtonRating, settbHistoryButtonRating] = useState(false)
  return (
    <>
      <Button
        className="tbhistory-button-rating"
        onClick={() => settbHistoryButtonRating(true)}
      >
        查看評價
      </Button>{' '}
      <Modal
        size="lg"
        show={tbHistoryButtonRating}
        onHide={() => settbHistoryButtonRating(false)}
        aria-labelledby="tbHistoryButtonRating"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title
              id="tbHistoryButtonRating"
              className="tbhistory-rating-title"
            >
              查看本次旅行揪團收到的評價
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5 className="tb-star-rating-got">2人已評價，1人尚未評價</h5>
            <TBStarRating />
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

export default TBHistoryButtonRating
