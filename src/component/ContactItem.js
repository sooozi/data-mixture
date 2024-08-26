import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactItem = ({item}) => {
  return (
    <div>
      <Row>
        <Col lg={2}>
            <img width={80} src="https://i.pinimg.com/236x/2f/55/97/2f559707c3b04a1964b37856f00ad608.jpg" alt="defalt profile" />
        </Col>
        <Col lg={10}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem
