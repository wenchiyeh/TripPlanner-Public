import React, { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import Pages from '../../main/Pages'
import './history-table.scss'
// import Getin from './Getin'
import { data } from './data'
import { useHistory } from 'react-router-dom'

function ShoppingHistory() {
  let history = useHistory()

  function Getin() {
    history.push('/Getin')
  }
  const [productHistory, setProductHistory] = useState([])
  useEffect(() => {
    setProductHistory(data)
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
                  <Button variant="info" onClick={Getin}>
                    明細
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pages />
      </div>
    </>
  )
}

export default ShoppingHistory
