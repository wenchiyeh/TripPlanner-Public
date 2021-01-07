import React from 'react'
import { FaMapMarkerAlt, FaTimesCircle } from 'react-icons/fa' //  FaCar,FaTrain,FaWalking,

let testData = {
  order: 0,
  type: 0,
  title: '測試標題可以幾個字',
  time: '0900',
  lat: 24.96517,
  lng: 121.19192,
  image: '',
  info: '',
}

function SpotsBox({ isEdit, data = testData }) {
  const { type, title, time, ...otherData } = data
  const typeIcon = <FaMapMarkerAlt size={26} />
  const displyEdit = (
    <>
      <div className="spotsbox-wrapper custom-box-shadow d-flex justify-content-between align-items-center">
        <span className="spotsbox-type">{typeIcon}</span>
        <span className="spotsbox-content">
          <input className="box-input-time" type="time" />
          <input
            className="box-input-title"
            type="text"
            value={title}
            maxLength="12"
          />
        </span>
        <span className="box-close-btn">
          <FaTimesCircle size={20} />
        </span>
      </div>
    </>
  )
  const displyConst = (
    <>
      <div className="spotsbox-wrapper custom-box-shadow d-flex justify-content-between align-items-center">
        <span className="d-flex align-items-center">
          {typeIcon}
          &emsp; &emsp;
          <h3 className="d-inline">{time}</h3>
        </span>
        <span className="w-100 text-center">
          <h4 className="d-inline">{title}</h4>
        </span>
      </div>
    </>
  )
  return <>{isEdit ? displyEdit : displyConst}</>
}

export default SpotsBox
// 檔案負責人: 柯政安
