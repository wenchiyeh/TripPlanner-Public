import React, { useState, useEffect } from 'react'
import MyBreadCrumb from '../../components/main/MyBreadCrumb/MyBreadCrumb'
import './buy-products.scss'
import { FiClock } from 'react-icons/fi'
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa'
import { RiSurgicalMaskFill } from 'react-icons/ri'

import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineHeart,
} from 'react-icons/ai'
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function BuyProducts() {
  let { id } = useParams()

  //資料庫
  const [buyClass, setBuyClass] = useState([])
  async function getBuyClass(props) {
    try {
      const response = await fetch('http://localhost:5000/productList', {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        setBuyClass(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getBuyClass()
  }, [])

  // 這是modal
  const [smShow, setSmShow] = useState(false)
  const handleShow = () => setSmShow(true)

  // 計數器
  const [early, setEarly] = useState(1)
  const [single, setSingle] = useState(1)
  const [group, setGroup] = useState(1)

  // 換頁
  let history = useHistory()

  const pageUrl = '/images/classPhoto/'
  const teacherUrl = '/images/teacher/'
  function InTheCar() {
    history.push('/shoppingcar/1')
  }

  return (
    buyClass.length > 0 && (
      <>
        <div className="container">
          <MyBreadCrumb />
          {/* 麵包屑 */}
          <figure className="heroPhoto">
            <img src={pageUrl + buyClass[id].classPhoto} alt="圖片替代文字" />
          </figure>
          <div className="title">
            <h2>{buyClass[id].className}</h2>
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
                    {buyClass[id].classDate} {buyClass[id].classTimeStart}-
                    {buyClass[id].classTimeEnd}
                  </p>
                </div>
              </div>

              <div className="aboutIcon">
                <FaMapMarkerAlt />
                <div>
                  <p>活動地點</p>
                  <p>{buyClass[id].location}</p>
                  <p>{buyClass[id].address}</p>
                </div>
              </div>

              <div className="aboutIcon">
                <FaDollarSign />

                <div>
                  <p>價格</p>
                  <div className="ticketAndPrice">
                    <ul>
                      {buyClass[id].ticket_type.split('-').map((v, i) => (
                        <li>{v}</li>
                      ))}
                    </ul>
                    <ul>
                      {buyClass[id].ticket_price.split('-').map((v, i) => (
                        <li>{v}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="aboutIcon">
                <RiSurgicalMaskFill />
                <div className="tag">
                  <p>{buyClass[id].warning}</p>

                  {/*  <p>標籤:</p>
                  <Button variant="light">這是七個字字字</Button>
                  <Button variant="light">這是四字</Button>
                  <Button variant="light">是二</Button>*/}
                </div>
              </div>
              <hr />
            </div>

            <div className="IWantBuy">
              {/* 上半部右邊選擇區 */}

              <p>{buyClass[id].className}</p>
              <div className="clock-time">
                <FiClock />
                <p>
                  {buyClass[id].classDate} {buyClass[id].classTimeStart}-
                  {buyClass[id].classTimeEnd}
                </p>
              </div>

              <div className="ticketBuy">
                <p>早鳥票</p>
                <div className="plusAndMinus">
                  <Button variant="light" onClick={() => setEarly(early - 1)}>
                    <AiFillMinusCircle />
                  </Button>
                  <p>{early}</p>
                  <Button variant="light" onClick={() => setEarly(early + 1)}>
                    <AiFillPlusCircle />
                  </Button>
                </div>
              </div>
              <div className="ticketBuy">
                <p>單人票</p>
                <div className="plusAndMinus">
                  <Button variant="light" onClick={() => setSingle(single - 1)}>
                    <AiFillMinusCircle />
                  </Button>
                  <p>{single}</p>
                  <Button variant="light" onClick={() => setSingle(single + 1)}>
                    <AiFillPlusCircle />
                  </Button>
                </div>
              </div>
              <div className="ticketBuy">
                <p>雙人票</p>
                <div className="plusAndMinus">
                  <Button variant="light" onClick={() => setGroup(group - 1)}>
                    <AiFillMinusCircle />
                  </Button>
                  <p>{group}</p>
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
                  <Button variant="light">
                    <AiOutlineHeart />
                  </Button>
                  <p>12345</p>
                </div>
              </div>
            </div>
          </div>
          {/* 上半部結束 */}
          <div className="aboutClassDetails">
            <div className="introduction">
              <p className="classTitel">活動介紹</p>
              <p className="calssInside">{buyClass[id].classValue}</p>
            </div>
            <div className="introduction">
              <p className="classTitel">活動大綱</p>
              <ul>
                {buyClass[id].classOutline.split('-').map((v, i) => (
                  <li>{v}</li>
                ))}
              </ul>
            </div>
            <div className="introduction">
              <p className="classTitel">活動資訊</p>
              <ul>
                <li>日期：{buyClass[id].classDate}</li>
                <li>
                  時間：{buyClass[id].classTimeStart}-
                  {buyClass[id].classTimeEnd}
                </li>
                <li>地點：{buyClass[id].location}</li>
                <li>講師：{buyClass[id].teacher_name}</li>
              </ul>
            </div>

            <div className="introduction">
              <p className="classTitel">活動地點－{buyClass[id].location}</p>
              <p className="calssInside">地點：{buyClass[id].address}</p>
            </div>
            <div className="introduction">
              <p className="classTitel">報名須知</p>

              <ul className="shouldKnow">
                {buyClass[id].needToKnow.split('-').map((v, i) => (
                  <li>{v}</li>
                ))}
              </ul>
            </div>
            <div className="introduction">
              <p className="classTitel">關於講師</p>
              <Button variant="link" onClick={handleShow}>
                <img
                  src={teacherUrl + buyClass[id].teacher_photo}
                  alt="圖片替代文字"
                />
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
                    <img
                      src={teacherUrl + buyClass[id].teacher_photo}
                      alt="圖片替代文字"
                    />
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="nameAndTitle">
                  <h1>{buyClass[id].teacher_name}</h1>
                  <p>{buyClass[id].teacher_title}</p>
                  <p className="teacher_history">
                    {buyClass[id].teacher_history}
                  </p>
                </Modal.Body>
              </Modal>
            </div>
            <hr />
            <div className="introduction">
              <p className="classTitel">活動地圖</p>

              <iframe
                src={buyClass[id].mapSrc}
                width="700px"
                height="300px"
                frameborder="0"
                aria-hidden="false"
                tabindex="0"
                className="thisIsMap"
                title="Map"
              />
            </div>
          </div>
        </div>
      </>
    )
  )
}
export default BuyProducts
