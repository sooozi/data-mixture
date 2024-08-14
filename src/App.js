import { useState } from 'react';
import './App.css';
import RpsBox from './component/RpsBox';

const choice = {
  rock : {
    name:"Rock",
    img:"https://cdn-icons-png.flaticon.com/512/16356/16356316.png"
  },
  paper : {
    name:"Paper",
    img:"https://cdn-icons-png.flaticon.com/512/16356/16356303.png"
  },
  scissors : {
    name:"Scissors",
    img:"https://cdn-icons-png.flaticon.com/512/16356/16356325.png"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [randomSelect, setRandomSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = showRandom();
    setRandomSelect(computerChoice); //랜덤셀렉터로 초기화
  }

  const showRandom = () => {
    const choiceKey = Object.keys(choice); //객체에 키값만 뽑아서 배열로 만들어주는 함수!
    const randomImg = choiceKey[Math.floor(Math.random() * choiceKey.length)]; //choiceKey[인덱스번호]
    return choice[randomImg]; //객체에서 랜덤한 아이템에 해당하는 내용들을 가져옴!
  }

  return (
    <div className="App">
      <div className="cont-wrap">
        <RpsBox title="🙋‍♀️ YOU" item={userSelect}/>
        <RpsBox title="👩‍💻 COMPUTER" item={randomSelect}/>
      </div>
      <div className="cont-wrap">
        <button onClick={() => play("scissors")}>✌️</button>
        <button onClick={() => play("rock")}>✊</button>
        <button onClick={() => play("paper")}>✋</button>
      </div>
    </div>
  );
}

export default App;
