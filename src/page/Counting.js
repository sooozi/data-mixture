import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Coin from '../component/Coin';

const Counting = () => {
  //state의 count값만 가져온다!
  const count = useSelector(state=>state.count);
  const id = useSelector(state=>state.id);
  const pw = useSelector(state=>state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type:"INCREMENT", payload:{num:100}})
  }
  const decrease = () => {
    dispatch({type:"DECREMENT", payload:{num:100}})
  }
  const increase02 = () => {
    dispatch({type:"INCREMENT02", payload:{num:1000}})
  }
  const decrease02 = () => {
    dispatch({type:"DECREMENT02", payload:{num:1000}})
  }
  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"Hi, I'm participating in the CodingNoona React study group!", password:"Let's keep going and stay strong."}})
  }
  return (
    <div className="page-counting">
      <div className="creator-wrap">
        <div className="txt-wrap">
          <span className="txt-white txt-top">{id ? id : 'Click Me! 👉'}</span>
          <span className="txt-white txt-bottom">{pw}</span>
        </div>
        <Button className="btn-creator" onClick={login}>Creator 🧙‍♀️</Button>
      </div>
      <div className="coin-wrap">
        <Coin/> 
        <h1 className="txt-white">🕹️ Welcome to the Counting App 🕹️</h1>
        <div className="txt-box">
          <h5 className="txt-white txt-detail btn-shine">Take as much money as you want!</h5>
        </div>
      </div>
      <div className="btn-wrap">
        <h2 className="txt-white">{count}</h2>
        <Button variant="warning" onClick={decrease02}>1000 감소 ⬇️</Button>
        <Button variant="warning" onClick={decrease}>100 감소 ⬇️</Button>
        <Button variant="warning" onClick={increase}>100 증가 ⬆️</Button>
        <Button variant="warning" onClick={increase02}>1000 증가 ⬆️</Button>
      </div>
        {/* <ReduxBox /> */}
    </div>
  )
}

export default Counting
