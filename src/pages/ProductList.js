import React from 'react'

import Header from '../components/main/Header'
import MyFooter from '../components/main/MyFooter'
import MyBreadCrumb from '../components/main/MyBreadCrumb'
import SearchBar from '../components/main/SearchBar'
import CardListPublic from '../components/main/CardListPublic'
import Carousel from '../components/travelBuddy/Carousel'
import Pages from '../components/main/Pages'

function ProductList() {
  return (
    <>
      <Header />
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

      <MyFooter />
    </>
  )
}

export default ProductList
