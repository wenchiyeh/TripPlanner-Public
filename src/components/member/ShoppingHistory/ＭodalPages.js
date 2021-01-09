import React, { useState, useEffect } from 'react'
import './history-table.scss'
import { Historydata } from './Historydata'

function ＭodalPages(props) {
  const [productHistory, setProductHistory] = useState([])

  useEffect(() => {
    // fetch('https://localhost:3000/components/member/ShoppingHistory/data')
    //   .then((res) => res.json())
    //   .then((result) => {
    setProductHistory(Historydata)
    // })
  }, [])

  return (
    <>
      {productHistory.map((v, i) => (
        <div className="inside-detail" key={i}>
          <div>
            <h4>購買日期</h4>
            <h5>{v.PurchaseDate}</h5>
          </div>
          <hr />
          <div>
            <h4>講座名稱</h4>
            <h5>{v.className}</h5>
          </div>
          <hr />
          <div>
            <h4>票種</h4>
            <h5>{v.ticketType}</h5>
          </div>
          <hr />
          <div>
            <h4>價格</h4>
            <h5>{v.price}</h5>
          </div>
          <hr />
          <div>
            <h4>付款方式</h4>
            <h5>{v.payfor}</h5>
          </div>
          <hr />

          <div>
            <h4>姓名</h4>
            <h5>{v.userName}</h5>
          </div>
          <hr />
          <div>
            <h4>性別</h4>
            <h5>{v.gender}</h5>
          </div>
          <hr />
          <div>
            <h4>電話</h4>
            <h5>{v.phone}</h5>
          </div>
          <hr />
          <div>
            <h4>電子信箱</h4>
            <h5>{v.mail}</h5>
          </div>
          <hr />
          <div>
            <h4>出生日期</h4>
            <h5>{v.birthday}</h5>
          </div>
          <hr />
        </div>
      ))}
    </>
  )
}

export default ＭodalPages
