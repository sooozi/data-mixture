import { useState } from 'react';
import RpsBox from '../component/RpsBox';
import { useNavigate } from 'react-router-dom';

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
const RpsPage = () => {
  const [count, setCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [computerCount, setComputerCount] = useState(0);
  const [userSelect, setUserSelect] = useState(null);
  const [randomSelect, setRandomSelect] = useState(null);
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]); //유저에 선택값
    let computerChoice = showRandom(); //컴퓨터에 랜덤값
    setRandomSelect(computerChoice); //랜덤셀렉터로 초기화
    setResult(judgement(choice[userChoice], computerChoice)); //결과값

    setCount(prevCount => prevCount + 1);//버튼 클릭 횟수
    if(judgement(choice[userChoice], computerChoice) === "win"){
      setUserCount(prevUserCount => prevUserCount + 1);
    } else if (judgement(choice[userChoice], computerChoice) === "lose") {
      setComputerCount(prevComputerCount => prevComputerCount + 1);
    }
  };

  const judgement = (user, computer) => {
    if(user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose"
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose"
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose"
    }
  }

  const showRandom = () => {
    const choiceKey = Object.keys(choice); //객체에 키값만 뽑아서 배열로 만들어주는 함수
    const randomImg = choiceKey[Math.floor(Math.random() * choiceKey.length)]; //choiceKey[인덱스번호]
    return choice[randomImg]; //객체에서 랜덤한 아이템에 해당하는 내용들을 가져옴!
  }

  const goToWeatherAppPage = () => {
    navigate("/");
  }

  return (
    <div className="App">
      <button onClick={goToWeatherAppPage}>goToWeatherAppPage</button>
      <div className="cont-wrap count-wrap">
        <span className="num-count">게임 횟수 : {count}</span>
        <span className="num-count">🙋‍♀️ : {userCount}</span>
        <span className="num-count">👩‍💻 : {computerCount}</span>
      </div>
      <div className="cont-wrap">
        <RpsBox title="🙋‍♀️ YOU" item={userSelect} result={result}/>
        <RpsBox title="👩‍💻 COMPUTER" item={randomSelect} result={result}/>
      </div>
      <div className="cont-wrap">
        <button onClick={() => play("scissors")}>✌️</button>
        <button onClick={() => play("rock")}>✊</button>
        <button onClick={() => play("paper")}>✋</button>
      </div>
    </div>
  );
}

export default RpsPage;
