import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>    
      <div className='container'>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
