import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductList from './ProductList'
import BuyProducts from './BuyProducts/BuyProducts'

import Null from './products/Null'
import CashStep1 from './products/CashStep1'
import CashStep3 from './products/CashStep3'

function ItinRoute() {
  return (
    <Switch>
      <Route path="/productList/view/:product_id">
        <BuyProducts />
      </Route>
      <Route path="/productList/car1/:product_id">
        <CashStep1 tichectButton={true} FromShow={false} />
      </Route>
      <Route path="/productList/car1/:product_id">
        <CashStep1 tichectButton={false} FromShow={true} />
      </Route>
      <Route path="/productList/car3/:product_id">
        <CashStep3 />
      </Route>
      <Route path="/productList/car">
        <Null />
      </Route>
      <Route exact path="/productList">
        <ProductList />
      </Route>
    </Switch>
  )
}

export default ItinRoute
