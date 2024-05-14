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
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import DoctorRegisteration from "./Components/DoctorRegisteration/DoctorRegisteration";
import DocLogin from "./Components/docLogin/DocLogin";
import DocDashboard from "./Components/docDashboard/DocDashboard";
import { useState } from "react";
import DocRequireAuth from "./Components/RequireAuth/DocRequireAuth";
import PatientDetails from "./Components/PatientDetails/PatientDetails";
import PatientDashboard from "./Components/docDashboard/PatientDashboard";
import DoctorReport from "./Components/DoctorReport/DoctorReport";
import UploadedTests from "./Components/uploadedTests/UploadedTests";
import DoctorsList from "./Components/DoctorsList/DoctorsList";

function App() {

  const [showAlert, setShowAlert] = useState();
  const [showRegisterAlert, setShowRegisterAlert] = useState()


  return (
    <>
      <ImageProvider>
        <Routes>
         



          <Route path="/doctorRegisteration" element={<DoctorRegisteration setShowRegisterAlert={setShowRegisterAlert} /> } />
          <Route path="/doctorlogin" element={<DocLogin showRegisterAlert={showRegisterAlert} setShowAlert={setShowAlert}   setShowRegisterAlert={setShowRegisterAlert}  />} />

          <Route element={<DocRequireAuth/>}>

          <Route path="/doctordashboard" element={<DocDashboard showAlert={showAlert} setShowAlert={setShowAlert}  />} />
          <Route path="/patientdetails/:patientid" element={<PatientDetails />} />
          <Route path="/patientdashboard" element={<PatientDashboard />} />
          <Route path="/report/:docid/:testid/:patientid" element={<DoctorReport showAlert={showAlert} setShowAlert={setShowAlert}  />} />
          </Route>





          <Route path="/" element={<SignUp   setShowRegisterAlert={setShowRegisterAlert} />} />
          <Route path="/login" element={<Login  showRegisterAlert={showRegisterAlert} setShowAlert={setShowAlert}   setShowRegisterAlert={setShowRegisterAlert} />} />

            <Route element={<RequireAuth />}>
              <Route path="/home" element={<Home  showAlert={showAlert} setShowAlert={setShowAlert}   />} />
              <Route path="/testone" element={<BloodTestOne />} />
              <Route path="/testone/result" element={<BloodTestOneResult />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/uploadedtests" element={<UploadedTests />} />
              <Route path="/doctorslist" element={<DoctorsList />} />
              <Route path="/edit/profile" element={<EditProfile />} />
              <Route path="/chat" element={<ChatBot />} />
            </Route>

          
          
        </Routes>
      </ImageProvider>
    </>
  );
}

export default App;
