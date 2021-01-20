import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import queryString from 'query-string'
// import io from 'socket.io-client'
// let socket

function TravelBuddiesChatroom(props) {
  const ws = new WebSocket('ws://localhost:8082')
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    ws.addEventListener('open', () => {
      console.log('connected')
      let msg = {
        type: 'message',
        text: message,
      }
      ws.send(msg)
    })
  })

  ws.addEventListener('message', ({ data }) => {
    console.log(data)
  })

  const send = () => {
    let msg = {
      type: 'message',
      text: message,
    }
    ws.send(JSON.parse(msg))
    setMessage('')
  }

  // const sentMessage = (event) => {
  //   event.preventDefault()
  //   ws.send(message)
  //   setMessage('')
  // }
  // const [tb, settb] = useState('1')
  // const ENDPOINT = 'localhost:9000'
  // useEffect(() => {
  //   // const { tb } = queryString.parse(location.search)

  //   socket = io(ENDPOINT, {
  //     transport: ['websocket', 'polling', 'flashsocket'],
  //   })
  //   socket.emit('join', { tb })

  //   settb(tb)
  //   console.log(socket)
  // }, [])

  return (
    <>
      <div className=" travelbuddies-chatroom-wrapper">
        <div className="d-flex">
          <h1>聊天室</h1>
          <Button>查看成員</Button>
        </div>
        <div className="d-flex">
          <div className=" travelbuddies-chatroom-itinerary"></div>
          <div className=" travelbuddies-chatroom-main">
            <h3 className="ml-3 mt-3">聊天室</h3>
            <hr className="travelbuddies-chatroom-hr" />
            <div className="travelbuddies-chatroom-maincontent">
              <div className="tb-chatroom-res mt-2 mb-2 ml-3">
                <div>陳嘉賢</div>
                <div>哈囉，我覺得可以把第一天的行程和第二天對調。</div>
              </div>
              <div className="tb-chatroom-send mt-2 mb-2 mr-3">
                <div>王小美</div>
                <div>好啊，我來調整</div>
              </div>
            </div>
            <hr className="travelbuddies-chatroom-hr" />
            <input type="text" placeholder="請輸入訊息" />
            <button type="button" onclick={send}>
              送出
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TravelBuddiesChatroom
