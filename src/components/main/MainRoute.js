import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ItinRoute from '../Itinerary/ItinRoute'
import Member from '../../pages/Member'
import ProductsRoute from '../../pages/ProductList/ProductsRoute'
import LineChart from '../../pages/LineChart '
import TravelBuddiesRoute from '../TravelBuddies/TravelBuddiesRoute'

function MainRoute() {
  return (
    <>
      <Switch>
<<<<<<< HEAD
        <Route path="/myAccount">
=======
        <Route path="/shoppingcar">
          <CarRoute />
        </Route>
        <Route path="/myAccount/:id">
>>>>>>> ce07baf96e66f34c46cf2d4e30666d9fa5067e59
          <Member />
        </Route>
        <Route path="/itinerary">
          <ItinRoute />
        </Route>
        <Route path="/productList">
          <ProductsRoute />
        </Route>
        <Route path="/LineChart">
          <LineChart />
        </Route>
        <Route path="/travelBuddies">
          <TravelBuddiesRoute />
        </Route>
      </Switch>
    </>
  )
}

export default MainRoute
