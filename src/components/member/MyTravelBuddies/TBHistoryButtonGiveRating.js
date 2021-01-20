import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import TBGiveStarRating from './TBGiveStarRating'
import TBGiveStarRating3 from './TBStarRating3'

function TBHistoryButtonGiveRating(props) {
  const [tbHistoryGiveRating, settbHistoryGiveRating] = useState(false)
  let tb_id = props.id
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
          <Modal.Body className="d-flex">
            <TBGiveStarRating3 id={tb_id} />
          </Modal.Body>
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
