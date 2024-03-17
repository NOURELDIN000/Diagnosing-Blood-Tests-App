import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import BloodTestOne from "./Components/BloodTestOne/BloodTestOne";
import BloodTestOneResult from "./Components/BloodTestOneResult/BloodTestOneResult";
import Profile from "./Components/Profile/Profile";
import EditProfile from "./Components/EditProfile/EditProfile";
import Settings from "./Components/Settings/Settings";
import { ImageProvider } from "./Components/ImageProfile";
import ChatBot from "./Components/ChatBot/ChatBot";


function App() {
  return (
    <>
        <ImageProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/testone" element={<BloodTestOne />} />
        <Route path="/testone/result" element={<BloodTestOneResult />} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit/profile" element={<EditProfile/>} />
        <Route path="/chat" element={<ChatBot/>} />
      </Routes>
        
        </ImageProvider>
    </>
  );
}

export default App;
