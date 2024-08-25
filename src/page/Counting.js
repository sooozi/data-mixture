import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReduxBox from '../component/ReduxBox';

const Counting = () => {
  //state의 count값만 가져온다!
  const count = useSelector(state=>state.count);
  const id = useSelector(state=>state.id);
  const pw = useSelector(state=>state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type:"INCREMENT", payload:{num:5}})
  }
  const decrease = () => {
    dispatch({type:"DECREMENT", payload:{num:5}})
  }
  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"soozi", password:"1004"}})
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가 ⬆️</button>
      <button onClick={decrease}>감소 ⬇️</button>
      <button onClick={login}>로그인 🧙‍♀️</button>
      <span>ID : {id}</span>
      <span>PASSWORD : {pw}</span>
      <ReduxBox />
    </div>
  )
}

export default Counting
