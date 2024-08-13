import './App.css';
import RpsBox from './component/RpsBox';

function App() {
  return (
    <div className="App">
      <div className="cont-wrap">
        <RpsBox title="you"/>
        <RpsBox title="computer"/>
      </div>
      <div className="cont-wrap">
        <button>✌️</button>
        <button>✊</button>
        <button>✋</button>
      </div>
    </div>
  );
}

export default App;
