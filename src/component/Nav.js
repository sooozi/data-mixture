import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';

const Nav = () => {
  const menuList = ['NEW IN','PAPERWEIGHT','OBJECT','FRUITS','STATIONERY','CLASS KIT',]
  return (
    <div className='nav-wrap'>
        <div className='cont-wrap login-wrap'>
          <div className='login-box'>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </div>
        </div>
        <div className='cont-wrap logo-box'>
          <img
            width={130}
            src="https://cdn.imweb.me/upload/S20200607eef2419d78f7d/b573f536e38c6.png"
            alt="logo image" />
        </div>
        <div className='cont-wrap utility-box'>
          <ul className='menu-box'>
            {menuList.map(menu => <li>{menu}</li>)}
          </ul>
          <div className='search-box'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-search'/>
            <input type="text" className='input-search' placeholder='제품 검색'/>
          </div>
        </div>
    </div>
  )
}

export default Nav
