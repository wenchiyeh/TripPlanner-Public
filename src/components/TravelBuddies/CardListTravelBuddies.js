import React from 'react'
import CardTravelBuddies from './CardTravelBudddies'
import { Col, Row, Container } from 'react-bootstrap'
//

function CardListTravelBudddies(props) {
  const data = props.tbDataMain
  return (
    <>
      <Container>
        <Row>
          {data.length > 0 &&
            data.map((element, index) => (
              <Col key={index} xs={6} md={4}>
                <CardTravelBuddies
                  id={element.id}
                  title={element.tb_themeName}
                  location={element.tb_city} //此行連接後端後請修正
                  image={'testImage.jpg'} //此行連接後端後請修正
                  time1={element.tb_dateBegin}
                  time2={element.tb_dateEnd}
                  duration={element.tb_daysCategory}
                  person={element.tb_owner} //此行連接後端後請修正
                  like={element.heart}
                  mark={element.keep}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  )
}
export default CardListTravelBudddies
