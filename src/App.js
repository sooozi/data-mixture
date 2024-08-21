import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NAV from './component/Nav';
import BoxPage from './page/BoxPage';
import HomePage from './page/HomePage';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import ProductDetailPage from './page/ProductDetailPage';
import RpsPage from './page/RpsPage';
import WeatherAppPage from './page/WeatherAppPage';

function App() {
  const location = useLocation();
  
  //location.pathname.startsWith(path) : 경로가 해당 문자열로 시작하는지 확인
  const showNav = ["/login", "/shop", "/product"].some(path => location.pathname.startsWith(path));

  return (
    <div className="App">
      {showNav && <NAV />}
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/BoxPage" element={<BoxPage/>}></Route>
        <Route path="/RpsPage" element={<RpsPage/>}></Route>
        <Route path="/WeatherAppPage" element={<WeatherAppPage/>}></Route>
        <Route path="/productDetailPage" element={<ProductDetailPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/shop" element={<ProductAll/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
