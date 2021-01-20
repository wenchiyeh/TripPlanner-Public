import React, { useState } from 'react'

function TBGiveStarRating({ stars = 5, filled }) {
  const [value, setValue] = useState(filled)
  const [dynamicValue, setDynamicValue] = useState(filled)

  const handleClick = (newValue) => {
    setValue(newValue)
    setDynamicValue(newValue)
  }

  const handleMouseEnter = (newValue) => {
    setDynamicValue(newValue)
  }

  const handleMouseLeave = () => {
    setDynamicValue(value)
  }
  return (
    <>
      <div className="tb-give-star-rating-wrapper d-flex">
        <img
          // 要放絕對路徑
          src="http://localhost:3000/images/member/DSC_7437-37.jpg"
          className="card-img img-fluid"
          alt="..."
        />
        <div>Rayyyyyyyyyy</div>
        {[...Array(stars).keys()].map((i) => (
          <span
            key={i}
            onMouseEnter={() => handleMouseEnter(i + 1)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(i + 1)}
          >
            {dynamicValue >= i + 1 ? '★' : '☆'}
          </span>
        ))}
      </div>
    </>
  )
}
export default TBGiveStarRating

// 拿 Ray 的來改
