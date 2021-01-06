import React, { useState } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import Pages from '../../main/Pages'
import TBMineButtonEdit from './TBMineButtonEdit'
import TBMineButtonMembersSelect from './TBMineButtonMembersSelect'
import TBButtonChatroom from './TBButtonChatroom'
import TBMineButtonDelete from './TBMineButtonDelete'

function TravelBuddiesMine() {
  return (
    <>
      <div className="travelbuddiesmine-outbox">
        <Table>
          <thead>
            <tr>
              <th width="60px">No.</th>
              <th width="180px">旅行揪團名稱</th>
              <th width="120px">日期</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>金門馬祖六天尋幽訪古</td>
              <td>2021/01/26 - 2021/01/31</td>
              <td>
                <TBMineButtonEdit /> <TBMineButtonEdit />{' '}
                <TBMineButtonMembersSelect /> <TBButtonChatroom />{' '}
                <TBMineButtonDelete />{' '}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>台灣西部好好玩！南投彰化雲林嘉義秘境行五日</td>
              <td>2021/02/11 - 2021/02/15</td>
              <td>
                <TBMineButtonEdit /> <TBMineButtonMembersSelect />{' '}
                <TBButtonChatroom /> <TBMineButtonDelete />{' '}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>高雄、小琉球玩個三天</td>
              <td>2021/03/01 - 2021/03/03</td>
              <td>
                <TBMineButtonEdit /> <TBMineButtonMembersSelect />{' '}
                <TBButtonChatroom /> <TBMineButtonDelete />{' '}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default TravelBuddiesMine
