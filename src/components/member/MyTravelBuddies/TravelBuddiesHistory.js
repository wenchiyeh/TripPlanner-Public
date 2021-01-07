import React, { useState } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import Pages from '../../main/Pages'
import TBButtonRead from './TBButtonRead'
import TBButtonChatroom from './TBButtonChatroom'
import TBHistoryButtonRating from './TBHistoryButtonRating'
import TBHistoryButtonRatingNo from './TBHistoryButtonRatingNo'
import TBHistoryButtonGiveRating from './TBHistoryButtonGiveRating'
import TBHistoryButtonRatingDone from './TBHistoryButtonRatingDone'

function TravelBuddiesHistory() {
  return (
    <>
      <div className="travelbuddieshistory-outbox">
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
