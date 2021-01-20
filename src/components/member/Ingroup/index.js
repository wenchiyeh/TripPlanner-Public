//正在參加的揪團
import React, { useState, useEffect } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import './ingroup.scss'
//引入卡片
// let cardData = require('../../Itinerary/testJsonData.json')
// let handleTestData = cardData[2].data
//測試資料可以做成JSON檔之後用這個方式引入

function MeFavoritesgroup() {
  const [metbJoined, setMetbJoined] = useState([])

  async function gettbJoined(props) {
    try {
      const response = await fetch('http://localhost:5000/meFavoritesgroup', {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        setMetbJoined(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }

  useEffect(() => {
    gettbJoined()
  }, [])
  return (
    <>
      {metbJoined.map((e, index) => (
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
                <h3 className="card-title">{e.tb_themeName}</h3>
                <span className="mef-icno-style">
                  <IoMdTime />
                  {e.tb_dateBegin} - {e.tb_dateEnd}
                </span>
                <span className="mef-icno-style d-flex justify-content-between">
                  {/* 地圖位置1 */}
                  <p className="card-style-mef ">
                    <FaMapMarkerAlt />
                    {e.tb_city}
                  </p>
                  {/* <p className="card-style-mef mef-icon-map-move">
                    <FaMapMarkerAlt />
                    {e.tb_city}
                  </p> */}
                  <button className="Ingroup-btn">聊天室</button>
                </span>
                <br />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
export default MeFavoritesgroup
