//我的收藏
import React from 'react'
import LinkMeFavorites from './member/LinkMeFavorites'

function MeFavorites() {
  const cardstyle = {
    width: '745px',
    hight: '200px',
  }
  const cardimgstyle = {
    width: '270px',
    hight: '185px',
  }
  return (
    <>
      <div className="card mb-3 me-favorites-style" style={cardstyle}>
        <LinkMeFavorites />
        <hr />
        <div className="row no-gutters me-favorites-back-style">
          <div className="col-md-4">
            <img
              // 要放絕對路徑
              src="http://localhost:3000/images/DSC_7437-37.jpg"
              className="card-img img-fluid"
              alt="..."
              style={cardimgstyle}
            />
          </div>
          <div className="col-md-8 align-items-end">
            <div className="card-body">
              <h3 className="card-title">台南蔥油餅吃到飽之旅台南蔥油餅</h3>
              <br />
              <br />
              <p className="card-text">
                <small className="text-muted">icon&svg</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MeFavorites
