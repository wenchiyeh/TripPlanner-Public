import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import queryString from 'query-string'
import io from 'socket.io-client'

function TravelBuddiesChatroom() {
  return (
    <>
      <div className=" travelbuddies-chatroom-wrapper">
        <div className="d-flex">
          <h1>台灣西部好好玩！南投彰化雲林嘉義秘境行五日 的聊天室</h1>
          <Button>查看成員</Button>
        </div>
        <div className="d-flex">
          <div className=" travelbuddies-chatroom-itinerary"></div>
          <div className=" travelbuddies-chatroom-main">
            <h3>聊天室</h3>
            <hr className="travelbuddies-chatroom-hr" />
            <div className="travelbuddies-chatroom-maincontent">
              <div className="d-flex">
                <figure></figure>
                <div>哈囉，我覺得可以把第一天的行程和第二天對調。</div>
              </div>
              <div className="d-flex">
                <figure></figure>
                <div>好啊，我來調整</div>
              </div>
            </div>
            <hr className="travelbuddies-chatroom-hr" />
          </div>
        </div>
      </div>
    </>
  )
}

export default TravelBuddiesChatroom
