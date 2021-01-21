import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'
import { Button, Modal, Form } from 'react-bootstrap'

function TBButtonGiveStar(props) {
  let memberName = props.memberName
  const [tbGiveStar, settbGiveStar] = useState(false)
  const [doGiveStar, setDoGiveStart] = useState(0)
  const [rating, setRating] = useState(0)
  console.log(rating)
  const [hover, setHover] = useState(0)
  const tb_id = props.tb_id
  const m_id = props.m_id
  async function giveStarRating(props) {
    const newSignedUp = {
      tb_id,
      m_id,
      rating,
    }
    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await fetch(
        'http://localhost:5000/travelbuddies/tbrating/',
        {
          method: 'post',
          body: JSON.stringify(newSignedUp),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )

      // ok只能判斷201-299狀態碼的情況
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }
  return (
    <>
      {doGiveStar === 0 ? (
        <Button
          className="tb-mainpage-button"
          onClick={() => settbGiveStar(true)}
        >
          評價
        </Button>
      ) : (
        <Button className="tb-mainpage-button">已評分</Button>
      )}
      <Modal
        size=""
        show={tbGiveStar}
        onHide={() => settbGiveStar(false)}
        aria-labelledby="tbGiveStar"
      >
        <div>
          <Modal.Header closeButton>
            <Modal.Title id="tbGiveStar" className="tbmine-delete-title">
              評價團員
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>{memberName}</div>
            <br />
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
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                )
              })}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="" className="tbmine-button-delete-cancel">
              取消
            </Button>
            <Button
              variant=""
              className="tbmine-button-delete-confirm"
              onClick={() => {
                setDoGiveStart(1)
                giveStarRating()
              }}
              type="button"
            >
              確定
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  )
}

export default TBButtonGiveStar
