import React, { useState } from 'react'
import Calendar from 'react-calendar'

function CalendarApp() {
  const [value, onChange] = useState(new Date())

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}
export default CalendarApp

// 這是月曆 Ray

//實際功能還沒做
//要改感覺很麻煩 有時間再說
