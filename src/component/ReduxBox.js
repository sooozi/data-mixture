import React from 'react';
import { useSelector } from 'react-redux';
import GrandSonBox from './GrandSonBox';

const ReduxBox = () => {
    const count = useSelector((state)=>state.count);
  return (
    <div>
      <p>This is box! {count}</p>
      <GrandSonBox/>
    </div>
  )
}

export default ReduxBox
