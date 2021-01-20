import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/main/Header'
import MyFooter from './components/main/MyFooter'

import Login from './pages/Login'
import Sigon from './pages/sign'
import Home from './pages/Home'
import Forgetpassword from './pages/forgetpassword'
//
import MainRoute from './components/main/MainRoute'
import ScrollToTop from './components/main/ScrollToTop'
function App() {
  const [auth, setAuth] = React.useState(localStorage.getItem('userName') || '')
  React.useEffect(() => {
    setAuth(localStorage.getItem('userName'))
  }, [auth])
  return (
    <Router>
      <>
        <Header auth={auth} setAuth={setAuth} />
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/login">
              <Login auth={auth} setAuth={setAuth} />
            </Route>

            <Route exact path="/sigon">
              <Sigon />
            </Route>

            <Route path="/forgetpassword">
              <Forgetpassword />
            </Route>

            <Route path="/">
              <MainRoute setAuth={setAuth} />
            </Route>
          </Switch>
        </ScrollToTop>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
