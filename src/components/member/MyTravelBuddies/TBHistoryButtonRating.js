import React, { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function TBHistoryButtonRating(props) {
  const [tbHistoryButtonRating, settbHistoryButtonRating] = useState(false)
  const [rating, setRating] = useState(0)
  console.log(rating)
  const [hover, setHover] = useState(0)
  const tb_id = props.id
  async function getStarRating() {
    try {
      const response = await fetch(
        `http://localhost:5000/travelbuddies/tbrating/${tb_id}`,
        {
          method: 'get',
        }
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setRating(Math.round(data[0].rating))
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getStarRating()
  }, [])
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
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1
                return (
                  <button
                    type="button"
                    key={index}
                    className={
                      index <= (hover || rating) ? 'starOn' : 'starOff'
                    }
                    // onClick={() => setRating(index)}
                    // onMouseEnter={() => setHover(index)}
                    // onMouseLeave={() => setHover(rating)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                )
              })}
            </div>
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
