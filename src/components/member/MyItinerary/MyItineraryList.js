import React, { useState, useEffect } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import Pages from '../../main/Pages'

function MyItineraryList() {
  const [tbMine, settbMine] = useState([])
  async function gettbMine(props) {
    try {
      const response = await fetch('http://localhost:5000/tbmyaccount/tbmine', {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        settbMine(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    // gettbMine()
  }, [])

  return (
    <tbody>
      <div className="travelbuddiesmine-outbox tab-content-travelbuddies">
        <Table>
          <thead>
            <tr>
              <th width="60px">No.</th>
              <th width="180px">行程名稱</th>
              <th width="120px">發表</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
      <div className="tb-pages">
        <Pages />
      </div>
    </tbody>
  )
}

export default MyItineraryList
