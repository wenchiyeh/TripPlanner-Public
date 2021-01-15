import React, { useState } from 'react'
import Slider from 'react-slick'
import Yilan001 from '../../images/travelBuddy/yilan_001.jpg'
import Yilan002 from '../../images/travelBuddy/yilan_002.jpg'
import Newtp001 from '../../images/travelBuddy/newtp_001.jpg'
import Newtp002 from '../../images/travelBuddy/newtp_002.jpg'
import Brunch001 from '../../images/travelBuddy/brunch_001.jpg'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const images = [Yilan001, Yilan002, Newtp001, Newtp002, Brunch001]

function Carousel() {
  const [imgIndex, setImgIndex] = useState(0)

  const settings = {
    infinite: true,
    lazyload: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    variableHeight: true,
    centerPadding: '270px',
    autoplay: true,
    arrow: false,
    beforeChange: (current, next) => setImgIndex(next),
  }

  return (
    <>
      <div className="carousel-main">
        <Slider {...settings} className="carousel-outbox row">
          {images.map((img, i) => (
            <div
              key={i}
              className={
                i === imgIndex
                  ? 'carousel-active-slide carousel-slide'
                  : 'carousel-slide'
              }
            >
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Carousel
