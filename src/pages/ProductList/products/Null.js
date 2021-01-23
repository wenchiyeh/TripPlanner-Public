import React, { useState, useEffect } from 'react'
import { AiOutlineInbox } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { Container, Button } from 'react-bootstrap'
import './cash.scss'
import MyBreadCrumb from '../../../components/main/MyBreadCrumb/MyBreadCrumb'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Null() {
  let history = useHistory()
  function goToBuy() {
    history.push('/productList')
  }

  const pageUrl = '/images/classPhoto/'
  const productUrl = 'view/'
  //取值
  const aboutClass = JSON.parse(localStorage.getItem('product_id'))
  //轉陣列
  const getarray = aboutClass.split(',')
  const showOrNotShow = getarray.length

  //抓商品data
  const getClassOne = JSON.parse(localStorage.getItem(getarray[1]))
  const getClassTwo = JSON.parse(localStorage.getItem(getarray[2]))
  const getClassThree = JSON.parse(localStorage.getItem(getarray[3]))
  //轉成可map狀態
  const mayob = [getClassOne, getClassTwo, getClassThree]

  function resetlocal() {}

  const haveSothing = (
    <>
      <Container>
        <MyBreadCrumb />
        {mayob.map((v, i) => (
          <div className="go_center" key={i}>
            <figure className="nullphoto">
              <img
                src={pageUrl + v.classPhoto}
                alt="圖片替代文字"
                className="animate__animated animate__backInDown"
              />
            </figure>
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
              <Button variant="link" product-data={v.product_id}>
                <BsFillTrashFill />
              </Button>
            </p>
          </div>
        ))}

        <hr />
      </Container>
    </>
  )
  const nothing = (
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

  useEffect(() => {
    JSON.parse(localStorage.getItem('product_Data'))
  }, [])

  return showOrNotShow > 1 ? haveSothing : nothing
}

export default Null
