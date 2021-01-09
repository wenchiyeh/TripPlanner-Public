import React, { useState, useEffect } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import Pages from '../../main/Pages'
import './history-table.scss'
import { Historydata } from './Historydata'
import ＭodalPages from './ＭodalPages'
function ShoppingHistory() {
  // Modal
  const [lgShow, setLgShow] = useState(false)

  //json
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
      <div className="table-history">
        <Table className="table table-bordered table-striped">
          <thead className="thead-light">
            <th>#</th>
            <th>訂單編號</th>
            <th>購買日期</th>
            <th>張數</th>
            <th>價格</th>
            <th></th>
          </thead>
          <tbody>
            {productHistory.map((v, i) => (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.ticketNumber}</td>

                <td>{v.PurchaseDate}</td>

                <td>{v.many}張</td>
                <td>NT$ {v.price}</td>
                <td>
                  <Button variant="info" onClick={() => setLgShow(true)}>
                    明細
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            className="background"
          >
            <Modal.Header closeButton>
              {productHistory.map((v, i) => (
                <Modal.Title className="modal-title-h4 product-number" key={i}>
                  <h3>商品編號 {v.ticketNumber}</h3>
                </Modal.Title>
              ))}
            </Modal.Header>
            <Modal.Body>
              <ＭodalPages />
            </Modal.Body>
          </Modal>
        </Table>

        <Pages />
      </div>
    </>
  )
}

export default ShoppingHistory
