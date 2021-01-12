import React, { useState, useEffect } from 'react'
import { Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import MyBreadCrumb from '../components//main/MyBreadCrumb/MyBreadCrumb'
import SearchBar from '../components//main/SearchBar'
import CardListPublic from '../components//main/CardListPublic'
import Pages from '../components//main/Pages'
import Carousel from '../components/TravelBuddies/Carousel'

function TravelBuddies(props) {
  const [searchFilter, setSearchFilter] = useState({})
  let history = useHistory()
  function createTravelBuddies() {
    history.push('/travelBuddies/new')
  }
  useEffect(() => {
    console.log(searchFilter)
  }, [searchFilter])
  return (
    <>
      <div className="container itin-close-wrap">
        <MyBreadCrumb />
        <div className="d-flex justify-content-between">
          <h1>旅行揪團</h1>
          <Button variant="info" size="sm" onClick={createTravelBuddies}>
            建立揪團
          </Button>
        </div>
      </div>
      <Carousel />
      <div className="container">
        <Col md={12}>
          <SearchBar setSearchFilter={setSearchFilter} />
        </Col>
        <CardListPublic />
        <Pages />
      </div>
    </>
  )
}

export default TravelBuddies
