import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './buy-products.scss'

import MyBreadCrumb from '../../../components/main/MyBreadCrumb/MyBreadCrumb'

// icon
import { FiClock } from 'react-icons/fi'
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa'
import { RiSurgicalMaskFill } from 'react-icons/ri'
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineHeart,
  AiTwotoneHeart,
} from 'react-icons/ai'

function BuyProducts({
  earlyTicket,
  singleTicket,
  groupTicket,
  earlyPrice,
  singlePrice,
  groupPrice,
  classPhoto,
  className,
  classDate,
  classTimeStart,
  classTimeEnd,
  location,
  address,
  ticket_type,
  ticket_price,
  warning,
  classValue,
  classOutline,
  teacher_name,
  teacher_title,
  needToKnow,
  teacher_photo,
  teacher_history,
  mapSrc,
}) {
  // 這是modal
  const [smShow, setSmShow] = useState(false)
  const handleShow = () => setSmShow(true)

  // 計數器
  const [early, setEarly] = useState(earlyPrice)
  const [single, setSingle] = useState(singlePrice)
  const [group, setGroup] = useState(groupPrice)

  // 愛心
  const [liked, setLiked] = useState(0)
  const [count, setCount] = useState(48)
  const tbLiked = (value) => {
    if (value === 0) {
      setLiked(1)
      setCount(count + 1)
    } else {
      setLiked(0)
      setCount(count - 1)
    }
  }
  let { product_id } = useParams()

  // 換頁
  let history = useHistory()
  function InTheCar() {
    history.push(`/productList/car1/${product_id}`)
  }
  const pageUrl = '/images/classPhoto/'
  const teacherUrl = '/images/teacher/'

  const dispalyBuy = (
    <>
      <div className="container">
        <MyBreadCrumb />
        {/* 麵包屑 */}
        <figure className="heroPhoto">
          <img src={pageUrl + classPhoto} alt="圖片替代文字" />
        </figure>
        <div className="title">
          <h2>{className}</h2>
          <Button variant="info">收藏</Button>
        </div>
        <div className="buyTheTicket">
          {/* 上半部買票區 */}

          <div className="aboutClass">
            {/* 上半部左邊 資訊區 */}

            <div className="aboutIcon">
              <FiClock />
              <div>
                <p>活動時間</p>
                <p>
                  {classDate} {classTimeStart}-{classTimeEnd}
                </p>
              </div>
            </div>

            <div className="aboutIcon">
              <FaMapMarkerAlt />
              <div>
                <p>活動地點</p>
                <p>{location}</p>
                <p>{address}</p>
              </div>
            </div>

            <div className="aboutIcon">
              <FaDollarSign />

              <div>
                <p>價格</p>
                <div className="ticketAndPrice">
                  <ul>
                    {ticket_type.split('-').map((v, i) => (
                      <li key={i}>{v}</li>
                    ))}
                  </ul>
                  <ul>
                    {ticket_price.split('-').map((v, i) => (
                      <li key={i}>{v}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="aboutIcon">
              <RiSurgicalMaskFill />
              <div className="tag">
                <p>{warning}</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="IWantBuy">
            {/* 上半部右邊選擇區 */}

            <p>{className}</p>
            <div className="clock-time">
              <FiClock />
              <p>
                {classDate} {classTimeStart}-{classTimeEnd}
              </p>
            </div>

            <div className="ticketBuy">
              <p>{earlyTicket}</p>
              <div className="plusAndMinus">
                {early <= 0 ? (
                  <Button
                    variant="light"
                    onClick={() => setEarly(early - 1)}
                    disabled
                  >
                    <AiFillMinusCircle />
                  </Button>
                ) : (
                  <Button variant="light" onClick={() => setEarly(early - 1)}>
                    <AiFillMinusCircle />
                  </Button>
                )}

                <p>{early <= 0 ? 0 : early}</p>
                <Button variant="light" onClick={() => setEarly(early + 1)}>
                  <AiFillPlusCircle />
                </Button>
              </div>
            </div>
            <div className="ticketBuy">
              <p>{singleTicket}</p>
              <div className="plusAndMinus">
                {single <= 0 ? (
                  <Button
                    variant="light"
                    onClick={() => setSingle(single - 1)}
                    disabled
                  >
                    <AiFillMinusCircle />
                  </Button>
                ) : (
                  <Button variant="light" onClick={() => setSingle(single - 1)}>
                    <AiFillMinusCircle />
                  </Button>
                )}
                <p>{single <= 0 ? 0 : single}</p>
                <Button variant="light" onClick={() => setSingle(single + 1)}>
                  <AiFillPlusCircle />
                </Button>
              </div>
            </div>
            <div className="ticketBuy">
              <p>{groupTicket}</p>
              <div className="plusAndMinus">
                {group <= 0 ? (
                  <Button
                    variant="light"
                    onClick={() => setGroup(group - 1)}
                    disabled
                  >
                    <AiFillMinusCircle />
                  </Button>
                ) : (
                  <Button variant="light" onClick={() => setGroup(group - 1)}>
                    <AiFillMinusCircle />
                  </Button>
                )}
                <p>{group <= 0 ? 0 : group}</p>

                <Button variant="light" onClick={() => setGroup(group + 1)}>
                  <AiFillPlusCircle />
                </Button>
              </div>
            </div>
            <div className="buttonAndHeart">
              {/* 上半部右邊下面按鈕 */}

              <Button variant="info" onClick={InTheCar}>
                加入購物車
              </Button>
              <div className="followMyHeart">
                <Button variant="light" onClick={() => tbLiked(liked)}>
                  {liked === 1 ? <AiTwotoneHeart /> : <AiOutlineHeart />}
                </Button>
                <p>{count}</p>
              </div>
            </div>
          </div>
        </div>
        {/* 上半部結束 */}
        <div className="aboutClassDetails">
          <div className="introduction">
            <p className="classTitel">活動介紹</p>
            <p className="calssInside">{classValue}</p>
          </div>
          <div className="introduction">
            <p className="classTitel">活動大綱</p>
            <ul>
              {classOutline.split('-').map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
          <div className="introduction">
            <p className="classTitel">活動資訊</p>
            <ul>
              <li>日期：{classDate}</li>
              <li>
                時間：{classTimeStart}-{classTimeEnd}
              </li>
              <li>地點：{location}</li>
              <li>講師：{teacher_name}</li>
            </ul>
          </div>

          <div className="introduction">
            <p className="classTitel">活動地點－{location}</p>
            <p className="calssInside">地點：{address}</p>
          </div>
          <div className="introduction">
            <p className="classTitel">報名須知</p>

            <ul className="shouldKnow">
              {needToKnow.split('-').map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
          <div className="introduction">
            <p className="classTitel">關於講師</p>
            <Button variant="link" onClick={handleShow}>
              <img src={teacherUrl + teacher_photo} alt="圖片替代文字" />
            </Button>
            <Modal
              size="400x400"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
              className="modalPage"
            >
              <Modal.Header closeButton>
                <Modal.Title
                  id="example-modal-sizes-title-sm"
                  className="modalPhoto"
                >
                  <img src={teacherUrl + teacher_photo} alt="圖片替代文字" />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="nameAndTitle">
                <h1>{teacher_name}</h1>
                <p>{teacher_title}</p>
                <p className="teacher_history">{teacher_history}</p>
              </Modal.Body>
            </Modal>
          </div>
          <hr />
          <div className="introduction">
            <p className="classTitel">活動地圖</p>

            <iframe
              src={mapSrc}
              width="700px"
              height="300px"
              frameBorder="0"
              aria-hidden="false"
              tabIndex="0"
              className="thisIsMap"
              title="Map"
            />
          </div>
        </div>
      </div>
    </>
  )

  return dispalyBuy
}
export default BuyProducts
