//購買明細
import React from 'react'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Pages from '../main/Pages'

function ShoppingHirstory() {
  return (
    <>
      <div className="table-hirstory">
        <Table striped bordered hover>
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
              <td>1</td>
              <td>2020/11/18</td>
              <td>1313869028421103-1-7</td>
              <td>1張</td>
              <td>NT$ 4000</td>
              <td>
                <Button variant="info">明細</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2020/11/18</td>
              <td>1313869028421103-1-7</td>
              <td>1張</td>
              <td>NT$ 4000</td>
              <td>
                <Button variant="info">明細</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2020/11/18</td>
              <td>1313869028421103-1-7</td>
              <td>1張</td>
              <td>NT$ 4000</td>
              <td>
                <Button variant="info">明細</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2020/11/18</td>
              <td>1313869028421103-1-7</td>
              <td>1張</td>
              <td>NT$ 4000</td>
              <td>
                <Button variant="info">明細</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pages />
      </div>
    </>
  )
}
export default ShoppingHirstory
