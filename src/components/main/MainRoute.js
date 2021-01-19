import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'

import ItinRoute from '../Itinerary/ItinRoute'
import Member from '../../pages/Member'
import ProductsRoute from '../../pages/ProductList/ProductsRoute'
import LineChart from '../../pages/LineChart '
import TravelBuddiesRoute from '../TravelBuddies/TravelBuddiesRoute'

function MainRoute() {
  let history = useHistory()
  //console.log('主路由', member)
  //const member = useState(1)

  return (
    <>
      <Switch>
        <Route path="/myAccount">
          {localStorage.getItem('userName') ? (
            <Member />
          ) : (
            history.push('/login')
          )}
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
