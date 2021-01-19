import React from 'react'
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'
import TaiwanMap from './TaiwanMap'

import HomeSearchBar from './HomeSearchBar'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
// import useAxios from 'axios-hooks'
import Geocode from 'react-geocode'

scroll.scrollToTop()
scroller.scrollTo('scroll-to-element', {
  duration: 800,
  delay: 0,
  smooth: 'easeInOutQuart',
})
function Kv(props) {
  // const [{ data }] = useAxios(
  //   'https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-D0047-091?Authorization=CWB-CE3C77E2-B7C4-49F4-AE97-3E3F5E40BEAE&downloadType=WEB&format=JSON'
  // )

  if (navigator.geolocation) {
    function error() {
      alert('無法取得你的位置')
    }
    function success(position) {
      console.log(position.coords.latitude, position.coords.longitude)
      //google

      Geocode.setApiKey('AIzaSyDIaG31GEY2rsiG931nQn2nvxuvS7PQE4k')
      Geocode.setLanguage('zh-TW')
      Geocode.enableDebug()
      Geocode.fromLatLng(
        position.coords.latitude,
        position.coords.longitude
      ).then(
        (response) => {
          const address = response.results[7].formatted_address
          console.log(address)
        },
        (error) => {
          console.error(error)
        }
      )
    }
    navigator.geolocation.getCurrentPosition(success, error)
  } else {
    alert('Sorry, 你的裝置不支援地理位置功能。')
  }

  return (
    <>
      <div className="kv-search">
        <h1>近在咫尺的美</h1>
        <HomeSearchBar />
      </div>
      <TaiwanMap />

      <a onClick={() => scroll.scrollMore(920)}>
        <div className="scroll-icon-relative">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <span className="text">Scroll down</span>
        </div>
      </a>
      <a data-aos="fade-left" onClick={() => scroll.scrollTo(10)}>
        <section className="scrollTop row justify-content-center align-items-center">
          <div className="col">
            <span className="scroll-icon">
              <span className="scroll-icon__dot"></span>
            </span>
            <h5>TOP</h5>
          </div>
        </section>
      </a>
    </>
  )
}

export default Kv
