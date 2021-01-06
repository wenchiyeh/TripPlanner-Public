import React, { useState } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import Pages from '../../main/Pages'
import TBButtonRead from './TBButtonRead'
import TBButtonChatroom from './TBButtonChatroom'
import TBHistoryButtonRating from './TBHistoryButtonRating'
import TBHistoryButtonGiveRating from './TBHistoryButtonGiveRating'

function TravelBuddiesHistory() {
  return (
    <>
      <div className="travelbuddiesjoined-outbox">
        <Table>
          <thead>
            <tr>
              <th width="60px">No.</th>
              <th width="180px">旅行揪團名稱</th>
              <th width="120px">日期</th>
              <th width="90px">狀態</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>北台灣深度之旅，八日！</td>
              <td>2021/02/01 - 2021/02/08</td>
              <td>參加中</td>
              <td>
                <TBButtonRead /> <TBButtonChatroom /> <TBHistoryButtonRating />
                <TBHistoryButtonGiveRating />{' '}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>一天吃爆嘉義火雞肉飯</td>
              <td>2021/02/26 - 2021/02/26</td>
              <td>參加中</td>
              <td>
                <TBButtonRead /> <TBButtonChatroom /> <TBHistoryButtonRating />
                <TBHistoryButtonGiveRating />{' '}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default TravelBuddiesHistory
