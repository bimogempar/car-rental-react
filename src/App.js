import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import MyLayout from './components/MyLayout';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
  );
}

export default App;
