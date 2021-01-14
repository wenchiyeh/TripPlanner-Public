import React from 'react'
import {
  FaMapMarkerAlt,
  FaRegCalendarCheck,
  FaRegClock,
  FaEye,
} from 'react-icons/fa'
function ItinEditorBasicData({
  isEdit = false,
  isPublish = true,
  memberName = 'testName',
  avatar = 'testImage.jpg',
  area = '北部',
  town = '台北',
  tag = ['1', '2'],
  time = '2020-08-07 08:57',
  view = 8700,
  like = 12345,
}) {
  const headData = (
    <div className="itin-basic-headdata d-flex justify-content-between align-items-center w-100 my-1">
      <span>
        <FaRegCalendarCheck />
        &emsp;
        {time.substr(0, 10).replace(/-/g, '/')}
      </span>
      <span>
        <FaRegClock />
        &emsp;
        {time.substr(11)}
      </span>
      <span>
        <FaEye />
        &emsp;
        {view}
      </span>
    </div>
  )
  return (
    <div className="itin-BasicData-wapper">
      <div className="itin-BasicData-head d-flex justify-content-between">
        <figure className="itin-BasicData-avatar">
          <img src={`/images/${avatar}`} alt={memberName} />
        </figure>
        <div className="w-100 d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-center w-100 my-1">
            <h4 className="itin-BasicData-member">{memberName}</h4>
            <div className="itin-BasicData-area">
              <p className="itin-BasicData-label content-small">
                <FaMapMarkerAlt />
                <span> {area}</span>
              </p>
              <p className="itin-BasicData-label content-small">
                <FaMapMarkerAlt />
                <span> {town}</span>
              </p>
            </div>
          </div>
          {!isEdit && headData}
        </div>
      </div>
      <hr />
      {isEdit && <textarea placeholder="行程簡介" />}
    </div>
  )
}

export default ItinEditorBasicData
