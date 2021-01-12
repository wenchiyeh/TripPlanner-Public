import React, { useState, useEffect } from 'react'
// import { Route, Switch, useParams } from 'react-router-dom'
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
    travelBuddies.length > 0 && (
      <>
        <div className="tb-mainpage-wrapper">
          <div className="tb-mainpage-hero-image">
            <img src="/images/member/DSC_7875.jpg" alt="這是圖片" />
          </div>
          <div className="tb-mainpage-condition">
            <div className="d-flex tb-mainpage-icons-group">
              <div className="tb-mainpage-icons-subgroup">
                <IoIosPeople className="tb-mainpage-icons" />
                <div className="tb-mainpage-icons-word">
                  需求{travelBuddies[0].tb_personsNeeded}人
                </div>
              </div>
              <div className="tb-mainpage-icons-subgroup">
                <ImManWoman className="tb-mainpage-icons" />
                <div className="tb-mainpage-icons-word">
                  {travelBuddies[0].tb_genderNeeded}
                </div>
              </div>
              <div className="tb-mainpage-icons-subgroup">
                <MdAttachMoney className="tb-mainpage-icons" />
                <div className="tb-mainpage-icons-word">
                  {travelBuddies[0].tb_estimatedCost}
                </div>
              </div>
            </div>
            <div className="tb-mainpage-lastapproved">
              最後審核時間：
              {travelBuddies.length > 0 &&
                travelBuddies[0].tb_lastApprovedDate.slice(0, 4) +
                  '/' +
                  travelBuddies[0].tb_lastApprovedDate.slice(5, 7) +
                  '/' +
                  travelBuddies[0].tb_lastApprovedDate.slice(8, 10)}
            </div>
          </div>
          <figure>
            <img src="/images/member/DSC_7875.jpg" alt="" />
          </figure>
          <div className="tb-mainpage-owner">
            {travelBuddies.length > 0 && travelBuddies[0].tb_owner}
          </div>
          <div className="d-flex tb-mainpage-label-group">
            {travelBuddies[0].tb_region.split(',').length > 0 &&
              travelBuddies[0].tb_region.split(',').map((v, i) => {
                return (
                  <p className="tb-mainpage-label content-small">
                    <FaMapMarkerAlt />
                    <span>{v}</span>
                  </p>
                )
              })}
            {travelBuddies[0].tb_city.split(',').length > 0 &&
              travelBuddies[0].tb_city.split(',').map((v, i) => {
                return (
                  <p className="tb-mainpage-label content-small">
                    <FaMapMarkerAlt />
                    <span>{v}</span>
                  </p>
                )
              })}
          </div>
          <div className="d-flex tb-mainpage-title">
            <h1> {travelBuddies[0].tb_themeName}</h1>
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
                  <div>
                    {' '}
                    {travelBuddies[0].tb_dateBegin.slice(0, 4) +
                      '/' +
                      travelBuddies[0].tb_dateBegin.slice(5, 7) +
                      '/' +
                      travelBuddies[0].tb_dateBegin.slice(8, 10) +
                      '-' +
                      travelBuddies[0].tb_dateEnd.slice(0, 4) +
                      '/' +
                      travelBuddies[0].tb_dateEnd.slice(5, 7) +
                      '/' +
                      travelBuddies[0].tb_dateEnd.slice(8, 10)}
                  </div>
                </div>
                <div className="d-flex tb-mainpage-date">
                  <AiOutlineClockCircle className="tb-mainpage-maincontent-icons" />
                  <div>{travelBuddies[0].tb_daysCategory}</div>
                </div>
                <div className="tb-mainpage-liked">
                  <TravelBuddiesLiked />
                </div>
              </div>
              <hr />
              <div className="tb-mainpage-intro">
                {travelBuddies[0].tb_themeIntro}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </>
    )
  )
}

export default TravelBuddiesMainPage
