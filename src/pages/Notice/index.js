<<<<<<< HEAD
//通知表單
import React from 'react'
import Pages from '../../components/main/Pages'
import { Table } from 'react-bootstrap'
import './notice.scss'

let cardData = require('../../components/Itinerary/testJsonData.json')
let handleTestData = cardData[2].data

function Notice({
  data = handleTestData,
  type = 'itinerary',
  //id = '1',
  title = '24週年慶站長大放送 - 抽獎 Call Out 回答通關密語',
  time = '兩小時前',
}) {
  let display = <></>
  if (type === 'itinerary') {
    display = data.map((element, index) => (
      <tbody>
        <tr key={index}>
          <td>{element.id}</td>
          <td className="not-td-left">{element.title}</td>
          <td className="not-td-right">{time}</td>
        </tr>
      </tbody>
    ))
  }
  return (
    <>
      <Table className="table table-striped">
        <div className="notice-style">
          <thead>
            <tr className="not-table-mrove">
              <th className="not-id">No.</th>
              <th className="text-left">旅行日期</th>
              <th className="text-right-time">時間</th>
            </tr>
          </thead>
          {display}
          <Pages className="not-pages" />
        </div>
      </Table>
    </>
  )
}

export default Notice
=======
//通知表單
import React from 'react'
import Pages from '../../components/main/Pages'
import { Table } from 'react-bootstrap'
import './notice.scss'

let cardData = require('../../components/Itinerary/testJsonData.json')
let handleTestData = cardData[2].data

function Notice({
  data = handleTestData,
  type = 'itinerary',
  //id = '1',
  title = '24週年慶站長大放送 - 抽獎 Call Out 回答通關密語',
  time = '兩小時前',
}) {
  let display = <></>
  if (type === 'itinerary') {
    display = data.map((element, index) => (
      <tbody>
        <tr key={index}>
          <td>{element.id}</td>
          <td className="not-td-left">{element.title}</td>
          <td className="not-td-right">{time}</td>
        </tr>
      </tbody>
    ))
  }
  return (
    <>
      <Table className="table table-striped">
        <div className="notice-style">
          <thead>
            <tr className="not-table-mrove">
              <th className="not-id">No.</th>
              <th className="text-left">旅行日期</th>
              <th className="text-right-time">時間</th>
            </tr>
          </thead>
          {display}
          <Pages className="not-pages" />
        </div>
      </Table>
    </>
  )
}

export default Notice
>>>>>>> a100240a069a90278c78fb8cb4132985577c7b55
