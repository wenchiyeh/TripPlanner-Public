import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import FormFile from 'react-bootstrap/FormFile'
import Modal from 'react-bootstrap/Modal'

function AddTravelBuddiesForm() {
  const [validated, setValidated] = useState(false)
  const [importFromItinerary, setImportFromItinerary] = useState(false)
  const [importFromCollection, setImportFromCollection] = useState(false)

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
            <h1 class="add-travelbuddies-topic">新增旅行揪團</h1>
            <div class="add-travelbuddies-picture"></div>
            <Form.Group controlId="travelBuddiesThemeName">
              <Form.Label htmlFor="travelBuddiesThemeName">
                旅行揪團名稱：
              </Form.Label>
              <Form.Control
                id="travelBuddiesThemeName"
                type="text"
                placeholder="請輸入30字元內的旅行揪團名稱"
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
                    name="regioncategory[]"
                    value="1"
                  />
                  <Form.Check
                    inline
                    label="中部"
                    type={type}
                    id={`inline-${type}-regioncategory2`}
                    name="regioncategory[]"
                    value="2"
                  />
                  <Form.Check
                    inline
                    label="南部"
                    type={type}
                    id={`inline-${type}-regioncategory3`}
                    name="regioncategory[]"
                    value="3"
                  />
                  <Form.Check
                    inline
                    label="東部"
                    type={type}
                    id={`inline-${type}-regioncategory4`}
                    name="regioncategory[]"
                    value="4"
                  />
                  <Form.Check
                    inline
                    label="離島"
                    type={type}
                    id={`inline-${type}-regioncategory5`}
                    name="regioncategory[]"
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
                    name="citycategory[]"
                    value="1"
                  />
                  <Form.Check
                    inline
                    label="新北"
                    type={type}
                    id={`inline-${type}-citycategory2`}
                    name="citycategory[]"
                    value="2"
                  />
                  <Form.Check
                    inline
                    label="基隆"
                    type={type}
                    id={`inline-${type}-citycategory3`}
                    name="citycategory[]"
                    value="3"
                  />
                  <Form.Check
                    inline
                    label="桃園"
                    type={type}
                    id={`inline-${type}-citycategory4`}
                    name="citycategory[]"
                    value="4"
                  />
                  <Form.Check
                    inline
                    label="新竹"
                    type={type}
                    id={`inline-${type}-citycategory5`}
                    name="citycategory[]"
                    value="5"
                  />
                  <Form.Check
                    inline
                    label="苗栗"
                    type={type}
                    id={`inline-${type}-citycategory6`}
                    name="citycategory[]"
                    value="6"
                  />
                  <Form.Check
                    inline
                    label="台中"
                    type={type}
                    id={`inline-${type}-citycategory7`}
                    name="citycategory[]"
                    value="7"
                  />
                  <Form.Check
                    inline
                    label="彰化"
                    type={type}
                    id={`inline-${type}-citycategory8`}
                    name="citycategory[]"
                    value="8"
                  />
                  <Form.Check
                    inline
                    label="南投"
                    type={type}
                    id={`inline-${type}-citycategory9`}
                    name="citycategory[]"
                    value="9"
                  />
                  <Form.Check
                    inline
                    label="雲林"
                    type={type}
                    id={`inline-${type}-citycategory10`}
                    name="citycategory[]"
                    value="10"
                  />
                  <Form.Check
                    inline
                    label="嘉義"
                    type={type}
                    id={`inline-${type}-citycategory11`}
                    name="citycategory[]"
                    value="11"
                  />
                  <Form.Check
                    inline
                    label="台南"
                    type={type}
                    id={`inline-${type}-citycategory12`}
                    name="citycategory[]"
                    value="12"
                  />
                  <Form.Check
                    inline
                    label="高雄"
                    type={type}
                    id={`inline-${type}-citycategory13`}
                    name="citycategory[]"
                    value="13"
                  />
                  <Form.Check
                    inline
                    label="屏東"
                    type={type}
                    id={`inline-${type}-citycategory14`}
                    name="citycategory[]"
                    value="14"
                  />
                  <Form.Check
                    inline
                    label="宜蘭"
                    type={type}
                    id={`inline-${type}-citycategory15`}
                    name="citycategory[]"
                    value="15"
                  />
                  <Form.Check
                    inline
                    label="花蓮"
                    type={type}
                    id={`inline-${type}-citycategory16`}
                    name="citycategory[]"
                    value="16"
                  />
                  <Form.Check
                    inline
                    label="台東"
                    type={type}
                    id={`inline-${type}-citycategory17`}
                    name="citycategory[]"
                    value="17"
                  />
                  <Form.Check
                    inline
                    label="澎湖"
                    type={type}
                    id={`inline-${type}-citycategory18`}
                    name="citycategory[]"
                    value="18"
                  />
                  <Form.Check
                    inline
                    label="金門"
                    type={type}
                    id={`inline-${type}-citycategory19`}
                    name="citycategory[]"
                    value="19"
                  />
                  <Form.Check
                    inline
                    label="馬祖"
                    type={type}
                    id={`inline-${type}-citycategory20`}
                    name="citycategory[]"
                    value="20"
                  />
                  <Form.Check
                    inline
                    label="綠島"
                    type={type}
                    id={`inline-${type}-citycategory21`}
                    name="citycategory[]"
                    value="21"
                  />
                  <Form.Check
                    inline
                    label="蘭嶼"
                    type={type}
                    id={`inline-${type}-citycategory22`}
                    name="citycategory[]"
                    value="22"
                  />
                  <Form.Check
                    inline
                    label="小琉球"
                    type={type}
                    id={`inline-${type}-citycategory23`}
                    name="citycategory[]"
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
                <Form.Group controlId="travelBuddiesStartDate">
                  <Form.Label htmlFor="travelBuddiesStartDate">
                    旅行開始日期：
                  </Form.Label>
                  <Form.Control
                    id="travelBuddiesStartDate"
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
                <Form.Group controlId="travelBuddiesEndDate">
                  <Form.Label htmlFor="travelBuddiesEndDate">
                    旅行結束日期：
                  </Form.Label>
                  <Form.Control
                    id="travelBuddiesEndDate"
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
                  <Form.Control as="select">
                    <option>1日遊</option>
                    <option>2-3日遊</option>
                    <option>4-5日遊</option>
                    <option>6-7日遊</option>
                    <option>8日遊或以上</option>
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
                    id="travelBuddiesLastApprovedDate"
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
                    id="travelBuddiesEstimatedCost"
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
                        name="genderNeeded"
                        value="1"
                        className="mr-3"
                      />
                      <Form.Check
                        inline
                        label="女性"
                        type={type}
                        id={`inline-${type}-genderNeeded2`}
                        name="genderNeeded"
                        value="2"
                        className="mr-3"
                      />
                      <Form.Check
                        inline
                        label="男女皆可"
                        type={type}
                        id={`inline-${type}-genderNeeded2`}
                        name="genderNeeded"
                        value="3"
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
              <Form.Control as="textarea" rows={5} />
              <Form.Control.Feedback type="invalid">
                旅行揪團名稱為必填欄位
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
