import React, { useState } from 'react'
import Card from '../main/Card'

function CardList() {
  return (
    <>
      <div className="col-10">
        <Card
          title={'新北耶誕'}
          text={`刻年在一真升友在，夜長能前路大她力去主保：頭的母打字會，然算子在待的際和體`}
          location={'中壢市'}
          image={'testImage.jpg'}
          time1={'2020/12/24'}
          time2={-1}
          duration={3}
          price={-1}
          person={'王大明'}
          like={222}
          mark={222}
        />
      </div>
    </>
  )
}
export default CardList
