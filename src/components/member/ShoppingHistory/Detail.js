import React from 'react'

function Test(props) {
  const {
    ticketNumber,
    PurchaseDate,
    className,
    ticketType,
    price,
    payfor,
    userName,
    phone,
    mail,
    birthday,
    gender,
    many,
  } = props
  console.log(props)
  return (
    <>
      <div className="background">
        <div className="product-number">
          <div className="inside-detail">
            <div>
              <h4>訂單編號</h4>
              <h5>{ticketNumber}</h5>
            </div>
            <hr />
            <div>
              <h4>購買日期</h4>
              <h5>{PurchaseDate}</h5>
            </div>
            <hr />
            <div>
              <h4>講座名稱</h4>
              <h5>{className}</h5>
            </div>
            <hr />
            <div>
              <h4>票種</h4>
              <h5>{ticketType}</h5>
            </div>
            <hr />
            <div>
              <h4>張數</h4>
              <h5>{many}</h5>
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
              <h4>姓名</h4>
              <h5>{userName}</h5>
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
          </div>
        </div>
      </div>
    </>
  )
}
export default Test
