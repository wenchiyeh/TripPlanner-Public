//正在參加的揪團
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import './ingroup.scss'
//引入卡片
let cardData = require('../../Itinerary/testJsonData.json')
let handleTestData = cardData[2].data
//測試資料可以做成JSON檔之後用這個方式引入

function MeFavoritesgroup({
  data = handleTestData,
  type = 'itinerary',
  title = '台北一日到處遊',
  map1 = '北部', //地區1
  map2 = '桃園', //地區2
}) {
  let display = <></>
  if (type === 'itinerary') {
    display = data.map((element, index) => (
      <div key={index} className="card-ingroup-box mb-3">
        <div className="row no-gutters me-favorites-back-style">
          <div className="col-md-4">
            <img
              // 要放絕對路徑
              src="http://localhost:3000/images/member/DSC_7437-37.jpg"
              className="card-img img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-8 align-items-end">
            <div className="card-body">
              <h3 className="card-title">{element.title}</h3>
              <span className="mef-icno-style">
                <IoMdTime />
                {element.establish_time} - {element.publish_time}
              </span>
              <span className="mef-icno-style d-flex justify-content-between">
                {/* 地圖位置1 */}
                <p className="card-style-mef ">
                  <FaMapMarkerAlt />
                  {map1}
                </p>
                <p className="card-style-mef mef-icon-map-move">
                  <FaMapMarkerAlt />
                  {map2}
                </p>
                <button className="Ingroup-btn">聊天室</button>
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    ))
  }

  return <>{display}</>
}
export default MeFavoritesgroup
