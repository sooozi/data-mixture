import React, { Component } from 'react';
import './App.css';
import RpsClassBox from "./component/RpsClassBox";

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

export default class AppClass extends Component {
    constructor(props){
        super(props)
        this.state= {
            count: 0,
            userCount: 0,
            computerCount: 0,
            userChoice: null,
            computerChoice: null,
            result: ""
        }
    }

    play = (userChoice) => {
        const userSelection = choice[userChoice];

        // 임의의 컴퓨터 선택을 추가로 구현 가능
        const computerOptions = ["rock", "paper", "scissors"];
        const computerSelection = choice[computerOptions[Math.floor(Math.random() * computerOptions.length)]];

        this.setState({
            userChoice: userSelection,
            computerChoice: computerSelection,
        }, () => this.determineWinner())
    }

    determineWinner = () => {
        const { userChoice, computerChoice } = this.state;

        if (userChoice === computerChoice) {
            this.setState({
                count: this.state.count +1 ,
                userCount: this.state.userCount + 1,
                result: "Tie"
            });
        } else if (
            (userChoice.name === "Rock" && computerChoice.name === "Scissors") ||
            (userChoice.name === "Scissors" && computerChoice.name === "Paper") ||
            (userChoice.name === "Paper" && computerChoice.name === "Rock")
        ) {
            this.setState({
                count: this.state.count +1 ,
                userCount: this.state.userCount + 1,
                result: "Win"
            });
        } else {
            this.setState({
                count: this.state.count +1 ,
                computerCount: this.state.computerCount + 1,
                result: "Lose"
            });
        }
    }

    render() {
        return (
        <div className="AppClass">
        <div className="cont-wrap count-wrap">
            <span className="num-count">게임 횟수 : {this.state.count}</span>
            <span className="num-count">🙋‍♀️ : {this.state.userCount}</span>
            <span className="num-count">👩‍💻 : {this.state.computerCount}</span>
        </div>
        <div className="cont-wrap">
            <RpsClassBox title="🙋‍♀️ YOU" item={this.state.userChoice} result={this.state.result}/>
            <RpsClassBox title="👩‍💻 COMPUTER" item={this.state.computerChoice} result={this.state.result}/>
        </div>
        <div className="cont-wrap">
            <button onClick={() => this.play("scissors")}>✌️</button>
            <button onClick={() => this.play("rock")}>✊</button>
            <button onClick={() => this.play("paper")}>✋</button>
        </div>
        </div>
        )
    }
}
