//購買明細
import React from 'react'
import { Table, Button } from 'react-bootstrap'
import Pages from '../../main/Pages'
import './history-table.scss'
import { useHistory } from 'react-router-dom'

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

function shoppingTable({
  id,
  date,
  ticketNumber,
  title,
  many,
  ticket,
  price,
  payfor,
  name,
  gender,
  phone,
  mail,
  birthday,
}) {
  return (
    <>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>日期</th>
            <th>編號</th>
            <th>數量</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{date}</td>
            <td>{ticketNumber}</td>
            <td>{many} 張</td>
            <td>NT$ {price}</td>
            <td>
              <DetailButton />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function ShoppingHistory() {
  return (
    <>
      <div className="table-history">
        <shoppingTable
          id="1"
          data="2020/12/25"
          ticketNumber="1313869028421103-1-7"
          many="1"
          price="400"
        />
        <Pages />
      </div>
    </>
  )
}

export default ShoppingHistory
