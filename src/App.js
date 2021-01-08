import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//
//header footer wrapper
// import Header from './components/main/Header'
// import MyFooter from './components/main/MyFooter'
//pages
// import ItinRoute from './components/Itinerary/ItinRoute'
// import Member from './pages/Member'
// import ProductsRoute from './components/products/ProductsRoute'
// import TravelBuddyRoute from './components/travelBuddy/TravelBuddyRoute'
// import AddTravelBuddies from './pages/AddTravelBuddies'
import Login from './pages/Login'
import Sigon from './pages/sign'
import BuyProducts from './pages/BuyProducts/BuyProducts'
import Home from './pages/Home'
import Forgetpassword from './pages/forgetpassword'
//
import MainRoute from './components/main/MainRoute'

function App() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        --
        <Link to="/myAccount">Member</Link>
        --
        <Link to="/group">Group</Link>
        --
        <Link to="/shoppingcar-3">Shoppingcar-3</Link>
        --
        <Link to="/login">Login</Link>
        --
        <Link to="/sigon">Sigon</Link>
        --
        <Link to="/buy">Buy</Link>
        --
        <Link to="/GetIn">GetIn</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/sigon">
            <Sigon />
          </Route>

          <Route path="/buy">
            <BuyProducts />
          </Route>

          <Route path="/forgetpassword">
            <Forgetpassword />
          </Route>

          <Route path="/">
            <MainRoute />
          </Route>

          {/* <Switch>
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
            <Route path="/sigon">
              <Sigon />
            </Route>
            <Route path="/buy">
              <BuyProducts />
            </Route>
            <Route path="/cash">
              <Cash />
            </Route>
            <Route path="/travelBuddy">
              <TravelBuddyRoute />
            </Route>
          </Switch> */}
        </Switch>
      </>
    </Router>
  )
}

export default App
