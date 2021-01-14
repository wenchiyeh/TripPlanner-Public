import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Null from './Null'
import CashStep1 from './CashStep1'
import CashStep2 from './CashStep2'
import CashStep3 from './CashStep3'

function CarRoute() {
  return (
    <Switch>
      <Route path="/shoppingcar/1">
        <CashStep1 />
      </Route>
      <Route path="/shoppingcar/2">
        <CashStep2 />
      </Route>
      <Route path="/shoppingcar/3">
        <CashStep3 />
      </Route>
      <Route path="/shoppingcar/">
        <Null />
      </Route>
    </Switch>
  )
}

export default CarRoute
