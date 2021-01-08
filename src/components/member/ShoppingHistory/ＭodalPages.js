import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import './history-table.scss'
import { data } from './data'

function ＭodalPages(props) {
  const [lgShow, setLgShow] = useState(false)
  const [productHistory, setProductHistory] = useState([])

  useEffect(() => {
    fetch('https://localhost:3000/components/member/ShoppingHistory/data')
      .then((res) => res.json())
      .then((result) => {
        setProductHistory(data)
      })
  }, [])

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="background"
      >
        <Modal.Header closeButton>
          {productHistory.map((productHistory) => (
            <Modal.Title
              className="modal-title-h4 product-number"
              key={productHistory.id}
            >
              <h3>商品編號</h3>
              <h3> {productHistory.ticketNumber} </h3>
            </Modal.Title>
          ))}
        </Modal.Header>
        <Modal.Body>
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
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ＭodalPages
