import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import MyBreadCrumb from '../../components/main/MyBreadCrumb/MyBreadCrumb'
import SearchBar from '../../components/main/SearchBar'
import Card from '../../components/main/Card'
import Carousel from '../../components/TravelBuddies/Carousel'

function ProductList() {
  const [searchFilter, setSearchFilter] = useState({})
  useEffect(() => {
    getProductCard()
  }, [searchFilter])

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
        <MyBreadCrumb />
        <h1>達人講座</h1>
      </Container>
      <Carousel />
      <Container>
        <SearchBar setSearchFilter={setSearchFilter} />
        <Row>
          {productCard.map((v, i) => (
            <Col xs={6} md={4} key={i}>
              <Card
                id={v.id}
                time1={v.classDate}
                title={v.className}
                text={v.warning}
                person={v.teacher_name}
                price={v.ticket_price}
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

export default ProductList
