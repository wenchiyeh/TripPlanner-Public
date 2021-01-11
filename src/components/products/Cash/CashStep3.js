import React from 'react'
import IconRouter from './IconRouter'
import './cash.scss'
import { Button } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'

function CashStep3() {
  return (
    <>
      <div className="In-the-car">
        <IconRouter />
        <div className="step3-main">
          <h4 className="done">訂單完成</h4>
          <div className="show-the-product">
            <div className="product-number">
              <h3>商品編號</h3>
              <h3>1313869028421103-1-7</h3>
            </div>
            <div className="inside-detail">
              <div>
                <h4>購買日期</h4>
                <h5>2020-12-29</h5>
              </div>
              <hr />
              <div>
                <h4>講座名稱</h4>
                <h5>雪季登山安全與準備 | 登山新手村 - 拼圖戶外生活</h5>
              </div>
              <hr />
              <div>
                <h4>票種</h4>
                <h5>早鳥票</h5>
              </div>
              <hr />
              <div>
                <h4>價格</h4>
                <h5>200</h5>
              </div>
              <hr />
              <div>
                <h4>付款方式</h4>
                <h5>visa</h5>
              </div>
              <hr />
              <div>
                <h4>購買日期</h4>
                <h5>2020-12-29</h5>
              </div>
              <hr />
              <div>
                <h4>姓名</h4>
                <h5>史惠全</h5>
              </div>
              <hr />
              <div>
                <h4>性別</h4>
                <h5>男</h5>
              </div>
              <hr />
              <div>
                <h4>電話</h4>
                <h5>0912345678</h5>
              </div>
              <hr />
              <div>
                <h4>電子信箱</h4>
                <h5>123456@gmail.com</h5>
              </div>
              <hr />
              <div>
                <h4>出生日期</h4>
                <h5>1997-09-04</h5>
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
export default withRouter(CashStep3)
