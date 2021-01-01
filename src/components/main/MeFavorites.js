//收藏標籤頁
import React from 'react'
import MeFavoritesstroke from '../member/MeFavoritesstroke'
import MeFavoritesgroup from '../member/MeFavoritesgroup'
import MeFavoritesLecture from '../member/MeFavoritesLecture'
import LinkMeFavorites from '../member/MeFavoritesstroke'
function MeFavorites() {
  return (
    <>
      <div className="card mb-3 me-favorites-style">
        <LinkMeFavorites />
        <MeFavoritesstroke />
        <MeFavoritesgroup />
        <MeFavoritesLecture />
      </div>
    </>
  )
}
export default MeFavorites
