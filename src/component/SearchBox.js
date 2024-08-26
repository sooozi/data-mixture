import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";

const SearchBox = () => {
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();

    const search = (event) => {
        event.preventDefault();
        dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
    }

    return (
        <Form onSubmit={search}>
            <Row>
                <Col lg={10}>
                    <Form.Label>검색하기</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="💁‍♀️ 이름을 검색해보세요"
                        onChange={(event) => setKeyword(event.target.value)}
                        value={keyword}
                    />
                </Col>
                <Col lg={2}>
                    <Button variant="warning" type="submit" className='txt-white'>찾기</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox
