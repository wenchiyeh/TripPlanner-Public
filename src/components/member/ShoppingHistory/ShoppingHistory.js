import React, { useState, useEffect } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import Pages from '../../main/Pages'
import './history-table.scss'
import { Historydata } from './Historydata'
import ModalPage from './ModalPage'

function ShoppingHistory() {
  // Modal
  const [lgShow, setLgShow] = useState(false)

  //json
  // useEffect(() => {
  //   setProductHistory(Historydata)
  // }, [])

  return (
    <>
      <div className="table-history">
        <Table className="table table-bordered table-striped">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>訂單編號</th>
              <th>購買日期</th>
              <th>張數</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Historydata.map((v, i) => (
              <tr>
                <td>{v.id}</td>
                <td>{v.PurchaseDate}</td>

                <td>{v.ticketNumber}</td>

                <td>{v.many}張</td>
                <td>NT$ {v.price}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => setLgShow(true)}
                    textData={2}
                  >
                    明細
                  </Button>
                </td>
              </tr>
            ))}
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
              className="background"
            >
              <Modal.Header closeButton>
                <Modal.Title className="modal-title-h4 product-number">
                  <h3>商品編號</h3>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <ModalPage />
              </Modal.Body>
            </Modal>
          </tbody>
        </Table>

        <Pages />
      </div>
    </>
  )
}

export default ShoppingHistory
