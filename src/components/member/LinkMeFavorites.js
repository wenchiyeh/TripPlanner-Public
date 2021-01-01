//收藏標籤
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MeFavoritesgroup from '../member/MeFavoritesgroup'
function LinkMeFavorites() {
  return (
    <Router>
      <>
        <div className="Link-Me-Favorites">
          <Link to="/mefavorites111">我的行程</Link>
          <Link to="/meFavoritesgroup">我的揪團</Link>
          <Link to="/mefavorites333">我的講座</Link>
          <hr />
          <Switch>
            <Route path="/mefavorites111">
              <MeFavoritesgroup />
            </Route>
            <Route path="/meFavoritesgroup">
              <MeFavoritesgroup />
            </Route>
            <Route path="/mefavorites333">
              <MeFavoritesgroup />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  )
}
export default LinkMeFavorites
