import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactItem = ({item, index }) => {
    // 이미지 URL 배열
    const imageUrls = [
        'https://i.pinimg.com/236x/2f/55/97/2f559707c3b04a1964b37856f00ad608.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PU_twGbYm8QYDk-bf0UPGqVrjbqQEXoL35oXW2IF1QL7F9OHBkgEUUdR_wY_lpqBsI0&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS68vwQkwD5C04gE4MMlKkCMY2qyOcF5ZWboA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST6q40unYXgnmZboEu-0pt9SoDz4rX_3FZcg&s',
        'https://dthezntil550i.cloudfront.net/ps/latest/ps2201272314365330022817814/1280_960/56cf6ec5-7084-48e1-a543-79b1d5908eab.png',
        'https://i.pinimg.com/236x/40/35/b1/4035b1891b777ee370fb48fbc6cada7a.jpg',
        'https://i.pinimg.com/236x/94/dd/25/94dd25f3692ecd605d0d3156e9cf7171.jpg',
        'https://i.pinimg.com/originals/48/06/65/4806655144635765866e5b1361d4a9c0.jpg',
    ]
    // 현재 인덱스를 사용하여 이미지 URL 선택
    const imageUrl = imageUrls[index % imageUrls.length];
    
    return (
        <div className="cont-contact-item">
        <Row>
            <Col lg={2}>
                <img width={60} src={imageUrl} alt="defalt profile" />
            </Col>
            <Col lg={10} className='item-box'>
                <div>🧸 : {item.name}</div>
                <div>📱 : {item.phoneNumber}</div>
            </Col>
        </Row>
        </div>
    )
}

export default ContactItem
