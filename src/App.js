import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//
//header footer wrapper
//
//pages
import Itinerary from '../src/pages/Itinerary'
import Member from './pages/Member'
import SearchBar from './components/main/SearchBar'
import Footer from './components/main/Footer'
import Header from './components/main/Header'



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
        <Link to="/search">SearchBar</Link>

        <Switch>
          <Route path="/member">
            <Member />
          </Route>
          <Route path="/itinerary">
            <Itinerary />
          </Route>
          <Route path="/search">
            <SearchBar />
          </Route>
          <Route path="/">
            <h1>Hello World</h1>
          </Route>
        </Switch>
        <Header />
        <Footer />
      </>
    </Router>
  )
}

export default App
