import React from 'react'

const Login = () => {
  return (
    <div className="page-login">
      <div className="login-wrap">
        <div className="input-wrap">
          <input type="text" placeholder='아이디를 입력해주세요.'/>
          <input type="password" placeholder='비밀번호를 입력해주세요.'/>
        </div>
        <button className="btn-login">로그인</button>
      </div>
    </div>
  )
}

export default Login
