import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import FormFile from 'react-bootstrap/FormFile'
import PicUploadRect from '../Itinerary/PicUploadRect'
import Modal from 'react-bootstrap/Modal'

function AddTravelBuddiesForm() {
  const [validated, setValidated] = useState(false)
  const [importFromItinerary, setImportFromItinerary] = useState(false)
  const [importFromCollection, setImportFromCollection] = useState(false)
  const [tbThemeName, settbThemeName] = useState('')
  const [tbThemePhoto, settbThemePhoto] = useState('')
  const [tbRegionCategory, settbRegionCategory] = useState([])
  const [tbCityCategory, settbCityCategory] = useState([])
  const [tbDateBegin, settbDateBegin] = useState('')
  const [tbDateEnd, settbDateEnd] = useState('')
  const [tbDaysCategory, settbDaysCategory] = useState('')
  const [tbLastApprovedDate, settbLastApprovedDate] = useState('')
  const [tbEstimatedCost, settbEstimatedCost] = useState('')
  const [tbPersonsNeeded, settbPersonsNeeded] = useState('')
  const [tbGenderNeeded, settbGenderNeeded] = useState('')
  const [tbThemeIntro, settbThemeIntro] = useState('')

  async function addTravelBuddies() {
    const newTravelBuddies = {
      tbThemeName,
      tbThemePhoto,
      tbRegionCategory,
      tbCityCategory,
      tbDateBegin,
      tbDateEnd,
      tbDaysCategory,
      tbLastApprovedDate,
      tbEstimatedCost,
      tbPersonsNeeded,
      tbGenderNeeded,
      tbThemeIntro,
    }

    try {
      // 從伺服器得到資料
      const response = await fetch('http://localhost:5000/', {
        method: 'post',
        body: JSON.stringify(newTravelBuddies),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      // ok只能判斷201-299狀態碼的情況
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()
        console.log(data)

        // 設定資料到member狀態
        if (data.id) alert('新增成功')
      }
    } catch (err) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <>
      <div class="add-travelbuddies-outbox">
        <div class="add-travelbuddies-middle">
          <Form validated={validated} onSubmit={handleSubmit}>
            <h1 className="add-travelbuddies-topic">新增旅行揪團</h1>
            <canvas className="add-travelbuddies-picture">
              <div>請選擇檔案或拖曳上傳</div>
            </canvas>
            <Form.Group controlId="travelBuddiesThemeName">
              <Form.Label htmlFor="travelBuddiesThemeName">
                旅行揪團名稱：
              </Form.Label>
              <Form.Control
                id="tbThemeName"
                name="tbThemeName"
                type="text"
                placeholder="請輸入30字元內的旅行揪團名稱"
                onChange={(e) => {
                  settbThemeName(e.target.value)
                }}
                required
              />
              <Form.Control.Feedback type="invalid">
                旅行揪團名稱為必填欄位
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="travelBuddiesRegionCategory">
              <Form.Label htmlFor="travelBuddiesRegionCategory">
                地區分類：
              </Form.Label>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="北部"
                    type={type}
                    id={`inline-${type}-regioncategory1`}
                    name="tbRegionCategory[]"
                    value="1"
                  />
                  <Form.Check
                    inline
                    label="中部"
                    type={type}
                    id={`inline-${type}-regioncategory2`}
                    name="tbRegionCategory[]"
                    value="2"
                  />
                  <Form.Check
                    inline
                    label="南部"
                    type={type}
                    id={`inline-${type}-regioncategory3`}
                    name="tbRegionCategory[]"
                    value="3"
                  />
                  <Form.Check
                    inline
                    label="東部"
                    type={type}
                    id={`inline-${type}-regioncategory4`}
                    name="tbRegionCategory[]"
                    value="4"
                  />
                  <Form.Check
                    inline
                    label="離島"
                    type={type}
                    id={`inline-${type}-regioncategory5`}
                    name="tbRegionCategory[]"
                    value="5"
                  />
                </div>
              ))}
              <Form.Control.Feedback type="invalid">
                地區分類為必選
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="travelBuddieCityCategory">
              <Form.Label htmlFor="travelBuddieCityCategory">
                縣市分類：
              </Form.Label>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="台北"
                    type={type}
                    id={`inline-${type}-citycategory1`}
                    name="tbCityCategory[]"
                    value="1"
                  />
                  <Form.Check
                    inline
                    label="新北"
                    type={type}
                    id={`inline-${type}-citycategory2`}
                    name="tbCityCategory[]"
                    value="2"
                  />
                  <Form.Check
                    inline
                    label="基隆"
                    type={type}
                    id={`inline-${type}-citycategory3`}
                    name="tbCityCategory[]"
                    value="3"
                  />
                  <Form.Check
                    inline
                    label="桃園"
                    type={type}
                    id={`inline-${type}-citycategory4`}
                    name="tbCityCategory[]"
                    value="4"
                  />
                  <Form.Check
                    inline
                    label="新竹"
                    type={type}
                    id={`inline-${type}-citycategory5`}
                    name="tbCityCategory[]"
                    value="5"
                  />
                  <Form.Check
                    inline
                    label="苗栗"
                    type={type}
                    id={`inline-${type}-citycategory6`}
                    name="tbCityCategory[]"
                    value="6"
                  />
                  <Form.Check
                    inline
                    label="台中"
                    type={type}
                    id={`inline-${type}-citycategory7`}
                    name="tbCityCategory[]"
                    value="7"
                  />
                  <Form.Check
                    inline
                    label="彰化"
                    type={type}
                    id={`inline-${type}-citycategory8`}
                    name="tbCityCategory[]"
                    value="8"
                  />
                  <Form.Check
                    inline
                    label="南投"
                    type={type}
                    id={`inline-${type}-citycategory9`}
                    name="tbCityCategory[]"
                    value="9"
                  />
                  <Form.Check
                    inline
                    label="雲林"
                    type={type}
                    id={`inline-${type}-citycategory10`}
                    name="tbCityCategory[]"
                    value="10"
                  />
                  <Form.Check
                    inline
                    label="嘉義"
                    type={type}
                    id={`inline-${type}-citycategory11`}
                    name="tbCityCategory[]"
                    value="11"
                  />
                  <Form.Check
                    inline
                    label="台南"
                    type={type}
                    id={`inline-${type}-citycategory12`}
                    name="tbCityCategory[]"
                    value="12"
                  />
                  <Form.Check
                    inline
                    label="高雄"
                    type={type}
                    id={`inline-${type}-citycategory13`}
                    name="tbCityCategory[]"
                    value="13"
                  />
                  <Form.Check
                    inline
                    label="屏東"
                    type={type}
                    id={`inline-${type}-citycategory14`}
                    name="tbCityCategory[]"
                    value="14"
                  />
                  <Form.Check
                    inline
                    label="宜蘭"
                    type={type}
                    id={`inline-${type}-citycategory15`}
                    name="tbCityCategory[]"
                    value="15"
                  />
                  <Form.Check
                    inline
                    label="花蓮"
                    type={type}
                    id={`inline-${type}-citycategory16`}
                    name="tbCityCategory[]"
                    value="16"
                  />
                  <Form.Check
                    inline
                    label="台東"
                    type={type}
                    id={`inline-${type}-citycategory17`}
                    name="tbCityCategory[]"
                    value="17"
                  />
                  <Form.Check
                    inline
                    label="澎湖"
                    type={type}
                    id={`inline-${type}-citycategory18`}
                    name="tbCityCategory[]"
                    value="18"
                  />
                  <Form.Check
                    inline
                    label="金門"
                    type={type}
                    id={`inline-${type}-citycategory19`}
                    name="tbCityCategory[]"
                    value="19"
                  />
                  <Form.Check
                    inline
                    label="馬祖"
                    type={type}
                    id={`inline-${type}-citycategory20`}
                    name="tbCityCategory[]"
                    value="20"
                  />
                  <Form.Check
                    inline
                    label="綠島"
                    type={type}
                    id={`inline-${type}-citycategory21`}
                    name="tbCityCategory[]"
                    value="21"
                  />
                  <Form.Check
                    inline
                    label="蘭嶼"
                    type={type}
                    id={`inline-${type}-citycategory22`}
                    name="tbCityCategory[]"
                    value="22"
                  />
                  <Form.Check
                    inline
                    label="小琉球"
                    type={type}
                    id={`inline-${type}-citycategory23`}
                    name="tbCityCategory[]"
                    value="23"
                  />
                </div>
              ))}
              <Form.Control.Feedback type="invalid">
                縣市分類為必選
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Group controlId="travelBuddiesDateBegin">
                  <Form.Label htmlFor="travelBuddiesDateBegin">
                    旅行開始日期：
                  </Form.Label>
                  <Form.Control
                    id="tbDateBegin"
                    name="tbDateBegin"
                    type="date"
                    placeholder=""
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    請選擇旅行開始日期
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="travelBuddiesDateEnd">
                  <Form.Label htmlFor="travelBuddiesDateEnd">
                    旅行結束日期：
                  </Form.Label>
                  <Form.Control
                    id="tbDateEnd"
                    name="tbDateEnd"
                    type="date"
                    placeholder=""
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    請選擇旅行結束日期
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="travelBuddiesDaysCategory">
                  <Form.Label htmlFor="travelBuddiesDaysCategory">
                    天數分類：
                  </Form.Label>
                  <Form.Control
                    as="select"
                    id="tbDaysCategory"
                    name="tbDaysCategory"
                  >
                    <option value="1">1日遊</option>
                    <option value="2">2-3日遊</option>
                    <option value="3">4-5日遊</option>
                    <option value="4">6-7日遊</option>
                    <option value="5">8日遊或以上</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    請選擇旅行結束日期
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="travelBuddiesLastApprovedDate">
                  <Form.Label htmlFor="travelBuddiesLastApprovedDate">
                    最後審核日期：
                  </Form.Label>
                  <Form.Control
                    id="tbLastApprovedDate"
                    name="tbLastApprovedDate"
                    type="date"
                    placeholder=""
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    請選擇最後審核日期
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="travelBuddiesEstimatedCost">
                  <Form.Label htmlFor="travelBuddiesEstimatedCost">
                    預估花費：
                  </Form.Label>
                  <Form.Control
                    id="tbEstimatedCost"
                    name="tbEstimatedCost"
                    type="number"
                    placeholder=""
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    請填寫預估花費
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="travelBuddiesPersonsNeeded">
                  <Form.Label htmlFor="travelBuddiesPersonsNeeded">
                    需求人數：
                  </Form.Label>
                  <Form.Control
                    id="travelBuddiesPersonsNeeded"
                    type="number"
                    placeholder=""
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    請填寫需求人數
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="travelBuddiesGenderNeeded">
                  <Form.Label htmlFor="travelBuddiesGenderNeeded">
                    需求性別：
                  </Form.Label>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3 mt-2">
                      <Form.Check
                        inline
                        label="男性"
                        type={type}
                        id={`inline-${type}-genderNeeded1`}
                        name="tbGenderNeeded"
                        value="男性"
                        className="mr-3"
                      />
                      <Form.Check
                        inline
                        label="女性"
                        type={type}
                        id={`inline-${type}-genderNeeded2`}
                        name="tbGenderNeeded"
                        value="女性"
                        className="mr-3"
                      />
                      <Form.Check
                        inline
                        label="男女皆可"
                        type={type}
                        id={`inline-${type}-genderNeeded2`}
                        name="tbGenderNeeded"
                        value="男女皆可"
                        className="mr-3"
                      />
                    </div>
                  ))}
                  <Form.Control.Feedback type="invalid">
                    請選擇需求性別
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId="travelBuddiesThemeIntro">
              <Form.Label htmlFor="travelBuddiesThemeIntro">
                旅行揪團介紹：
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                id="tbThemeIntro"
                name="tbThemeIntro"
                placeholder="請盡情介紹您的旅行揪團，吸引更多人報名參加唷！"
              />
              <Form.Control.Feedback type="invalid">
                旅行揪團介紹為必填欄位
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              className="add-travelbuddies-importfromi"
              onClick={() => setImportFromItinerary(true)}
            >
              從我的行程匯入
            </Button>{' '}
            <Button
              className="add-travelbuddies-importfromc"
              onClick={() => setImportFromCollection(true)}
            >
              從我收藏的行程匯入
            </Button>
            <br />
            <br />
            <br />
            <Button className="add-travelbuddies-preview">預覽</Button>
            <br />
            <Modal
              size="lg"
              show={importFromItinerary}
              onHide={() => setImportFromItinerary(false)}
              aria-labelledby="travelBuddiesImportfromI"
            >
              <Modal.Header closeButton>
                <Modal.Title id="travelBuddiesImportfromI">
                  選擇我的行程並匯入
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div class="d-flex importfrom-row-even">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="d-flex importfrom-row-odd">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="d-flex importfrom-row-even">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="d-flex importfrom-row-odd">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="d-flex importfrom-row-even">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="d-flex importfrom-row-odd">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="" className="add-travelbuddy-importconfirm">
                  確認選擇
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal
              size="lg"
              show={importFromCollection}
              onHide={() => setImportFromCollection(false)}
              aria-labelledby="travelBuddiesImportfromC"
            >
              <Modal.Header closeButton>
                <Modal.Title id="travelBuddiesImportfromC">
                  選擇我收藏的行程並匯入
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div class="d-flex importfrom-row-even">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="d-flex importfrom-row-odd">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="d-flex importfrom-row-even">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="d-flex importfrom-row-odd">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="d-flex importfrom-row-even">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="d-flex importfrom-row-odd">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="" className="add-travelbuddy-importconfirm">
                  確認選擇
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </div>
      </div>
    </>
  )
}

export default AddTravelBuddiesForm
