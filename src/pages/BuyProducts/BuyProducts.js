import React, { useState } from 'react'
import MyBreadCrumb from '../../components/main/MyBreadCrumb'
import './buy-products.scss'
import { FiClock } from 'react-icons/fi'
import { FaMapMarkerAlt, FaDollarSign, FaTag } from 'react-icons/fa'
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineHeart,
} from 'react-icons/ai'
import { Button, Modal } from 'react-bootstrap'

function BuyProducts() {
  const [smShow, setSmShow] = useState(false)

  const handleShow = () => setSmShow(true)

  return (
    <>
      <div className="container">
        <MyBreadCrumb />
        {/* 麵包屑 */}
        <figure className="heroPhoto">
          <img
            src="http://localhost:3000/images/classPhoto/IMAG7028.jpg"
            alt="圖片替代文字"
          />
        </figure>
        <div className="title">
          <h2>雪季登山安全與準備 | 登山新手村 - 拼圖戶外生活</h2>
          <Button variant="info">收藏</Button>
        </div>
        <div className="buyTheTicket">
          {/* 上半部買票區 */}

          <div className="aboutClass">
            {/* 上半部左邊 資訊區 */}

            <div className="aboutIcon">
              <FiClock />
              <div>
                <p>活動時間</p>
                <p>2020-12-29(二) 19:00 ~ 21:00</p>
              </div>
            </div>

            <div className="aboutIcon">
              <FaMapMarkerAlt />
              <div>
                <p>活動地點</p>
                <p>台灣台北市登山補給站</p>
                <p>捷運龍山寺站3號出口 步行3分鐘</p>
              </div>
            </div>

            <div className="aboutIcon">
              <FaDollarSign />
              <div>
                <p>價格</p>
                <p>單人票: 1200</p>
                <p>雙人票: 2000</p>
              </div>
            </div>

            <div className="aboutIcon">
              <FaTag />
              <div className="tag">
                <p>標籤:</p>
                <Button variant="light">這是七個字字字</Button>
                <Button variant="light">這是四字</Button>
                <Button variant="light">是二</Button>
              </div>
            </div>
            <hr />
          </div>

          <div className="IWantBuy">
            {/* 上半部右邊選擇區 */}

            <p>雪季登山安全與準備 | 登山新手村 - 拼圖戶外生活</p>
            <div className="clock-time">
              <FiClock />
              <p>2020-12-29(二) 19:00 ~ 21:00</p>
            </div>

            <div className="ticketBuy">
              <p>早鳥票</p>
              <div className="plusAndMinus">
                <Button variant="light">
                  <AiFillMinusCircle />
                </Button>
                <p>1</p>
                <Button variant="light">
                  <AiFillPlusCircle />
                </Button>
              </div>
            </div>
            <div className="ticketBuy">
              <p>單人票</p>
              <div className="plusAndMinus">
                <Button variant="light">
                  <AiFillMinusCircle />
                </Button>{' '}
                <p>1</p>
                <Button variant="light">
                  <AiFillPlusCircle />
                </Button>
              </div>
            </div>
            <div className="ticketBuy">
              <p>雙人票</p>
              <div className="plusAndMinus">
                <Button variant="light">
                  <AiFillMinusCircle />
                </Button>
                <p>1</p>
                <Button variant="light">
                  <AiFillPlusCircle />
                </Button>
              </div>
            </div>
            <div className="buttonAndHeart">
              {/* 上半部右邊下面按鈕 */}

              <Button variant="info">加入購物車</Button>
              <div className="followMyHeart">
                <Button variant="light">
                  <AiOutlineHeart />
                </Button>
                <p>12345</p>
              </div>
            </div>
          </div>
        </div>
        {/* 上半部結束 */}
        <div className="aboutClassDetails">
          <div className="introduction">
            <p className="classTitel">活動介紹</p>
            <p className="calssInside">
              這堂雪地安全與準備的登山講座，我們很榮幸邀請到有豐富雪地登山經驗的教練「張國威」，從最基本的台灣高山雪地健行、到需要豐富雪地技術的雪地技術攀登，如北美最高峰麥肯尼峰、阿爾卑斯山區的馬特洪峰及西歐最高峰白朗峰，都有國威一腳一步走過的足跡。而今年台灣的登山因為疫情的關係迎來了近十年來最大的成長，但隨著冬季的接近，高山的環境也即將進入台灣普遍大眾最不熟悉的「雪季」。雪、甚至式冰，都是生長在台灣的我們所不熟悉的，我們希望大家在上山欣賞白雪靄靄世界的同時，也能抱持著對於環境的謙卑及對自我安全的負責，讓每位在冬季踏入高山的我們都能安全的享受冬季的純白世界。
            </p>
          </div>
          <div className="introduction">
            <p className="classTitel">課程大綱</p>
            <ul>
              <li>雪地登山健行與一般登山健行之差異</li>
              <li>台灣雪地登山健行基本觀念與注意事項</li>
              <li>實際裝備的展示與介紹</li>
              <li>雪地常見風險</li>
            </ul>
          </div>
          <div className="introduction">
            <p className="classTitel">講座資訊</p>
            <ul>
              <li>日期：12/29（二）</li>
              <li>時間：19:00-21:00</li>
              <li>地點：登山補給站</li>
              <li>講師：張國威</li>
            </ul>
          </div>

          <div className="introduction">
            <p className="classTitel">課程地點－登山補給站 B1講座空間</p>
            <p className="calssInside">地址：108台北市萬華區和平西路三段70號</p>
          </div>
          <div className="introduction">
            <p className="classTitel">報名須知</p>
            <ul className="shouldKnow">
              <li>活動報名人數若未達開課門檻，將全額退費。</li>
              <li>若遇氣象惡劣或天災警報，本活動可能受天氣影響取消或延後。</li>
              <li>
                報名後請完成繳費，才算報名成功；若繳費期限內未完成繳費者，報名將於繳費期限到期時取消。
              </li>
              <li>
                近日疫情趨緩但防疫仍須大家共同努力，活動全程請戴口罩，並於入場時配合施量體溫，若體溫超過37.5度者將無法入場，敬請配合。
              </li>
            </ul>
          </div>
          <div className="introduction">
            <p className="classTitel">關於講師</p>
            <Button variant="link" onClick={handleShow}>
              <img src="" alt="圖片替代文字" />
            </Button>
            <Modal
              size="400x400"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
              className="modalPage"
            >
              <Modal.Header closeButton>
                <Modal.Title
                  id="example-modal-sizes-title-sm"
                  className="modalPhoto"
                >
                  <img
                    src="http://localhost:3000/images/teacher/Han__2Bi_3.jpg"
                    alt="圖片替代文字"
                  />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="nameAndTitle">
                <h1>廖育聖</h1>
                <p>登山專欄作家</p>
                <ul>
                  <li>四川雙橋溝冰攀</li>
                  <li>日本八岳地區冰雪攀</li>
                  <li>法國霞慕尼、瑞士、加拿大洛磯山脈等地攀登</li>
                  <li>北美最高峰迪奈利Mt.Denali</li>
                  <li>雷尼爾山 Mt. Rainier(美國太平洋西北最高峰)</li>
                  <li>瑞士馬特洪 Matterhorn</li>
                  <li>法國白朗峰 Mont Blanc(西歐最高峰)</li>
                  <li>加拿大 Mt. Athabasca</li>
                  <li>日本赤岳</li>
                </ul>
              </Modal.Body>
            </Modal>
          </div>
          <hr />
          <div className="introduction">
            <p className="classTitel">活動地圖</p>
            <figure className="thisIsMap">
              <img
                src="http://localhost:3000/images/classPhoto/IMAG7028.jpg"
                alt="圖片替代文字"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}
export default BuyProducts
