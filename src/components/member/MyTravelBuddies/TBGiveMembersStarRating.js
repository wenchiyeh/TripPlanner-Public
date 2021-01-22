import React, { useState, useEffect } from 'react'
import { Form, Col, Button, Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'
import Modal from 'react-bootstrap/Modal'
import $ from 'jquery'
import TBButtonGiveStar from './TBButtonGiveStar'

function TBGiveMembersStarRating(props) {
  let history = useHistory()
  let { id } = useParams()
  let tb_themeName = props.tb_themeName
  const [tbMemberJoined, settbMemberJoined] = useState([])
  async function getTBMembers(props) {
    try {
      const response = await fetch(
        `http://localhost:5000/travelbuddies/memberjoined/${id}`,
        {
          method: 'get',
        }
      )
      if (response.ok) {
        const data = await response.json()
        settbMemberJoined(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getTBMembers()
  }, [])
  return (
    <>
      <div className="add-travelbuddies-outbox">
        <div className="add-travelbuddies-middle">
          <h1 className="add-travelbuddies-topic">評價團員</h1>
          <tbody>
            <div className="travelbuddiesmine-outbox">
              <Table>
                <thead>
                  <tr>
                    <th width="60px">No.</th>
                    <th width="180px">旅行揪團名稱</th>
                    <th width="120px">團員名字</th>
                    <th>評分</th>
                  </tr>
                </thead>
                <tbody>
                  {tbMemberJoined.length > 0 &&
                    tbMemberJoined.map((v, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{v.themeName}</td>
                          <td>{v.memberName}</td>
                          <td>
                            <TBButtonGiveStar
                              memberName={v.memberName}
                              m_id={v.memberId}
                              tb_id={v.tb_id}
                              getTBMembers={getTBMembers}
                            />
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </Table>
            </div>
          </tbody>
          <Button
            id="insertTravelBuddies"
            className="add-travelbuddies-confirm"
            onClick={() => {
              history.push('/myAccount/TravelBuddies')
            }}
          >
            {' '}
            返回我的揪團
          </Button>
          <br />
        </div>
      </div>
    </>
  )
}

export default TBGiveMembersStarRating
