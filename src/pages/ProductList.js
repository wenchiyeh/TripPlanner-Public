import React from 'react'

import MyBreadCrumb from '../components/main/MyBreadCrumb'
import SearchBar from '../components/main/SearchBar'
import CardList from '../components/products/CardList'
import Carousel from '../components/travelBuddy/Carousel'
import Pages from '../components/main/Pages'

function ProductList() {
  return (
    <>
      <div className="container">
        <MyBreadCrumb />
        <h1>達人講座</h1>
      </div>
      <Carousel />
      <div className="container">
        <SearchBar />

        <CardList />
        <Pages />
      </div>
    </>
  )
}

export default ProductList
