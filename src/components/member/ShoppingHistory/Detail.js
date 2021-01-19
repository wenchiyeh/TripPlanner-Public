import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  let { id } = useParams()
  const [isLoading, setIsLoading] = useState(1)

  const [orderDetail, setOrderDetail] = useState([])
  async function getOrderDetail(props) {
    try {
      const response = await fetch(`http://localhost:5000/historyOrder/${id}`, {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        setOrderDetail(data)
        setTimeout(() => {
          if (data.length === 0) {
            setIsLoading(3)
          } else {
            setIsLoading(0)
          }
        }, 0)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }

  const dispalyDetail = orderDetail.length > 0 && (
    <>
      <div className="background">
        <div className="product-number">
          <div className="inside-detail">
            <div>
              <h4>訂單編號</h4>
              <h5>{orderDetail[0].ticketNumber}</h5>
            </div>
            <hr />
            <div>
              <h4>購買日期</h4>
              <h5>{orderDetail[0].purchaseDate}</h5>
            </div>
            <hr />
            <div>
              <h4>講座名稱</h4>
              <h5>{orderDetail[0].class_Name}</h5>
            </div>
            <hr />
            {/*<div>
              <h4>票種</h4>
              <h5>{orderDetail[0].ticket_Name}</h5>
            </div>
            <hr />*/}
            <div>
              <h4>張數</h4>
              <h5>{orderDetail[0].many}</h5>
            </div>
            <hr />
            {/* <div>
              <h4>價格</h4>
              <h5>{orderDetail[0].ticket_price}</h5>
            </div>
            <hr />*/}
            <div>
              <h4>付款方式</h4>
              <h5>{orderDetail[0].payfor}</h5>
            </div>
            <hr />

            <div>
              <h4>姓名</h4>
              <h5>{orderDetail[0].user_Name}</h5>
            </div>
            <hr />
            <div>
              <h4>性別</h4>
              <h5>{(orderDetail[0].gender = 1 ? '男' : '女')}</h5>
            </div>
            <hr />
            <div>
              <h4>電話</h4>
              <h5>{orderDetail[0].user_phone}</h5>
            </div>
            <hr />
            <div>
              <h4>電子信箱</h4>
              <h5>{orderDetail[0].user_mail}</h5>
            </div>
            <hr />
            <div>
              <h4>出生日期</h4>
              <h5>{orderDetail[0].user_birthday}</h5>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  )

  useEffect(() => {
    getOrderDetail()
  }, [])

  if (isLoading === 0) {
    return dispalyDetail
  } else if (isLoading === 1) {
    return <h1>讀取中</h1>
  } else {
    return <h1>查無此紀錄</h1>
  }
}
export default Detail
