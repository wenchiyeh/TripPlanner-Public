import React from 'react'
import Header from '../components/main/Header'
import MyFooter from '../components/main/MyFooter'
import MyBreadCrumb from '../components/main/MyBreadCrumb'
import SearchBar from '../components/main/SearchBar'
import CardList from '../components/products/CardList'

function ProductList() {
  return (
    <>
      <Header />
      <div className="container">
        <MyBreadCrumb />
        <h1>達人講座</h1>
        <SearchBar />
        <CardList />
      </div>
      <MyFooter />
    </>
  )
}

export default ProductList
