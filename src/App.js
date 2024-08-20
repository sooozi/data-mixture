import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RpsPage from './page/RpsPage';
import WeatherAppPage from './page/WeatherAppPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WeatherAppPage/>}></Route>
        <Route path="/RpsPage" element={<RpsPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
