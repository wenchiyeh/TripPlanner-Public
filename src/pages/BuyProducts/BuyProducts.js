import React from 'react'
import MyBreadCrumb from '../../components/main/MyBreadCrumb'
import './buy-products.scss'
import { FiClock } from 'react-icons/fi'
import { FaMapMarkerAlt, FaDollarSign, FaTag } from 'react-icons/fa'
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineHeart,
} from 'react-icons/ai'
import Button from 'react-bootstrap/Button'

function BuyProducts() {
  return (
    <>
      <div className="container">
        <MyBreadCrumb />
        <figure className="heroPhoto">
          <img src="http://localhost:3000/images/classPhoto/IMAG7028.jpg" />
        </figure>
        <div className="title">
          <h2>雪季登山安全與準備 | 登山新手村 - 拼圖戶外生活</h2>
          <Button variant="info">收藏</Button>
        </div>
        <div className="buyTheTicket">
          <div className="aboutClass">
            <div className="aboutIcon">
              <FiClock />
              <div>
                <p>活動時間</p>
                <p>2020-12-29(二) 19:00 ~ 21:00</p>
              </div>
            </div>

            <div className="aboutIcon">
              <FaMapMarkerAlt />
              <div>
                <p>活動地點</p>
                <p>台灣台北市登山補給站</p>
                <p>捷運龍山寺站3號出口 步行3分鐘</p>
              </div>
            </div>

            <div className="aboutIcon">
              <FaDollarSign />
              <div>
                <p>價格</p>
                <p>單人票: 1200</p>
                <p>雙人票: 2000</p>
              </div>
            </div>

            <div className="aboutIcon">
              <FaTag />
              <div className="tag">
                <p>標籤:</p>
                <Button variant="light">這是七個字字字</Button>
                <Button variant="light">這是四字</Button>
                <Button variant="light">是二</Button>
              </div>
            </div>
            <hr />
          </div>

          <div className="IWantBuy">
            <p>雪季登山安全與準備 | 登山新手村 - 拼圖戶外生活</p>
            <div className="clock-time">
              <FiClock />
              <p>2020-12-29(二) 19:00 ~ 21:00</p>
            </div>

            <div className="ticketBuy">
              <p>早鳥票</p>
              <div className="plusAndMinus">
                <Button variant="light">
                  <AiFillMinusCircle />
                </Button>
                <p>1</p>
                <Button variant="light">
                  <AiFillPlusCircle />
                </Button>
              </div>
            </div>
            <div className="ticketBuy">
              <p>單人票</p>
              <div className="plusAndMinus">
                <Button variant="light">
                  <AiFillMinusCircle />
                </Button>{' '}
                <p>1</p>
                <Button variant="light">
                  <AiFillPlusCircle />
                </Button>
              </div>
            </div>
            <div className="ticketBuy">
              <p>雙人票</p>
              <div className="plusAndMinus">
                <Button variant="light">
                  <AiFillMinusCircle />
                </Button>
                <p>1</p>
                <Button variant="light">
                  <AiFillPlusCircle />
                </Button>
              </div>
            </div>
            <div className="buttonAndHeart">
              <Button variant="info">加入購物車</Button>
              <div className="followMyHeart">
                <Button variant="light">
                  <AiOutlineHeart />
                </Button>
                <p>12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BuyProducts
