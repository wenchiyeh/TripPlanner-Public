import React, { useState } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import Pages from '../../main/Pages'
import TBButtonRead from './TBButtonRead'
import TBButtonChatroom from './TBButtonChatroom'
import TBJoinedButtonDropOut from './TBJoinedButtonDropOut'
import TBJoinedButtonDropOutNotApproved from './TBJoinedButtonDropOutNotApproved'

function TravelBuddiesJoined() {
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
                <TBButtonRead /> <TBButtonChatroom /> <TBJoinedButtonDropOut />{' '}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>一天吃爆嘉義火雞肉飯</td>
              <td>2021/02/26 - 2021/02/26</td>
              <td>參加中</td>
              <td>
                <TBButtonRead /> <TBButtonChatroom />{' '}
                <TBJoinedButtonDropOutNotApproved />{' '}
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

export default TravelBuddiesJoined
