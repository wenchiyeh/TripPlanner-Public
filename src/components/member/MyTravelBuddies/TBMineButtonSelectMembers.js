import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
// import TBGiveStarRating from './TBGiveStarRating'
import { useHistory } from 'react-router-dom'

function TBMineButtonSelectMemvers(props) {
  let history = useHistory()
  let id = props.id
  return (
    <>
      <Button
        className="tbhistory-button-giverating"
        onClick={() => {
          history.push('/travelBuddies/selectMembers/' + id)
        }}
      >
        選擇團員
      </Button>
    </>
  )
}

export default TBMineButtonSelectMemvers
