import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const dispatch = useDispatch();
    const addContact = (event) => {
        event.preventDefault(); //리액트는 반드시 새로고침 막기!!!
        // dispatch({type:"ADD_CONTACT" , payload: {name:name, phoneNumber:phoneNumber}})
        dispatch({type:"ADD_CONTACT" , payload: {name, phoneNumber}}) //이름이 같으면 단축 가능
    }
    return (
        <div className="cont-contactForm">
        <Form onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                {/* //모든 event 핸들러는 event라는 매개변수를 넘긴다! */}
                <Form.Control type="text" placeholder="💁‍♀️ 이름을 입력해주세요" onChange={(event) => setName(event.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control type="number" placeholder="💁‍♀️ 전화번호를 입력해주세요" onChange={(event) => setPhoneNumber(event.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                추가하기 
            </Button>
        </Form>
    </div>
  )
}

export default ContactForm
