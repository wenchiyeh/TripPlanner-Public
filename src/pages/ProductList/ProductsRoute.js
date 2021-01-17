import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductList from './ProductList'
import BuyProducts from './BuyProducts/BuyProducts'
import { useParams } from 'react-router-dom'

import Null from './products/Null'
import CashStep1 from './products/CashStep1'
import CashStep3 from './products/CashStep3'

function MapProduct(props) {
  let { product_id } = useParams()

  const [productData, setProductData] = useState([])
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
          changeData={props.changeData}
        />
      ))}
    </>
  )
}

function CarOneAndTwo(props) {
  const [inCarOne, setInCarOne] = useState([])
  let { product_id } = useParams()

  async function getInCarOne(props) {
    try {
      const response = await fetch(
        `http://localhost:5000/productList/car1/${product_id}`,
        {
          method: 'get',
        }
      )
      if (response.ok) {
        const data = await response.json()
        setInCarOne(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    getInCarOne()
  }, [])
  return (
    <>
      {inCarOne.length > 0 && (
        <CashStep1
          className={inCarOne[0].className}
          classDate={inCarOne[0].classDate}
          ticket_price={inCarOne[0].ticket_price}
          showTicketType={props.ticketData}
          ticketData={props.ticketData}
        />
      )}
    </>
  )
}

function GoRoute() {
  const [ticketData, setTicketData] = useState({
    earlyPrice: 0,
    singlePrice: 0,
    groupPrice: 0,
  })
  function changeData(earlyPrice, singlePrice, groupPrice) {
    setTicketData({
      earlyTicket: earlyPrice,
      singleTicket: singlePrice,
      groupTicket: groupPrice,
    })
  }

  function CarThree(props) {
    const [inCarThree, setInCarThree] = useState([])
    let { product_id } = useParams()

    async function getInCarThree(props) {
      try {
        const response = await fetch(
          `http://localhost:5000/productList/car3/${product_id}`,
          {
            method: 'post',
          }
        )
        if (response.ok) {
          const data = await response.json()
          setInCarThree(data)
        }
      } catch (err) {
        alert('無法得到伺服器資料，請稍後再重試')
        console.log(err)
      }
    }
    useEffect(() => {
      getInCarThree()
    }, [])
    return (
      <>
        {inCarThree.length > 0 && (
          <CashStep3
            ticketNumber={inCarThree[0].ticketNumber}
            className={inCarThree[0].className}
            ticket_type={inCarThree[0].ticket_type}
            price={inCarThree[0].price}
            payfor={inCarThree[0].payfor}
            purchaseDate={inCarThree[0].purchaseDate}
            user_name={inCarThree[0].user_name}
            gender={inCarThree[0].gender}
            phone={inCarThree[0].phone}
            mail={inCarThree[0].mail}
            birthday={inCarThree[0].birthday}
          />
        )}
      </>
    )
  }

  return (
    <Switch>
      <Route path="/productList/view/:product_id">
        <MapProduct changeData={changeData} />
      </Route>
      <Route path="/productList/car1/:product_id">
        <CarOneAndTwo tichectButton={true} ticketData={ticketData} />
      </Route>
      <Route path="/productList/car1/:product_id">
        <CarOneAndTwo tichectButton={false} ticketData={ticketData} />
      </Route>
      <Route path="/productList/car3/:product_id">
        <CarThree />
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

export default GoRoute
