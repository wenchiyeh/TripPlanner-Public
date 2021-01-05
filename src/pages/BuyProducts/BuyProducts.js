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

function BuyProducts() {
  return (
    <>
      <div className="container">
        <MyBreadCrumb />
        <figure className="heroPhoto">
          <img src="http://localhost:3000/images/classPhoto/IMAG7028.jpg" />
        </figure>
        <h2>雪季登山安全與準備 | 登山新手村 - 拼圖戶外生活</h2>
        <div className="aboutClass">
          <div>
            <FiClock />
            <p>活動時間</p>
            <p>2020-12-29(二) 19:00 ~ 21:00</p>
          </div>

          <div>
            <FaMapMarkerAlt />
            <p>活動地點</p>
            <p>台灣台北市登山補給站</p>
            <p>捷運龍山寺站3號出口 步行3分鐘</p>
          </div>

          <div>
            <FaDollarSign />
            <p>價格</p>
            <p>單人票:</p>
            <p>雙人票:</p>
          </div>

          <div>
            <FaTag />
            <p>標籤:</p>
          </div>
        </div>

        <div>
          <AiFillPlusCircle />
          <AiFillMinusCircle />
          <AiOutlineHeart />
          <FiClock />
        </div>
      </div>
    </>
  )
}
export default BuyProducts
