import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../component/ContactForm';
import ContactList from "../component/ContactList";

//1. 왼쪽에는 연락처 등록하는 폼, 오른쪽에는 연락처 리스트와 search창
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
//3. 리스트에 아이템이 몇 개있는지 노출
//4. 사용자가 유저 이름을 검색할 수 있다.

const Phonebook = () => {
  return (
    <div className="page-phonebook">
        <h1>📒 Your Personal Phonebook 📒</h1>
        <div className="txt-box">
          <h5 className="txt-detail btn-shine">🐻‍❄️ Complete your cute profile list!</h5>
        </div>
        <Container>
            <Row>
                <Col lg={4} className="cont-box">
                    <ContactForm/>
                </Col>
                <Col lg={8} className="cont-box">
                  <ContactList/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Phonebook
