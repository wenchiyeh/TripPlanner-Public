import React, { useState, useEffect } from 'react'
import { AiOutlineInbox } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { Container, Button } from 'react-bootstrap'
import './cash.scss'
import MyBreadCrumb from '../../../components/main/MyBreadCrumb/MyBreadCrumb'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Null() {
  const pageUrl = '/images/classPhoto/'
  const productUrl = 'view/'
  //取值
  const aboutClass = JSON.parse(localStorage.getItem('product_id'))
  //確保每次刷新頁面都會動作
  useEffect(() => {
    JSON.parse(localStorage.getItem('product_Data'))
  }, [])
  //轉成陣列
  const getarray = aboutClass.split(',')
  const shift0 = getarray.shift()

  // 抓商品data
  let getvalue = getarray.map((v, i) => JSON.parse(localStorage.getItem(v)))

  return (
    <>
      <Container>
        <MyBreadCrumb />
        {getvalue.map((v, i) => (
          <div className="go_center">
            <Link to={productUrl + v.product_id}>
              <figure className="nullphoto">
                <img
                  src={pageUrl + v.classPhoto}
                  alt="圖片替代文字"
                  className="animate__animated animate__backInDown"
                />
              </figure>
            </Link>

            <div className="carlabel">
              <Link to={productUrl + v.product_id}>
                <h4>{v.className}</h4>
              </Link>
              <p>{v.location}</p>

              <p className="p1"> {v.classDate}</p>
              <p>
                {v.classTimeStart}-{v.classTimeEnd}
              </p>
            </div>
            <p>
              <Button variant="link" product_data={v.product_id}>
                <BsFillTrashFill />
              </Button>
            </p>
          </div>
        ))}
      </Container>
    </>
  )
}
function Nothing() {
  let history = useHistory()
  function goToBuy() {
    history.push('/productList')
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <Container>
        <MyBreadCrumb />

        <div className="center">
          <AiOutlineInbox className="animate__animated  animate__fadeInUp" />
          <h3 className="animate__animated animate__jackInTheBox">
            現在沒有想參加的講座喔
          </h3>

          <Button variant="info" onClick={goToBuy} className="gobuyProduct">
            現在就去參加
          </Button>
        </div>
      </Container>
    </>
  )
}
function Show() {
  const aboutClass = JSON.parse(localStorage.getItem('product_id'))
  const getarray = aboutClass.split(',')

  //判斷大於1 要顯示資料
  const showOrNotShow = getarray.length
  return showOrNotShow > 1 ? <Null /> : <Nothing />
}

export default Show
