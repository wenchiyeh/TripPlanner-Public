import React from 'react'
import { Route, Link, Switch, useParams } from 'react-router-dom'
import Header from '../main/Header'
import MyFooter from '../main/MyFooter'

import ItinRoute from '../Itinerary/ItinRoute'
import Member from '../../pages/Member'
import ProductsRoute from '../products/ProductsRoute'
import TravelBuddyRoute from '../travelBuddy/TravelBuddyRoute'
import LineChart from '../../pages/LineChart '
import BuyProducts from '../../pages/BuyProducts/BuyProducts'
import AddTravelBuddies from '../../pages/AddTravelBuddies'
import IconRouter from '../products/Cash/IconRouter'

function MainRoute() {
  return (
    <>
      <Header />
      <Switch>
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
        <Route path="/shoppingcar">
          <IconRouter />
        </Route>
        <Route path="/travelBuddy">
          <TravelBuddyRoute />
        </Route>
      </Switch>
      <MyFooter />
    </>
  )
}

export default MainRoute
