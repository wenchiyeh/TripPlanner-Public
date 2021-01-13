import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
// import Pages from '../../main/Pages'
import './history-table.scss'
import TableTest from './TableTest'

function ShoppingHistory() {
  const [historyOrder, setHistoryOrder] = useState([])
  async function getHistoryOrder(props) {
    try {
      const response = await fetch('http://localhost:5000/historyOrder', {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        setHistoryOrder(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getHistoryOrder()
  }, [])

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

              <th></th>
            </tr>
          </thead>
          <tbody>
            {historyOrder.map((v, i) => (
              <tr key={i}>
                <TableTest
                  id={v.id}
                  PurchaseDate={v.purchaseDate}
                  ticketNumber={v.ticketNumber}
                  many={v.many}
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
