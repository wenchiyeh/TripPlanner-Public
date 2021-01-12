import React from 'react'
import { Table } from 'react-bootstrap'
// import Pages from '../../main/Pages'
import './history-table.scss'
import TableTest from './TableTest'

let orderhirstory = require('./orderhirstory.json')
let TestData = orderhirstory[2].data

function ShoppingHistory() {
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
            {TestData.map((v, i) => (
              <tr key={i}>
                <TableTest
                  id={v.id}
                  PurchaseDate={v.purchaseDate}
                  ticketNumber={v.ticketNumber}
                  many={v.many}
                  price={v.price}
                />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default ShoppingHistory
