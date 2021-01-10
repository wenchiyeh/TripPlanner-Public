import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { MdAttachMoney } from 'react-icons/md'
import { BiCalendarCheck } from 'react-icons/bi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { ImManWoman } from 'react-icons/im'
import { IoIosPeople } from 'react-icons/io'
import { FaMapMarkerAlt } from 'react-icons/fa'

import TravelBuddiesLiked from '../components/TravelBuddies/TravelBuddiesLiked'

function TravelBuddiesMainPage() {
  const [travelBuddies, setTravelBuddies] = useState([])
  async function getTravelBuddies(props) {
    try {
      const response = await fetch('http://localhost:5000/travelbuddies', {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        setTravelBuddies(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getTravelBuddies()
  }, [])
  return (
    <>
      <div className="tb-mainpage-wrapper">
        <div className="tb-mainpage-hero-image">
          <img src="http://localhost:3000/images/member/DSC_7875.jpg" />
        </div>
        <div className="tb-mainpage-condition">
          <div className="d-flex tb-mainpage-icons-group">
            <div className="tb-mainpage-icons-subgroup">
              <IoIosPeople className="tb-mainpage-icons" />
              <div className="tb-mainpage-icons-word">需求3人</div>
            </div>
            <div className="tb-mainpage-icons-subgroup">
              <ImManWoman className="tb-mainpage-icons" />
              <div className="tb-mainpage-icons-word">男女皆可</div>
            </div>
            <div className="tb-mainpage-icons-subgroup">
              <MdAttachMoney className="tb-mainpage-icons" />
              <div className="tb-mainpage-icons-word">5000</div>
            </div>
          </div>
          <div className="tb-mainpage-lastapproved">
            最後審核時間：2021/02/01
          </div>
        </div>
        <figure>
          <img src="http://localhost:3000/images/member/DSC_7875.jpg" alt="" />
        </figure>
        <div className="tb-mainpage-owner">Rayyyyyyyy</div>
        <div className="d-flex tb-mainpage-label-group">
          <p className="tb-mainpage-label content-small">
            <FaMapMarkerAlt />
            <span>北部</span>
          </p>
          <p className="tb-mainpage-label content-small">
            <FaMapMarkerAlt />
            <span>台北市</span>
          </p>
        </div>
        <div className="d-flex tb-mainpage-title">
          <h1>台灣西部好好玩！南投彰化雲林嘉義秘境行五日</h1>
          <div className="tb-mainpage-button-group">
            <Button className="tb-mainpage-button">報名</Button>
            <Button className="tb-mainpage-button">收藏</Button>
          </div>
        </div>
        <div className="tb-mainpage-tag-group d-flex">
          <div className="tb-mainpage-tag">台灣西部</div>
          <div className="tb-mainpage-tag">彰化花海</div>
          <div className="tb-mainpage-tag">網美景點</div>
        </div>
        <div className="tb-mainpage-maincontent-wrapper">
          <div className="tb-mainpage-maincontent">
            <div className="d-flex tb-mainpage-dategroup">
              <div className="d-flex tb-mainpage-date">
                <BiCalendarCheck className="tb-mainpage-maincontent-icons" />
                <div>2021/02/11 - 2021/02/15</div>
              </div>
              <div className="d-flex tb-mainpage-date">
                <AiOutlineClockCircle className="tb-mainpage-maincontent-icons" />
                <div>5-6日遊</div>
              </div>
              <div className="tb-mainpage-liked">
                <TravelBuddiesLiked />
              </div>
            </div>
            <hr />
            <div className="tb-mainpage-intro">
              【花蓮理想大地渡假飯店】榮獲世界百大飯店美名！！全區西班牙高第式建築客房，完全環繞運河網路打造，讓您在原木、鍛鐵、青銅、板岩、陶磚的濃濃的人文氣息中，感受更多未知而美好的生活事物。以「運河、人文、休閒」為概念的花蓮理想大地渡假飯店，讓你盡享慢活渡假之旅
              ～
              花蓮是臺灣最大的縣份，面積約4,628平方公里，人口約有35萬人，東臨浩瀚太平洋，西倚雄偉的中央山脈，以巍峨的高山、蔚藍的天空、浩瀚的海洋、景色秀麗的縱谷、多樣性的人文風貌、親切善良的人民，成為全國最喜歡旅遊縣市的首選，並深受國際遊客的喜愛。
            </div>
            {travelBuddies.length > 0 &&
              travelBuddies.map((v, i) => {
                return (
                  <table className="table">
                    <tbody>
                      <tr key={i}>
                        <td key={i + v}>{v.tb_themeName}</td>
                      </tr>
                    </tbody>
                  </table>
                )
              })}
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}

export default TravelBuddiesMainPage
