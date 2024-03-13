import { AiOutlineLogout } from "react-icons/ai";
import NavBar from "../NavBar/NavBar";
import "./Settings.css";

import React, { useState } from "react";
import { BiSolidChevronRight } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const Settings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCity, setSelectedCity] = useState("Cairo");

  // Function to handle language change
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className="img-profile  d-flex justify-content-center align-items-center">
        <img src="./images/log.jpg" alt="" />
      </div>
      <div className="container mt-5">
        <div className="language-div d-flex align-items-center">
          <div className=" fw-bold">Language</div>
          <div className="ms-auto ">
            <select
              className="form-select"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
            </select>
          </div>
        </div>

        <div className="language-div d-flex align-items-center city-div">
          <div className=" fw-bold">City</div>
          <div className="ms-auto ">
            <select
              className="form-select"
              value={selectedCity}
              onChange={handleCityChange}
            >
              <option value="Cairo">Cairo</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Damanhur">Damanhur</option>
              <option value="Damietta">Damietta</option>
              <option value="Asyut">Asyut</option>
              <option value="Aswan">Aswan</option>
              <option value="Sohag">Sohag</option>
              <option value="Suef">Suef</option>
              <option value="Hurghada">Hurghada</option>
              <option value="Tanta">Tanta</option>
              <option value="Mansoura">Mansoura</option>
              <option value="Banha">Banha</option>
              <option value="Minya">Minya</option>
              <option value="Faiyum">Faiyum</option>
              <option value="Zagazig">Zagazig</option>
              <option value="Ismailia">Ismailia</option>
              <option value="Suez">Suez</option>
              <option value="Rosetta">Rosetta</option>
              <option value="Qena">Qena</option>
              <option value="Port Said">Port Said</option>
              <option value="Mallawi">Mallawi</option>
              <option value="Kafr El Sheikh">Kafr El Sheikh</option>
              <option value="6th of October">6th of October</option>
              <option value="Giza">Giza</option>
            </select>
          </div>
        </div>
        <div className='profile-btns'>
      
      <button style={{color:'red'}}> <AiOutlineLogout style={{marginRight:'5px' , fontSize:'22px' , color:'red'}} /> Logout
  
      <span style={{}}><BiSolidChevronRight style={{color:'#000'}}/></span>
      </button>
      </div>
      <div className='profile-btns'>
      
      <button style={{color:'red', marginBottom:'20px'}}> <RiDeleteBin6Line style={{marginRight:'5px' , fontSize:'22px' , color:'red'}} /> Delete Account
  
      <span style={{bottom:'19px'}}><BiSolidChevronRight style={{color:'#000'}}/></span>
      </button>
      </div>
      </div>
    </div>
  );
};

export default Settings;
