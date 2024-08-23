import React from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate('/shop');
  };

  return (
    <div className="page-login">
      <Form className="login-wrap" onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3 input-wrap" controlId="formBasicEmail">
          {/* <Form.Label></Form.Label> */}
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label></Form.Label> */}
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button className="btn-login" type="submit">
          로그인
        </button>
      </Form>
    </div>
  )
}

export default Login
