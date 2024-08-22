import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = ({item}) => {
  return (
    <Container>
      <Row className="page-productDetail">
        <Col lg={6}>
          <div className="img-wrap">
            <img src="https://cdn.imweb.me/thumbnail/20230513/d96e82422dd79.png" alt="product image" />
          </div>
        </Col>

        <Col lg={6}>
          <div className="info-wrap">

            <div className="tit-icon-wrap">
              <h4>Petite Cherry Objet : 쁘띠 체리 오브제</h4>
              <div className='icon-wrap'>
                <div className='icon-new'><img width={35} src="https://cdn.imweb.me/upload/S20200607eef2419d78f7d/75e1a0648703f.png" alt="new icon" /></div>
                <div className='icon-hot'><img width={35} src="https://cdn.imweb.me/upload/S20200607eef2419d78f7d/1325bfe4d77a6.png" alt="hot icon" /></div>
                <div className='icon-choice'><img width={35} src="https://cdn.imweb.me/upload/S20200607eef2419d78f7d/acedcf9400bb7.png" alt="choice icon" /></div>
              </div>
            </div>

            <span className='item-price'>38,000</span>

            <div className='item-size'>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>

            <button className="btn-add">추가하기</button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
