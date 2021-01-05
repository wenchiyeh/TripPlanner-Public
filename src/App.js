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
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <>
        <Home />
        <Header />

        <Footer />
      </>
    </Router>
  )
}

export default App
