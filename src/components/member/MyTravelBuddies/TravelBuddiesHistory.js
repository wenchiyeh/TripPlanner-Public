import React, { useState, useEffect } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import Pages from '../../main/Pages'
import TBButtonRead from './TBButtonRead'
import TBButtonChatroom from './TBButtonChatroom'
import TBHistoryButtonRating from './TBHistoryButtonRating'
import TBHistoryButtonRatingNo from './TBHistoryButtonRatingNo'
import TBHistoryButtonGiveRating from './TBHistoryButtonGiveRating'
import TBHistoryButtonRatingDone from './TBHistoryButtonRatingDone'

function TravelBuddiesHistory() {
  const [tbHistory, settbHistory] = useState([])
  async function gettbHistory(props) {
    try {
      const response = await fetch(
        'http://localhost:5000/tbmyaccount/tbhistory',
        {
          method: 'get',
        }
      )
      if (response.ok) {
        const data = await response.json()
        settbHistory(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }

  useEffect(() => {
    gettbHistory()
  }, [])
  return (
    <>
      <div className="travelbuddieshistory-outbox tab-content-travelbuddies">
        <Table>
          <thead>
            <tr>
              <th width="60px">No.</th>
              <th width="180px">旅行揪團名稱</th>
              <th width="120px">日期</th>
              <th width="90px">身份</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {tbHistory.length > 0 &&
              tbHistory.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{v.tb_themeName}</td>
                    <td>
                      {v.tb_dateBegin.slice(0, 4) +
                        '/' +
                        v.tb_dateBegin.slice(5, 7) +
                        '/' +
                        v.tb_dateBegin.slice(8, 10) +
                        ' ' +
                        '-' +
                        ' ' +
                        v.tb_dateEnd.slice(0, 4) +
                        '/' +
                        v.tb_dateEnd.slice(5, 7) +
                        '/' +
                        v.tb_dateEnd.slice(8, 10)}
                    </td>
                    {/* 這邊判斷式要拉session */}
                    <td>{v.tb_ownerId === 1 ? '揪團主' : '團員'}</td>
                    <td>
                      <TBButtonRead /> <TBButtonChatroom />{' '}
                      <TBHistoryButtonRating />
                      <TBHistoryButtonGiveRating />{' '}
                    </td>
                  </tr>
                )
              })}
            <tr>
              <td>1</td>
              <td>台北熱門景點一日遊</td>
              <td>2020/10/01 - 2020/10/01</td>
              <td>揪團主</td>
              <td>
                <TBButtonRead /> <TBButtonChatroom /> <TBHistoryButtonRating />
                <TBHistoryButtonGiveRating />{' '}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>北海岸、基隆二日遊</td>
              <td>2020/10/06 - 2020/10/07</td>
              <td>團員</td>
              <td>
                <TBButtonRead /> <TBButtonChatroom />{' '}
                <TBHistoryButtonRatingNo />
                <TBHistoryButtonRatingDone />{' '}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>屏東海生館一日遊</td>
              <td>2021/02/26 - 2021/02/26</td>
              <td>團員</td>
              <td>
                <TBButtonRead /> <TBButtonChatroom /> <TBHistoryButtonRating />
                <TBHistoryButtonGiveRating />{' '}
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>北台灣深度之旅，八日！</td>
              <td>2021/02/01 - 2021/02/08</td>
              <td>揪團主</td>
              <td>
                <TBButtonRead /> <TBButtonChatroom /> <TBHistoryButtonRating />
                <TBHistoryButtonGiveRating />{' '}
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>北台灣深度之旅，八日！</td>
              <td>2021/02/01 - 2021/02/08</td>
              <td>揪團主</td>
              <td>
                <TBButtonRead /> <TBButtonChatroom /> <TBHistoryButtonRating />
                <TBHistoryButtonGiveRating />{' '}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="tb-pages">
        <Pages />
      </div>
    </>
  )
}

export default TravelBuddiesHistory
