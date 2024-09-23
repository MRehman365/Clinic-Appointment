import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LoginRegister from './Authentication/LoginRegister';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import ForgetPass from './Authentication/ForgetPass';
import { Otp } from './Authentication/Otp';
import { NewPassword } from './Authentication/NewPassword';
import Passchanged from './Authentication/Passchanged';
import LanguageSelector from './Home/LanguageSelect';

function App() {
  return (
    <div className='bg-[gray]'>
    <div className='max-w-[450px] mx-auto bg-[#ffffff]'>
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forget" element={<ForgetPass/>} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/passchanged" element={<Passchanged />} />
        {/* Home */}
        <Route path="/language" element={<LanguageSelector />} />
      </Routes>
    </Router>
    </div>
    </div>
  );
}

export default App;
