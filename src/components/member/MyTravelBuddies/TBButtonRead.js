import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function TBButtonRead() {
  let history = useHistory()
  function toMainPage() {
    history.push('/travelBuddies/mainpage')
  }
  return (
    <>
      <Button className="tb-button-read" onClick={toMainPage}>
        查看
      </Button>
    </>
  )
}

export default TBButtonRead
