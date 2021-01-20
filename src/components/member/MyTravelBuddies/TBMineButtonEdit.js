import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function TBMineButtonEdit(props) {
  let history = useHistory()
  let id = props.id
  console.log(id)
  function toEdit() {
    history.push('/travelBuddies/edit/')
  }
  return (
    <>
      <Button className="tbmine-button-edit" onclick={toEdit}>
        編輯
      </Button>
    </>
  )
}

export default TBMineButtonEdit
