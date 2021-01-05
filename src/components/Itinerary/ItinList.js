import React from 'react'
import { Col } from 'react-bootstrap'

import Header from '../main/Header'
import MyFooter from '../main/MyFooter'
import MyBreadCrumb from '../main/MyBreadCrumb'
import SearchBar from '../main/SearchBar'
import CardList from '../products/CardList'
import Carousel from '../components/travelBuddy/Carousel'
import Pages from '../components/main/Pages'

function ProductList() {
  return (
    <>
      <Header />
      <div className="container">
        <MyBreadCrumb />
        <h1>行程規劃</h1>
      </div>
      <Carousel />

      <div className="container">
        <Col md={8}>
          <SearchBar />
        </Col>
        <CardList />
        <Pages />
      </div>

      <MyFooter />
    </>
  )
}

export default ProductList
