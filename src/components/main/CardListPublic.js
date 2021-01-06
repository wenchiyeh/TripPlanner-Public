import React from 'react'
import Card from '../main/Card'
import { Col, Row, Container } from 'react-bootstrap'
//
let cardData = require('../Itinerary/testJsonData.json')
let handleTestData = cardData[2].data
//測試資料可以做成JSON檔之後用這個方式引入

function CardListPublic({ data = handleTestData, type = 'itinerary' }) {
  let display = <></>
  if (type === 'itinerary') {
    display = data.map((element, index) => (
      <Col key={index} xs={6} md={4}>
        <Card
          id={element.id}
          title={element.title}
          text={`散了稱官縣，去球安常雖照濟終還人，物期還關，看關當法對前產在不我岸明工員野大經：前注市模境為：驚出話讀家我的兩，我正由持常本如一具度這精鄉心識政樂不不系中話住氣多大和奇你報面部節表改不約。整那特外究兒十共北，說設今爭清語好，演臺一：學友運營節個願跑天創要，真二無早館通民校，時酒們下容次政著，院有量家會。場不花孩在過研生構學們公於福想親識斷的道拉仍集情動之卻美族大成我改電活物！`} //此行連接後端後請修正
          location={'中壢市'} //此行連接後端後請修正
          image={'testImage.jpg'} //此行連接後端後請修正
          duration={element.duration}
          person={'王大明'} //此行連接後端後請修正
          like={element.heart}
          mark={element.keep}
        />
      </Col>
    ))
  } else if (type === 'products') {
    display = data.map((element, index) => (
      <Col key={index} xs={6} md={4}>
        <Card
          id={element.id}
          title={element.title}
          location={'中壢市'} //此行連接後端後請修正
          image={'testImage.jpg'} //此行連接後端後請修正
          time1={element.time1}
          price={500} //此行連接後端後請修正
          person={'王大明'} //此行連接後端後請修正
          like={element.heart}
          mark={element.keep}
        />
      </Col>
    ))
  } else if (type === 'travelBuddy') {
    display = data.map((element, index) => (
      <Col key={index} xs={6} md={4}>
        <Card
          id={element.id}
          title={element.title}
          location={'中壢市'} //此行連接後端後請修正
          image={'testImage.jpg'} //此行連接後端後請修正
          time1={element.time1}
          time2={element.time2}
          duration={element.duration}
          person={'王大明'} //此行連接後端後請修正
          like={element.heart}
          mark={element.keep}
        />
      </Col>
    ))
  }
  return (
    <>
      <Container>
        <Row>{display}</Row>
      </Container>
    </>
  )
}
export default CardListPublic
// 檔案負責人: 柯政安
