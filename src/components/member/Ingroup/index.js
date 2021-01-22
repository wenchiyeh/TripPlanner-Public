//正在參加的揪團
import React, { useState, useEffect } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import './ingroup.scss'
import { Link } from 'react-router-dom'

function MeFavoritesgroup({
  id = 1, //資料的id
  time1 = -1, //第一個日期
  time2 = -1, //第二個日期
  price = -1, //價格
}) {
  const [metbJoined, setMetbJoined] = useState([])
  let type = 'travelBuddies'
  if (time1 === -1) {
    type = 'travelBuddies'
  } else if (time2 !== -1) {
    type = 'travelBuddies'
    // 改
  } else if (price !== -1) {
    type = 'travelBuddies'
  }
  let detailUrl = `/${type}/view/${id}`
  async function gettbJoined(props) {
    try {
      const response = await fetch(
        `http://localhost:5000/travelBuddies/${id}`,
        {
          method: 'get',
        }
      )
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

  const display = { display: 'none' }
  return (
    <>
      {metbJoined.map((e, index) => (
        <div key={index} className="card-ingroup-box mb-3">
          <div className="row no-gutters me-favorites-back-style">
            <div className="col-md-4">
              <Link to={detailUrl}>
                <img
                  src={'/images/tbPhoto/' + e.tb_themePhoto}
                  className="card-img img-fluid"
                  alt={e.tb_themePhoto}
                />
              </Link>
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
                    {e.tb_region}
                  </p>
                  <p className="card-style-mef mef-icon-map-move">
                    <FaMapMarkerAlt />
                    {e.tb_city}
                  </p>
                  <button className="Ingroup-btn">聊天室</button>
                  <button
                    className="Ingroup-btn"
                    onChange={() => {
                      display()
                    }}
                  >
                    取消
                  </button>
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
