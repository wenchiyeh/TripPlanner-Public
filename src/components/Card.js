import React from 'react'

function Card(props) {
  const {
    title,
    text,
    location,
    time1,
    time2,
    price,
    person,
    like,
    mark,
  } = props
  return (
    <>
      <div className="card-wrapper">
        <figure className="card-figure">
          <img className="card-image" />
        </figure>
        <div className="card-content"></div>
      </div>
    </>
  )
}

export default Card
// 檔案負責人: 柯政安
