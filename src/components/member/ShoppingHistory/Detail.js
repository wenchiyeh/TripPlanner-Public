import React from 'react'
import { useParams } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'

let orderhirstory = require('./orderhirstory.json')
let TestData = orderhirstory[2].data

function Detail() {
  let { id } = useParams()

  return (
    <>
      <div className="background">
        <div className="product-number">
          <div className="inside-detail">
            <div>
              <h4>訂單編號</h4>
              <h5>{TestData[id].ticketNumber}</h5>
            </div>
            <hr />
            <div>
              <h4>購買日期</h4>
              <h5>{TestData[id].purchaseDate}</h5>
            </div>
            <hr />
            <div>
              <h4>講座名稱</h4>
              <h5>{TestData[id].className}</h5>
            </div>
            <hr />
            <div>
              <h4>票種</h4>
              <h5>{TestData[id].ticketType}</h5>
            </div>
            <hr />
            <div>
              <h4>張數</h4>
              <h5>{TestData[id].many}</h5>
            </div>
            <hr />
            <div>
              <h4>價格</h4>
              <h5>{TestData[id].price}</h5>
            </div>
            <hr />
            <div>
              <h4>付款方式</h4>
              <h5>{TestData[id].payfor}</h5>
            </div>
            <hr />

            <div>
              <h4>姓名</h4>
              <h5>{TestData[id].userName}</h5>
            </div>
            <hr />
            <div>
              <h4>性別</h4>
              <h5>{TestData[id].gender}</h5>
            </div>
            <hr />
            <div>
              <h4>電話</h4>
              <h5>{TestData[id].phone}</h5>
            </div>
            <hr />
            <div>
              <h4>電子信箱</h4>
              <h5>{TestData[id].mail}</h5>
            </div>
            <hr />
            <div>
              <h4>出生日期</h4>
              <h5>{TestData[id].birthday}</h5>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}
export default Detail
