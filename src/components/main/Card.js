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
        <div className="card-label">{location}</div>
        <figure className="card-figure">
          <img className="card-image" alt={title} />
        </figure>
        <div className="card-content">
          <h4>{title}</h4>
          <p className="small-p">{text}</p>
        </div>
      </div>
    </>
  )
}

export default Card
// 檔案負責人: 柯政安
