import React, { useState } from 'react'
import {
  FaMapMarkerAlt,
  FaCar,
  FaTrain,
  FaWalking,
  FaTimesCircle,
} from 'react-icons/fa'

function SpotsBox({ isEdit, type = 0, title, time1, time2 }) {
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
      <div className="spotsbox-wrapper custom-box-shadow d-flex justify-content-around align-items-center">
        <span className="d-flex align-items-center">
          {typeIcon}
          &emsp; &emsp;
          <h3 className="d-inline">{time1}</h3>
        </span>
        <h4 className="d-inline">{title}</h4>
      </div>
    </>
  )
  return <>{isEdit ? displyEdit : displyConst}</>
}

export default SpotsBox
// 檔案負責人: 柯政安
