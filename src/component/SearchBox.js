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
                    <Form.Control
                        type="text"
                        placeholder="💁‍♀️ 이름을 입력해주세요"
                        onChange={(event) => setKeyword(event.target.value)}
                        value={keyword}
                    />
                </Col>
                <Col lg={2}>
                    <Button variant="primary" type="submit">찾기</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox
