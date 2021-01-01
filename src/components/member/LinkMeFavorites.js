//收藏標籤
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MeFavoritesgroup from '../member/MeFavoritesgroup'
import MeFavoritesLecture from '../member/MeFavoritesLecture'
function LinkMeFavorites() {
  return (
    <Router>
      <>
        <div className="Link-Me-Favorites">
          <Link to="/mefavorites111">我的行程</Link>
          <Link to="/meFavoritesgroup">我的揪團</Link>
          <Link to="/MeFavoritesLecture">我的講座</Link>
          <hr />
          <Switch>
            <Route path="/mefavorites111">
              <MeFavoritesgroup />
            </Route>
            <Route path="/meFavoritesgroup">
              <MeFavoritesgroup />
            </Route>
            <Route path="/MeFavoritesLecture">
              <MeFavoritesLecture />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  )
}
export default LinkMeFavorites
