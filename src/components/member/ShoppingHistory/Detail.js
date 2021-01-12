import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'

// let orderhirstory = require('./orderhirstory.json')
// let orderDetail = orderhirstory[2].data

function Detail() {
  let { id } = useParams()
  const [orderDetail, setOrderDetail] = useState([])
  async function getOrderDetail(props) {
    try {
      const response = await fetch('http://localhost:5000/historyOrder', {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        setOrderDetail(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getOrderDetail()
  }, [])

  return (
    orderDetail.length > 0 && (
      <>
        <div className="background">
          <div className="product-number">
            <div className="inside-detail">
              <div>
                <h4>訂單編號</h4>
                <h5>{orderDetail[id].ticketNumber}</h5>
              </div>
              <hr />
              <div>
                <h4>購買日期</h4>
                <h5>{orderDetail[id].purchaseDate}</h5>
              </div>
              <hr />
              {/* <div>
              <h4>講座名稱</h4>
              <h5>{orderDetail[id].className}</h5>
            </div>
           <hr />*/}
              <div>
                <h4>票種</h4>
                <h5>{orderDetail[id].ticketId}</h5>
              </div>
              <hr />
              <div>
                <h4>張數</h4>
                <h5>{orderDetail[id].many}</h5>
              </div>
              <hr />
              {/*     <div>
              <h4>價格</h4>
              <h5>{orderDetail[id].price}</h5>
            </div>
            <hr />*/}
              <div>
                <h4>付款方式</h4>
                <h5>{orderDetail[id].payfor}</h5>
              </div>
              <hr />

              {/*  <div>
              <h4>姓名</h4>
              <h5>{orderDetail[id].userName}</h5>
            </div>
            <hr />
            <div>
              <h4>性別</h4>
              <h5>{orderDetail[id].gender}</h5>
            </div>
            <hr />
            <div>
              <h4>電話</h4>
              <h5>{orderDetail[id].phone}</h5>
            </div>
            <hr />
            <div>
              <h4>電子信箱</h4>
              <h5>{orderDetail[id].mail}</h5>
            </div>
            <hr />
            <div>
              <h4>出生日期</h4>
              <h5>{orderDetail[id].birthday}</h5>
            </div>
            <hr />*/}
            </div>
          </div>
        </div>
      </>
    )
  )
}
export default Detail
