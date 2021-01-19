import React from 'react'
<<<<<<< HEAD
import Card from '../components/main/Card'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Home(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
=======
import '.././style/home.scss'
import HomeHeader from '../components/main/HomeHeader'
// import Footer from '../components/main/Footer'
import Kv from '../components/main/Kv'
import HomeTitle1 from '../components/main/HomeTitle1'
import HomeP1Image from '../components/main/HomeP1Image'
import HomeSlider from '../components/main/HomeSlider'
import HomeBtn from '../components/main/HomeBtn'
import HomeP2 from '../components/main/HomeP2'
import HomeP3 from '../components/main/HomeP3'
import HomeP4 from '../components/main/HomeP4'
import HomeP4Card from '../components/main/HomeP4Card'
import HomeP5 from '../components/main/HomeP5'
import HomeP5Card from '../components/main/HomeP5Card'
import HomeP2scoll2 from '../components/main/HomeP2scoll2'

import HomeP2scoll from '../components/main/HomeP2scoll'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
>>>>>>> a100240a069a90278c78fb8cb4132985577c7b55

function Home(props) {
  return (
    <>
<<<<<<< HEAD
      <div className="home-body">
        <figure className="home-kv-figure ">
          <img src="./images/kv.jpg" width="100%" alt="圖片替代文字" />
        </figure>
=======
      <div className="navbar-background" />

      <HomeHeader />

      <Kv />
>>>>>>> a100240a069a90278c78fb8cb4132985577c7b55

      <article className="home-body">
        <div className="Home-container">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            <HomeTitle1 />
          </div>
<<<<<<< HEAD
          <div className="row home-p1">
            <div className="col-5">
              <figure className="home-p1-figure-left">
                <img src="./images/p3.jpg" alt="圖片替代文字" />
              </figure>
              <figure className="home-p1-figure-left">
                <img src="./images/p2.jpg" alt="圖片替代文字" />
                <h2>個人化旅歷製作</h2>
                <div className="line" />
              </figure>
            </div>
            <div className="col-7">
              <figure className="home-p1-figure-right-top">
                <img src="./images/p4.png" alt="圖片替代文字" />
              </figure>

              <div className="row home-p1-figure-right-bottom">
                <figure className="col-4">
                  <img src="./images/p5.png" alt="圖片替代文字" />
                </figure>
                <figure className="col-4">
                  <img src="./images/p6.jpg" alt="圖片替代文字" />
                </figure>
                <figure className="col-4">
                  <img src="./images/p7.png" alt="圖片替代文字" />
                </figure>
              </div>
=======
          <div>
            <HomeP1Image />
          </div>
          <div
            className="p1-cardtitle "
            data-aos="fade-zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <h2>熱門行程</h2>
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-out"
          data-aos-duration="900"
          data-aos-delay="300"
          data-aos-offset="200"
        >
          <div className="p1-cardbackground-relative">
            <div className="p1-cardbackground" />
          </div>
        </div>
        <div className="Home-container">
          <HomeSlider />
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <HomeBtn />
          </div>
        </div>
        <HomeP2scoll />
        <HomeP2scoll2 />

        <div className="p1-cardbackground-relative">
          <div className="Home-container">
            <div className="p3-cardbackground">
              <img src="../images/homePhoto/inada_txt.svg" />
>>>>>>> a100240a069a90278c78fb8cb4132985577c7b55
            </div>
            <HomeP2 />
            <HomeP3 />
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-5 p3-circle-relative">
            <figure
              class="p3-circle"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="900"
            >
              <img src="../images/homePhoto/p9.jpg" />
            </figure>
          </div>
        </div>
        <HomeP4 />
        <div className="Home-container">
          <HomeP4Card />
          <div
            className="p4-btn"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <HomeBtn />
          </div>
        </div>

        <HomeP5 />
        <div className="Home-container">
          <HomeP5Card />
          <div
            className="p4-btn"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <HomeBtn />
          </div>
        </div>
      </article>

      {/* <Footer /> */}
    </>
  )
}

export default Home

//建議 img 使用絕對路徑
