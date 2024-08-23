import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = ({authenticate}) => {
  // 상태 변수 isAuthenticated를 사용하여 현재 로그인 상태를 관리
  // 초기값은 부모 컴포넌트로부터 받은 authenticate prop에 기반
  const [isAuthenticated, setIsAuthenticated] = useState(authenticate);
  const menuList = ['NEW IN','PAPERWEIGHT','OBJECT','FRUITS','STATIONERY','CLASS KIT',];
  const navigate = useNavigate();
  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`shop/?q=${keyword}`)
    }
  };

  // 로그인/로그아웃 클릭 시 처리하는 함수
  const handleLoginLogoutClick = () => {
    if (isAuthenticated) {
      // 현재 로그인 상태일 때 '로그아웃'을 클릭하면, 로그아웃 알림 표시
      alert("로그아웃 되었습니다. Bye Bye 🙋‍♀️");
      // 상태를 '로그인'으로 변경
      setIsAuthenticated(false);
    } else {
      // 현재 비로그인 상태일 때 '로그인'을 클릭하면, 로그인 페이지 이동
      navigate('/login');
    }
  };

  // 부모로부터 상태 업데이트 시, 상태를 동기화합니다.
  useEffect(() => {
    setIsAuthenticated(authenticate);
  }, [authenticate]);

  return (
    <div className='nav-wrap'>
        <div className='cont-wrap login-wrap'>
            <div className='login-box' onClick={handleLoginLogoutClick}>
              <FontAwesomeIcon icon={faUser} />
              <span>{isAuthenticated ? '로그아웃' : '로그인'}</span>
            </div>
        </div>
        <div className='cont-wrap logo-box'>
          <img
            width={150}
            src="https://cdn.imweb.me/upload/S20200607eef2419d78f7d/b573f536e38c6.png"
            alt="logo image" />
        </div>
        <div className='cont-wrap utility-box'>
          <ul className='menu-box'>
            {menuList.map(menu => <li>{menu}</li>)}
          </ul>
          <div className='search-box'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-search'/>
            <input type="text" onKeyPress={(event)=>search(event)} className='input-search' placeholder='제품 검색'/>
          </div>
        </div>
    </div>
  )
}

export default Nav