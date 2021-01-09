import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../main/Header'
import MyFooter from '../main/MyFooter'

import ItinRoute from '../Itinerary/ItinRoute'
import Member from '../../pages/Member'
import ProductsRoute from '../products/ProductsRoute'
import LineChart from '../../pages/LineChart '
import BuyProducts from '../../pages/BuyProducts/BuyProducts'
import AddTravelBuddies from '../../pages/AddTravelBuddies'

import CashStep1 from '../products/Cash/CashStep1'
import CashStep2 from '../products/Cash/CashStep2'
import CashStep3 from '../products/Cash/CashStep3'
import ScrollToTop from './ScrollToTop'

function MainRoute() {
  return (
    <>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route path="/shoppingcar-1">
            <CashStep1 />
          </Route>
          <Route path="/shoppingcar-2">
            <CashStep2 />
          </Route>
          <Route path="/shoppingcar-3">
            <CashStep3 />
          </Route>
          <Route path="/myAccount">
            <Member />
          </Route>
          <Route path="/itinerary">
            <ItinRoute />
          </Route>
          <Route path="/products">
            <ProductsRoute />
          </Route>
          <Route path="/LineChart">
            <LineChart />
          </Route>
          <Route path="/Buy">
            <BuyProducts />
          </Route>

          <Route path="/travelBuddy">
            <AddTravelBuddies />
          </Route>
        </Switch>
      </ScrollToTop>
      <MyFooter />
    </>
  )
}

export default MainRoute
