import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function MyBreadCrumb() {
  return (
    <Router>
      <>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">首頁</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>達人講座</Breadcrumb.Item>
        </Breadcrumb>
      </>
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  )
}

export default MyBreadCrumb
