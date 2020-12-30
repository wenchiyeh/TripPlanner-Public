import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Member from './pages/Member'
//
//header footer wrapper
//
//pages
import Itinerary from '../src/pages/Itinerary'
import Login from './pages/Login'

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
        <Link to="/login">Login</Link>
        <Switch>
          <Route path="/member">
            <Member />
          </Route>
          <Route path="/itinerary">
            <Itinerary />
          </Route>
          <Route path="/login">
            <Login />
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
