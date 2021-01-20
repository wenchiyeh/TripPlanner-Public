import React, { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function TBMineMembersSelectDo(props) {
  const [tbMineMembersSelect, settbMineMembersSelect] = useState(false)
  let tb_id = props.id
  async function getTravelBuddiesMembersSelect(props) {
    try {
      const response = await fetch(
        `http://localhost:5000/travelbuddies/membersselect/${tb_id}`,
        {
          method: 'get',
        }
      )
      if (response.ok) {
        const data = await response.json()
        settbMineMembersSelect(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getTravelBuddiesMembersSelect()
  }, [])
}

export default TBMineMembersSelectDo
