//購買明細
import React, { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import Pages from '../../main/Pages'
import './history-table.scss'
import { useHistory } from 'react-router-dom'
import { data } from './data'

function DetailButton() {
  const history = useHistory()
  function getIn() {
    history.push('/getIn')
  }
  return (
    <>
      <Button variant="info" onClick={getIn}>
        明細
      </Button>
    </>
  )
}

function ShoppingHistory() {
  const [productHistory, setProductHistory] = useState([])
  useEffect(() => {
    // 從伺服器得到資料，然後設定到students狀態
    setProductHistory(data)
  }, [])
  return (
    <>
      <div className="table-history">
        <Table className="table table-bordered table-striped">
          <thead className="thead-light">
            <th>訂單編號</th>
            <th>購買日期</th>
            <th>張數</th>
            <th>價格</th>
          </thead>
          <tbody>
            {productHistory.map((v, i) => (
              <tr key={i}>
                <td>
                  <ul>
                    <li>{v.id}</li>
                  </ul>
                </td>
                <td>{v.PurchaseDate}</td>
                <td>{v.many}張</td>
                <td>NT$ {v.price}</td>
                <td>
                  <DetailButton />
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
