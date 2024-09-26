import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import LoginRegister from "./Authentication/LoginRegister";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import ForgetPass from "./Authentication/ForgetPass";
import { Otp } from "./Authentication/Otp";
import { NewPassword } from "./Authentication/NewPassword";
import Passchanged from "./Authentication/Passchanged";
import LanguageSelector from "./Appointment/LanguageSelect";
import Home from "./Appointment/Home";
import Doctorlist from "./Appointment/Doctorlist";
import Doctordetail from "./Appointment/Doctordetail";
import AppointmentShadule from "./Appointment/AppointmentShadule";
import Mainhome from "./Home/Mainhome";
import Categories from "./Home/Categories";
import Digestion from "./Home/Digestion";
import Details from "./Home/Details";
import ChatInterface from "./Home/Chat";

function App() {
  return (
    <div className="bg-[gray]">
      <div className="max-w-[450px] mx-auto bg-[#fafafa]">
        <Router>
          <Routes>
            <Route path="/" element={<LoginRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget" element={<ForgetPass />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/newpassword" element={<NewPassword />} />
            <Route path="/passchanged" element={<Passchanged />} />
            {/* Appointment */}
            <Route path="/language" element={<LanguageSelector />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doctorlist" element={<Doctorlist />} />
            <Route path="/doctordetail" element={<Doctordetail />} />
            <Route path="/shadule" element={<AppointmentShadule />} />
            {/* Home */}
            <Route path="/mainhome" element={<Mainhome />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/digestion" element={<Digestion />} />
            <Route path="/details" element={<Details />} />
            <Route path="/chat" element={<ChatInterface />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
