import { useState } from 'react';
import './App.css';

function RpsMePage() {
  const [emoji, setEmoji] = useState('');
  const [randomEmoji, setRandomEmoji] = useState('');
  const scissor = () => {
    setEmoji('✌️');
    showRandomEmoji();
  }
  const rock = () => {
    setEmoji('✊');
    showRandomEmoji();
  }
  const paper = () => {
    setEmoji('✋');
    showRandomEmoji();
  }
  const emojis = ['✌️', '✋', '✊']
  function showRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    setRandomEmoji(emojis[randomIndex]);
  }
  return (
    <div className="App">
      <div>
        <span>you</span>
        <div className="result">{emoji}</div>
        <span>tie</span>
      </div>
      <div>
        <span>computer</span>
        <div className="result">{randomEmoji}</div>
        <span>tie</span>
      </div>
      <div>
        <button onClick={scissor}>✌️</button>
        <button onClick={rock}>✊</button>
        <button onClick={paper}>✋</button>
      </div>
    </div>
  );
}

export default RpsMePage;
