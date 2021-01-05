import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//
//header footer wrapper
//
//pages
import Itinerary from '../src/pages/Itinerary'
import Member from './pages/Member'
import SearchBar from './components/main/SearchBar'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import LineChart from './pages/LineChart '
import AddTravelBuddies from './pages/AddTravelBuddies'

function App() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/myAccount">Member</Link>
        <Link to="/itinerary">Itinerary</Link>
        <Link to="/group">Group</Link>
        <Link to="/cash">Cash</Link>
        <Link to="/product">Product</Link>
        <Link to="/search">SearchBar</Link>

        <Link to="/login">Login</Link>
        <Link to="/LineChart">LineChart</Link>
        <Link to="/addTravelBuddies">addTravelBuddies</Link>

        <Switch>
          <Route path="/myAccount">
            <Member />
          </Route>
          <Route path="/itinerary">
            <Itinerary />
          </Route>
          <Route path="/search">
            <SearchBar />
          </Route>
          <Route path="/product">
            <ProductList />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/LineChart">
            <LineChart />
          </Route>
          <Route path="/addTravelBuddies">
            <AddTravelBuddies />
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
