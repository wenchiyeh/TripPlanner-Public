import React from 'react'
import { Route, Link, Switch, useParams } from 'react-router-dom'
import CashStep1 from './CashStep1'
import CashStep2 from './CashStep2'
import CashStep3 from './CashStep3'

function StepChoes() {
  return (
    <>
      <Link to="/shoppingcar/step1">step1</Link>
      <Link to="/shoppingcar/step2">step2</Link>
      <Link to="/shoppingcar/step3">step3</Link>
      <Link to="/shoppingcar">shoppingcar</Link>

      <Switch>
        <Route path="shoppingcar/step1">
          <CashStep1 />
        </Route>
        <Route path="/shoppingcar/step2">
          <CashStep2 />
        </Route>
        <Route path="/shoppingcar/step3">
          <CashStep3 />
        </Route>
        <Route path="/shoppingcar">
          <CashStep3 />
        </Route>
      </Switch>
    </>
  )
}

export default StepChoes
