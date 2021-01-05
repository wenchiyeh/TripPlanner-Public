import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//
//header footer wrapper
// import Header from './components/main/Header'
// import MyFooter from './components/main/MyFooter'
//
//pages
import ItinRoute from './components/Itinerary/ItinRoute'
import Member from './pages/Member'
import ProductsRoute from './components/products/ProductsRoute'
import TravelBuddyRoute from './components/travelBuddy/TravelBuddyRoute'
import Login from './pages/Login'
import LineChart from './pages/LineChart '
import BuyProducts from './pages/BuyProducts/BuyProducts'
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
        <Link to="/products">Product</Link>
        <Link to="/login">Login</Link>
        <Link to="/LineChart">LineChart</Link>
        <Link to="/buy">buy</Link>
        <Link to="/travelBuddy">TravelBuddy</Link>

        <Route exact path="/">
          <h1>Hello World</h1>
        </Route>
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/LineChart">
            <LineChart />
          </Route>
          <Route path="/buy">
            <BuyProducts />
          </Route>

          <Route path="/travelBuddy">
            <TravelBuddyRoute />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
