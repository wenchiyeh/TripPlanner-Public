import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ShoppingHistory from './ShoppingHistory'
// import { Historydata } from './Historydata'
import Detail from './Detail'

function HistiryRoute() {
  return (
    <Switch>
      <Route path="/myAccount/historyOrder/:id">
        <Detail />
      </Route>
      <Route exact path="/myAccount/historyOrder">
        <ShoppingHistory />
      </Route>
    </Switch>
  )
}

export default HistiryRoute
