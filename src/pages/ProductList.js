import React from 'react'

import Header from '../components/main/Header'
import MyFooter from '../components/main/MyFooter'
import MyBreadCrumb from '../components/main/MyBreadCrumb'
import SearchBar from '../components/main/SearchBar'
import CardList from '../components/products/CardList'
import Carousel from '../components/travelBuddy/Carousel'
import Pages from '../components/main/Pages'

function ProductList() {
  return (
    <>
      <Header />
      <div className="container">
        <MyBreadCrumb />
        <h1>達人講座</h1>

        <Carousel />

        <SearchBar />

        <CardList />
        <Pages />
      </div>

      <MyFooter />
    </>
  )
}

export default ProductList
