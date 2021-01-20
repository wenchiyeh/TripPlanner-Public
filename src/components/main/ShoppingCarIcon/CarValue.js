//通知表單
import React from 'react'
import './shoppingCar.scss'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function CarNotice() {
  const productData = JSON.parse(localStorage.getItem('product_Data'))

  const dispaly = (
    <>
      <div className="">
        <table className="not-toble-ma-bt table-hover">
          <thead>
            <tr>
              <th>感興趣的講座</th>
            </tr>
          </thead>
          <tbody>
            <tr className="d-flex new-not-flex">
              <td className="not-td-left">{productData.className}</td>
              <td className="not-td-right">{productData.classDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )

  const showData = (
    <>
      <div className="">
        <table className="not-toble-ma-bt table-hover">
          <thead>
            <tr>
              <th>有興趣的講座</th>
              <Link>
                <BsFillTrashFill className="trash" />
              </Link>
            </tr>
          </thead>
          <tbody>
            <tr className="d-flex new-not-flex">
              <td className="not-td-left">購物車內現在沒有東西喔</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )

  return productData == null ? showData : dispaly
}

export default CarNotice
