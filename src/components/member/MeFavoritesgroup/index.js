//我的揪團
import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaUsers, FaRegCalendarCheck } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'

// let cardData = require('../../Itinerary/testJsonData.json')
// let handleTestData = cardData[2].data

function MeFavoritesgroup({
  map1 = '北部',
  map2 = '台北',
  groupname = '王華旺',
  datatime = '1',
}) {
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
      {metbJoined.map((v, index) => (
        <div key={index} className="card-ingroup-box mb-3">
          <div className="row no-gutters me-favorites-back-style">
            <div className="col-md-4">
              <img
                // 要放絕對路徑
                src={'/images/tbPhoto/' + v.tb_themePhoto}
                className="card-img img-fluid"
                alt={v.tb_themePhoto}
              />
            </div>
            <div className="col-md-8 align-items-end">
              <div className="card-body">
                <h3 className="card-title">{v.tb_themeName}</h3>
                <span className="mef-icno-style">
                  <IoMdTime />
                  {v.tb_dateBegin} - {v.tb_dateEnd}
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
                  <FaUsers />
                  &emsp;
                  {groupname} &emsp;&emsp;
                  <FaRegCalendarCheck />
                  &emsp;
                  {datatime + '天'}
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
