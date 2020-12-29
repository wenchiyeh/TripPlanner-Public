import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//
//header footer wrapper
//
//pages
import Itinerary from '../src/pages/Itinerary'

function App() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/member">Member</Link>
        <Link to="/itinerary">Itinerary</Link>
        <Link to="/group">Group</Link>
        <Link to="/cash">Cash</Link>
        <Link to="/product">Product</Link>

        <Switch>
          <Route path="/itinerary">
            <Itinerary />
          </Route>
          <Route path="/">
            <h1>Hello World</h1>
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
