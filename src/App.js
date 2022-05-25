import 'antd/dist/antd.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cars from './components/Cars';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </div>
  );
}

export default App;
