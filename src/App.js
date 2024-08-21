import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BoxPage from './page/BoxPage';
import HomePage from './page/HomePage';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
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
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/shop" element={<ProductAll/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
