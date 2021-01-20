import React, { useState, useEffect } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import Pages from '../../main/Pages'
import TBButtonRead from './TBButtonRead'
import TBButtonChatroom from './TBButtonChatroom'
import TBJoinedButtonDropOut from './TBJoinedButtonDropOut'
import TBJoinedButtonDropOutNotApproved from './TBJoinedButtonDropOutNotApproved'

function TravelBuddiesJoined() {
  const [tbJoined, settbJoined] = useState([])
  async function gettbJoined(props) {
    try {
      const response = await fetch(
        'http://localhost:5000/tbmyaccount/tbjoined',
        {
          method: 'get',
        }
      )
      if (response.ok) {
        const data = await response.json()
        settbJoined(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }

  useEffect(() => {
    gettbJoined()
  }, [])

  return (
    <>
      <div className="travelbuddiesjoined-outbox tab-content-travelbuddies">
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
            {tbJoined.length > 0 &&
              tbJoined.map((v, i) => {
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
                    <td>{v.tb_membersStatus}</td>
                    <td>
                      <TBButtonRead /> <TBButtonChatroom />{' '}
                      <TBJoinedButtonDropOut
                        tb_id_={v.id}
                        tb_themeName_={v.tb_themeName}
                      />{' '}
                    </td>
                  </tr>
                )
              })}
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
