//表單
import React from 'react'
import Pages from '../../components/main/Pages'
import './notice.scss'

function Notice({
  id = '1',
  data = '24週年慶站長大放送 - 抽獎 Call Out 回答通關密語',
  time = '兩小時前',
}) {
  return (
    <>
      <div className="notice-style">
        <table className="table">
          <tr>
            <th scope="col">No.</th>
            <th>旅行日期</th>
            <th className="text-right" scope="col">
              時間
            </th>
          </tr>
          <tbody>
            <tr>
              {/* 更改下面資料 */}
              <td className="not-td-left">{id}</td>
              <td className="not-td-left">{data}</td>
              <td className="not-td-right">{time}</td>
            </tr>
          </tbody>
        </table>
        <Pages className="not-pages" />
      </div>
    </>
  )
}

export default Notice
