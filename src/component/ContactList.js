import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';

const ContactList = () => {
    const contactList = useSelector(state => state.contactList);
    return (
        <div className="cont-contactList">
            <div className="search-wrap">
                <SearchBox/>  
            </div>
            <div className="item-wrap">
                {contactList.map(item => <ContactItem item={item}/>)}
            </div>
        </div>
    )
}

export default ContactList
