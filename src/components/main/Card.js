//卡片元件
//除日期頭尾、天數、價格以外之屬性必填
//
import React, { useState } from 'react'
import StrCutter from './StrCutter'
import {
  FaMapMarkerAlt,
  FaUsers,
  FaRegCalendarCheck,
  FaDollarSign,
  FaHeart,
  FaRegBookmark,
} from 'react-icons/fa'

function Card(props) {
  const {
    id, //供連結用
    title, //標題
    text, //內文
    location, //左上角的地標
    image, //圖片的檔名與附檔名ex: 'testImage.jpg'
    time1 = -1, //第一個日期
    time2 = -1, //第二個日期
    duration = -1, //天數
    price = -1, //價格
    person, //卡片內顯示的人名
    like, //愛心人數
    setLike, //控制愛心狀態
    mark, //收藏人數
    setMark, //控制收藏狀態
  } = props
  const imagePath = './images/' + image
  const [nowLike, setNowLike] = useState(like)
  const [nowMark, setNowMark] = useState(mark)
  let handelTitle = StrCutter(title, 15)
  let handelText = StrCutter(text, 62)
  return (
    <>
      <div className="card-wrapper">
        <p className="card-label content-small">
          <FaMapMarkerAlt />
          <span> {location}</span>
        </p>
        <figure className="card-figure">
          <img className="card-image" alt={title} src={imagePath} />
        </figure>
        <div className="card-content">
          <p className="content-small">
            {time1 !== -1 && time1}
            {time1 !== -1 && time2 !== -1 && ' - ' + time2}
          </p>
          <h4>{handelTitle}</h4>
          <p className="content-small card-text">{text !== -1 && handelText}</p>
        </div>
        <p className="card-info content-small d-flex justify-content-between">
          <span>
            <FaUsers />
            &emsp;
            {person}
            &emsp;&emsp;
            <FaRegCalendarCheck />
            &emsp;
            {duration !== -1 && duration + '天'}
            {price !== -1 && <FaDollarSign /> + price}
          </span>

          <a className="card-detail" href="./">
            詳細 &gt;
          </a>
        </p>
        <div className="buttonWrap d-flex">
          <div role="button" className="card-button">
            <p>
              <FaHeart />
              &emsp;
              {nowLike}
            </p>
          </div>
          <div className="card-slice"></div>
          <div role="button" className="card-button">
            <p>
              <FaRegBookmark />
              &emsp;
              {nowMark}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
// 檔案負責人: 柯政安
