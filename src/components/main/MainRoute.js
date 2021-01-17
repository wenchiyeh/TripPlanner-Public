import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import ItinRoute from '../Itinerary/ItinRoute'
import Member from '../../pages/Member'
import ProductsRoute from '../../pages/ProductList/ProductsRoute'
import LineChart from '../../pages/LineChart '
import TravelBuddiesRoute from '../TravelBuddies/TravelBuddiesRoute'

import CarRoute from '../products/CarRoute'

function MainRoute() {
  //console.log('主路由', member)
  //const member = useState(1)

  return (
    <>
      <Switch>
        <Route path="/shoppingcar">
          <CarRoute />
        </Route>
        <Route path="/myAccount/:id">
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
