import React from 'react'
import Header from '../components/main/Header'
import MyFooter from '../components/main/MyFooter'
import MyBreadCrumb from '../components/main/MyBreadCrumb'
import ProductSlider from '../components/products/ProductSlider'

function ProductList() {
  return (
    <>
      <Header />
      <MyBreadCrumb />
      <ProductSlider />

      <MyFooter />
    </>
  )
}

export default ProductList
