import React, { useEffect, useState } from 'react'
import Card from '../../components/main/Card'
import { Col, Row, Container } from 'react-bootstrap'

function CardListPublic() {
  const [productCard, setProductCard] = useState([])
  async function getProductCard(props) {
    try {
      const response = await fetch('http://localhost:5000/productList', {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        setProductCard(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getProductCard()
  }, [])

  return (
    <>
      <Container>
        <Row>
          {productCard.map((v, i) => (
            <Col xs={6} md={4}>
              <Card
                id={v.id}
                time1={v.classDate}
                title={v.className}
                text={v.warning}
                person={v.teacher_name}
                price={'1000'}
                like={'222'}
                mark={'222'}
                image={'/classPhoto/' + v.classPhoto}
                location={v.classCity}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
export default CardListPublic
