<<<<<<< HEAD
//通知表單
import React from 'react'
import './newnotice.scss'

function NewNotice({
  id = '1',
  data = '24週年慶站長大放送 - 抽獎 Call Out 回答通關密語',
  time = '兩小時前',
}) {
  return (
    <>
      <div className="">
        <table className="not-toble-ma-bt table-hover">
          <tr>
            {/* <th scope="col">No.</th> */}
            <th>旅行日期</th>
            {/* <th className="text-right" scope="col">
              時間
            </th> */}
          </tr>
          <tbody>
            <tr className="d-flex new-not-flex">
              <td className="not-td-left">{data}</td>
              <td className="not-td-right">{time}</td>
            </tr>
            <tr className="d-flex new-not-flex">
              <td className="not-td-left">{data}</td>
              <td className="not-td-right">{time}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default NewNotice
=======
//通知表單
import React from 'react'
import './newnotice.scss'

function NewNotice({
  id = '1',
  data = '24週年慶站長大放送 - 抽獎 Call Out 回答通關密語',
  time = '兩小時前',
}) {
  return (
    <>
      <div className="">
        <table className="not-toble-ma-bt table-hover">
          <tr>
            {/* <th scope="col">No.</th> */}
            <th>旅行日期</th>
            {/* <th className="text-right" scope="col">
              時間
            </th> */}
          </tr>
          <tbody>
            <tr className="d-flex new-not-flex">
              <td className="not-td-left">{data}</td>
              <td className="not-td-right">{time}</td>
            </tr>
            <tr className="d-flex new-not-flex">
              <td className="not-td-left">{data}</td>
              <td className="not-td-right">{time}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default NewNotice
>>>>>>> a100240a069a90278c78fb8cb4132985577c7b55
