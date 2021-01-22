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
  const [crash, setCrash] = useState(true)

  const aboutClass = JSON.parse(localStorage.getItem('product_Data'))
  const pageUrl = '/images/classPhoto/'
  const productUrl = 'view/'

  const haveSothing = (
    <>
      <Container>
        <MyBreadCrumb />
        <div className="go_center">
          <figure className="nullphoto">
            <img
              src={pageUrl + aboutClass.classPhoto}
              alt="圖片替代文字"
              className="animate__animated animate__backInDown"
            />
          </figure>
          <div className="carlabel">
            <Link to={productUrl + aboutClass.product_id}>
              <h4>{aboutClass.className}</h4>
            </Link>
            <p>{aboutClass.location}</p>

            <p className="p1"> {aboutClass.classDate}</p>
            <p>
              {aboutClass.classTimeStart}-{aboutClass.classTimeEnd}
            </p>
          </div>
          <p>
            <Button variant="link" onClick={() => setCrash(false)}>
              <BsFillTrashFill />
            </Button>
          </p>
        </div>
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

  return crash === true ? haveSothing : nothing
}

export default Null
