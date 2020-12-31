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
            <th scope="row">1</th>
            <td>2020/11/18</td>
            <td>1313869028421103-1-7</td>
            <td>1張</td>
            <td>NT$ 4000</td>
            <td>
              <button>明細</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div aria-label="Page navigation example" className="page">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
export default ShoppingHirstory
