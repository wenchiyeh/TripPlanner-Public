import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductList from './ProductList'
import BuyProducts from './BuyProducts/BuyProducts'
import { useParams } from 'react-router-dom'

import Null from './products/Null'
import CashStep1 from './products/CashStep1'
import CashStep3 from './products/CashStep3'

function MapProduct() {
  const [productData, setProductData] = useState([])

  let { product_id } = useParams()

  async function getProductData(props) {
    try {
      const response = await fetch(
        `http://localhost:5000/productList/${product_id}`,
        {
          method: 'get',
        }
      )
      if (response.ok) {
        const data = await response.json()
        setProductData(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getProductData()
  }, [])

  return (
    <>
      {productData.map((v, i) => (
        <BuyProducts
          key={i}
          earlyTicket={'早鳥票'}
          singleTicket={'單人票'}
          groupTicket={'雙人票'}
          earlyPrice={0}
          singlePrice={0}
          groupPrice={0}
          classPhoto={v.classPhoto}
          className={v.className}
          classDate={v.classDate}
          classTimeStart={v.classTimeStart}
          classTimeEnd={v.classTimeEnd}
          location={v.location}
          address={v.address}
          ticket_type={v.ticket_type}
          ticket_price={v.ticket_price}
          warning={v.warning}
          classValue={v.classValue}
          classOutline={v.classOutline}
          teacher_name={v.teacher_name}
          needToKnow={v.needToKnow}
          teacher_photo={v.teacher_photo}
          teacher_history={v.teacher_history}
          mapSrc={v.mapSrc}
          teacher_title={v.teacher_title}
        />
      ))}
    </>
  )
}
function ItinRoute() {
  return (
    <Switch>
      <Route path="/productList/view/:product_id">
        <MapProduct />
      </Route>
      <Route path="/productList/car1/:product_id">
        <CashStep1 tichectButton={true} />
      </Route>
      <Route path="/productList/car1/:product_id">
        <CashStep1 tichectButton={false} />
      </Route>
      <Route path="/productList/car3/:product_id">
        <CashStep3 />
      </Route>
      <Route path="/productList/car">
        <Null />
      </Route>
      <Route exact path="/productList">
        <ProductList />
      </Route>
    </Switch>
  )
}

export default ItinRoute
