//正在參加的揪團
import React from 'react'
import { FaMapMarkerAlt, FaUsers, FaRegCalendarCheck } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import './ingroup.scss'
function MeFavoritesgroup({
  title = '揪團蔥油餅吃到飽之旅台灣蔥油餅', //標題
  image, //圖片的檔名與附檔名ex: 'testImage.jpg'
  time1 = '2020/01/01', //第一個日期
  time2 = '2020/01/01', //第二個日期
  map1 = '北部', //地區1
  map2 = '桃園', //地區2
  duration = '3', //天數
  person = '小智', //卡片內顯示的人名
}) {
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters me-favorites-back-style">
          <div className="col-md-4">
            <img
              // 要放絕對路徑
              src="http://localhost:3000/images/DSC_7437-37.jpg"
              className="card-img img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-8 align-items-end">
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <span className="mef-icno-style">
                <IoMdTime />
                {time1} - {time2}
              </span>
              <span className="mef-icno-style d-flex justify-content-between">
                {/* 地圖位置1 */}
                <p className="card-style-mef ">
                  <FaMapMarkerAlt />
                  {map1}
                </p>
                <p className="card-style-mef">
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
    </>
  )
}
export default MeFavoritesgroup
