import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FiMapPin } from 'react-icons/fi'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
function HomeP2scoll(props) {
  let history = useHistory()
  function travelBuddies(data) {
    history.push(`/travelBuddies?${data}`)
  }

  return (
    <>
      <div className="p2-scoll1">
        <div class="parallax2">
          <div class="bg2 ">
            <div className="P2scoll-backgroumd"></div>
            <div
              className="row justify-content-around "
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="350"
            >
              <div className="p2-scoll1-txt col-6   ">
                <div className="row justify-content-around">
                  <div className="col-7.2">
                    <h1>和附近朋友一起揪團旅行</h1>
                  </div>
                  <div className="col-2 ">
                    <hr data-aos="flip-left" data-aos-delay="900" />
                  </div>
                  <div
                    className="col-1.2"
                    data-aos="zoom-in-down"
                    data-aos-delay="1500"
                  >
                    <FiMapPin className="p2-icon  " />
                  </div>
                </div>
                <h4 className="p2-scoll1-h4">
                  當生活覺得煩悶、缺少一些感動、對工作熱情不再...那就來場愉快的自助旅行吧！馬上揪個好伙伴，來場翻轉心情的冒險之旅！
                </h4>
                <div className="row justify-content-around">
                  <button
                    onClick={() => {
                      let mapstory = props.mapstory
                      travelBuddies(JSON.stringify(mapstory))
                    }}
                    className="Homebtn2"
                  >
                    <h4>尋找附近揪團</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomeP2scoll
