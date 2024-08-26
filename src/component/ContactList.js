import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';

const ContactList = () => {
    const contactList = useSelector(state => state.contactList);
    const keyword = useSelector(state => state.keyword);

    let [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        console.log('contactList:', contactList);  // 추가된 코드
        console.log('keyword:', keyword);  
        
        if (keyword !== "") {
          let list = contactList.filter((item) => item.name.includes(keyword));
          setFilteredList(list);
        } else {
          setFilteredList(contactList);
        }
    }, [keyword, contactList]);

    return (
        <div className="cont-contactList">
            <div className="search-wrap">
                <SearchBox/>  
            </div>
            <div className="item-wrap">
                <div className="num-box">
                    num:{filteredList.length}
                </div>
                {filteredList.map((item, index) => (
                    <ContactItem item={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ContactList