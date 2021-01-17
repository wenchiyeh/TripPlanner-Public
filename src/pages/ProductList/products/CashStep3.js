import React from 'react'
import Icons from './Icons'
import './cash.scss'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CashStep3({
  ticketNumber,
  classDate,
  className,
  ticket_type,
  price,
  payfor,
  purchaseDate,
  user_name,
  gender,
  phone,
  mail,
  birthday,
}) {
  return (
    <>
      <div className="In-the-car">
        <div className="car-three">
          <Icons />
        </div>
        <div className="step3-main">
          <h4 className="done">訂單完成</h4>
          <div className="show-the-product">
            <div className="product-number">
              <div>
                <h3>商品編號</h3>
                <h3>{ticketNumber}</h3>
              </div>

              <img src="/images/classPhoto/qrcode.jpg" alt="qrcode" />
            </div>
            <div className="inside-detail">
              <div>
                <h4>活動日期</h4>
                <h5>{classDate}</h5>
              </div>
              <hr />
              <div>
                <h4>講座名稱</h4>
                <h5>{className}</h5>
              </div>
              <hr />
              <div>
                <h4>票種</h4>
                <h5>{ticket_type}</h5>
              </div>
              <hr />
              <div>
                <h4>價格</h4>
                <h5>{price}</h5>
              </div>
              <hr />
              <div>
                <h4>付款方式</h4>
                <h5>{payfor}</h5>
              </div>
              <hr />
              <div>
                <h4>購買日期</h4>
                <h5>{purchaseDate}</h5>
              </div>
              <hr />
              <div>
                <h4>姓名</h4>
                <h5>{user_name}</h5>
              </div>
              <hr />
              <div>
                <h4>性別</h4>
                <h5>{gender}</h5>
              </div>
              <hr />
              <div>
                <h4>電話</h4>
                <h5>{phone}</h5>
              </div>
              <hr />
              <div>
                <h4>電子信箱</h4>
                <h5>{mail}</h5>
              </div>
              <hr />
              <div>
                <h4>出生日期</h4>
                <h5>{birthday}</h5>
              </div>
              <hr />
              <Link to="/" className="gohome">
                <Button variant="info">返回首頁</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CashStep3
