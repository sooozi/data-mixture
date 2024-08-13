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
    showRandom();
  }

  function showRandom() {
    const choiceKey = Object.keys(choice);
    const randomImg = choiceKey[Math.floor(Math.random() * choiceKey.length)];
    setRandomSelect(choice[randomImg]);
    console.log(randomImg)
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
