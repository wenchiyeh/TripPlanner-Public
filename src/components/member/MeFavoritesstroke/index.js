//我的收藏行程
import React, { useState, useEffect } from 'react'
import { FaMapMarkerAlt, FaUsers, FaRegCalendarCheck } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
//引入卡片
// let cardData = require('../../Itinerary/testJsonData.json')
// let handleTestData = cardData[2].data

function MeFavoritesstroke({
  // data = handleTestData,
  // type = 'itinerary',
  // title = '行程蔥油餅吃到飽之旅行程蔥油餅', //標題
  // image, //圖片的檔名與附檔名ex: 'testImage.jpg'
  time1 = '2020/01/01', //第一個日期
  time2 = '2020/01/01', //第二個日期
  map1 = '北部', //地區1
  map2 = '桃園', //地區2
  duration = '3', //天數
  person = '小智', //卡片內顯示的人名
}) {
  const [meitinerary, setMeitinerary] = useState([])

  async function getProductCard(props) {
    try {
      const response = await fetch('http://localhost:5000/itinerary', {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        setMeitinerary(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getProductCard()
  }, [])

  return (
    <>
      {meitinerary.map((element, index) => (
        <div key={index} className="card-ingroup-box mb-3">
          <div className="row no-gutters me-favorites-back-style">
            <div className="col-md-4">
              <img
                // 要放絕對路徑
                src={'/images/' + element.image}
                className="card-img img-fluid"
                alt="..."
              />
            </div>
            <div className="col-md-8 align-items-end">
              <div className="card-body">
                <h3 className="card-title">{element.title}</h3>
                <span className="mef-icno-style">
                  <IoMdTime />
                  {element.publish_time} - {element.publish_time}
                </span>
                <span className="mef-icno-style d-flex justify-content-between">
                  {/* 地圖位置1 */}
                  <p className="card-style-mef ">
                    <FaMapMarkerAlt />
                    {element.location}
                  </p>
                  {/* <p className="card-style-mef">
                    <FaMapMarkerAlt />
                    {element.region}
                  </p> */}
                  <FaUsers />
                  &emsp;
                  {element.nickname}
                  &emsp;&emsp;
                  <FaRegCalendarCheck />
                  &emsp;
                  {duration + '天'}
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
export default MeFavoritesstroke
