import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaTimesCircle } from 'react-icons/fa' //  FaCar,FaTrain,FaWalking,
import { debounce } from 'lodash'
//利用debounce來避免敏感的onchange
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

function SpotsBox({
  isEdit = false,
  data = testData,
  index,
  doEdit = () => {},
  allData,
}) {
  const { type, title, time, ...otherData } = data
  const tempData = allData
  function handleTime(time) {
    if (time.length === 4) {
      let temp = Array.from(time)
      temp.splice(2, 0, ':')
      return temp.join('')
    } else {
      return time
    }
  }
  const inputTimeClass = `box-input-time time${index[0]}${index[1]}`
  const inputTitleClass = `box-input-title input${index[0]}${index[1]}`
  useEffect(() => {
    if (isEdit) {
      if (
        document.querySelector(`.input${index[0]}${index[1]}`).value ===
          tempData[index[0]].data[index[1]].title &&
        document.querySelector(`.time${index[0]}${index[1]}`).value ===
          handleTime(tempData[index[0]].data[index[1]].time)
      ) {
        return
      } else {
        document.querySelector(`.input${index[0]}${index[1]}`).value =
          tempData[index[0]].data[index[1]].title
        document.querySelector(
          `.time${index[0]}${index[1]}`
        ).value = handleTime(tempData[index[0]].data[index[1]].time)
      }
    }
  }, [tempData])

  const typeIcon = <FaMapMarkerAlt size={26} />
  const displyEdit = (
    <>
      <div className="spotsbox-wrapper custom-box-shadow d-flex justify-content-between align-items-center">
        <span className="spotsbox-type">{typeIcon}</span>
        <span className="spotsbox-content">
          <input
            className={inputTimeClass}
            type="time"
            onChange={(e) => {
              tempData[index[0]].data[index[1]].time = e.target.value
              doEdit(tempData)
            }}
          />
          <input
            className={inputTitleClass}
            type="text"
            maxLength="12"
            onChange={(e) => {
              tempData[index[0]].data[index[1]].title = e.target.value
              doEdit(tempData)
            }}
          />
        </span>
        <span
          className="box-close-btn"
          onClick={() => {
            console.log('delete!')
          }}
        >
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
