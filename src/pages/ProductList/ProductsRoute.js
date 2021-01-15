import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductList from './ProductList'
import BuyProducts from './BuyProducts/BuyProducts'

function ItinRoute() {
  return (
    <Switch>
      <Route path="/productList/view/:id">
        <BuyProducts />
      </Route>
      <Route exact path="/productList">
        <ProductList />
      </Route>
    </Switch>
  )
}

export default ItinRoute
