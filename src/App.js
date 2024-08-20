import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BoxPage from './page/BoxPage';
import HomePage from './page/HomePage';
import ProductDetailPage from './page/ProductDetailPage';
import RpsPage from './page/RpsPage';
import WeatherAppPage from './page/WeatherAppPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/BoxPage" element={<BoxPage/>}></Route>
        <Route path="/RpsPage" element={<RpsPage/>}></Route>
        <Route path="/WeatherAppPage" element={<WeatherAppPage/>}></Route>
        <Route path="/productDetailPage" element={<ProductDetailPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
