import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function TBButtonChatroom(props) {
  const id = props.id
  // let history = useHistory()
  // function Chatroom() {
  //   history.push({`/travelBuddies/chatroom/`})
  // }
  const Chatroom = () => {}
  return (
    <>
      <Link to={`/travelBuddies/chatroom?tb=${id}`}>
        <Button type="submit" className="tb-button-chatroom" onclick={Chatroom}>
          聊天室
        </Button>
      </Link>
    </>
  )
}

export default TBButtonChatroom
