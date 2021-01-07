import React from 'react'

import MyBreadCrumb from '../components/main/MyBreadCrumb'
import SearchBar from '../components/main/SearchBar'
import CardListPublic from '../components/main/CardListPublic'
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

        <CardListPublic />
        <Pages />
      </div>
    </>
  )
}

export default ProductList
