import React from 'react'

function ShoppingHirstory() {
  return (
    <>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">日期</th>
            <th scope="col">編號</th>
            <th scope="col">數量</th>
            <th scope="col">價格</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>2020/11/18</td>
            <td>1313869028421103-1-7</td>
            <td>1張</td>
            <td>NT$ 4000</td>
            <td>
              <button>明細</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export default ShoppingHirstory
