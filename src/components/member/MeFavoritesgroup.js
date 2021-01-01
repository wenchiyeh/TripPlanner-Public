//我的揪團
import React from 'react'
function MeFavoritesgroup() {
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters me-favorites-back-style">
          <div className="col-md-4">
            <img
              // 要放絕對路徑
              src="http://localhost:3000/images/DSC_7437-37.jpg"
              className="card-img img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-8 align-items-end">
            <div className="card-body">
              <h3 className="card-title">台南蔥油餅吃到飽之旅台南蔥油餅</h3>
              <p>icon 2020/12/31 - 2021/01/01</p>
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
export default MeFavoritesgroup
