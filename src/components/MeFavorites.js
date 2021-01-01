//收藏標籤頁
import React from 'react'
import LinkMeFavorites from './member/LinkMeFavorites'

function MeFavorites() {
  const cardstyle = {
    width: '745px',
    hight: '200px',
  }
  return (
    <>
      <div className="card mb-3 me-favorites-style" style={cardstyle}>
        <LinkMeFavorites />
      </div>
    </>
  )
}
export default MeFavorites
