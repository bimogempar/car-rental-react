import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Cars from './pages/Cars';
import RegisterCars from './pages/RegisterCars';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/register" element={<RegisterCars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
