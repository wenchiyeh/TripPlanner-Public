import React from 'react'
import { Route, Link, Switch, useParams } from 'react-router-dom'
import Itinerary from '../../pages/Itinerary'

function Test() {
  let { id } = useParams()
  return <h1>{id}</h1>
}

function ItinRoute() {
  return (
    <Switch>
      <Route path="/itinerary/view/:id">
        <Test />
      </Route>
      <Route exact path="/itinerary">
        <Itinerary />
      </Route>
    </Switch>
  )
}

export default ItinRoute
