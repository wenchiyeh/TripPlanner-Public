import React, { useState, useEffect } from 'react'
import { Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
//
import MyBreadCrumb from '../components//main/MyBreadCrumb'
import SearchBar from '../components//main/SearchBar'
import CardListPublic from '../components//main/CardListPublic'
import Pages from '../components//main/Pages'
import Carousel from '../components/travelBuddy/Carousel'

function Itinerary(props) {
  const [searchFilter, setSearchFilter] = useState({})
  let history = useHistory()
  function createItinerary() {
    history.push('/itinerary/new')
  }
  useEffect(() => {
    console.log(searchFilter)
  }, [searchFilter])
  return (
    <>
      <div className="container">
        <MyBreadCrumb />
        <div className="d-flex justify-content-between px-3">
          <h1>行程規劃</h1>
          <Button variant="info" onClick={createItinerary}>
            建立行程
          </Button>
        </div>
      </div>
      <Carousel />
      <div className="container">
        <Col md={8}>
          <SearchBar setSearchFilter={setSearchFilter} />
        </Col>
        <CardListPublic />
        <Pages />
      </div>
    </>
  )
}

export default Itinerary
// 檔案負責人: 柯政安
