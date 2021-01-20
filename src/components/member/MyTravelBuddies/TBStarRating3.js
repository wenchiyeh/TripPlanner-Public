import React, { useState, useEffect } from 'react'

function TBStarRating2({
  count,
  value,
  inactiveColor,
  size,
  activeColor,
  onChange,
}) {
  // short trick
  const stars = Array.from({ length: count }, () => '🟊')

  const handleChange = (value) => {
    onChange(value + 1)
  }

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor
        if (index < value) {
          style = activeColor
        }
        return (
          <span
            className={'star'}
            key={index}
            style={{ color: style, width: size, height: size, fontSize: size }}
            onClick={() => handleChange(index)}
          >
            {s}
          </span>
        )
      })}
      {value}
    </div>
  )
}

function TBStarRating3(props) {
  // Get the rating from a db if required.
  // The value 3 is just for testing.
  let tb_id = props.id

  const [tbMemberJoined, settbMemberJoined] = useState([])

  async function getTBMembers(props) {
    try {
      const response = await fetch(
        `http://localhost:5000/travelbuddies/memberjoined/${tb_id}`,
        {
          method: 'get',
        }
      )
      if (response.ok) {
        const data = await response.json()
        settbMemberJoined(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getTBMembers()
  }, [])

  let member = tbMemberJoined.memberName

  const [rating, setRating] = useState(0)

  const handleChange = (value) => {
    setRating(value)
  }
  return (
    <div>
      {tbMemberJoined.map((v, i) => (
        <div className="d-flex">
          <div>{v.memberName}</div>
          <TBStarRating2
            count={5}
            size={40}
            value={rating}
            activeColor={'#46beeb'}
            inactiveColor={'#e9edf0'}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  )
}

export default TBStarRating3
