import React from 'react'

import MyBreadCrumb from '../../components/main/MyBreadCrumb/MyBreadCrumb'
import SearchBar from '../../components/main/SearchBar'
import ProductPublic from './ProductPublic'
import Carousel from '../../components/TravelBuddies/Carousel'
import Pages from '../../components/main/Pages'

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

        <ProductPublic />
        <Pages />
      </div>
    </>
  )
}

export default ProductList
