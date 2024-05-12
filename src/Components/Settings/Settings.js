import { AiOutlineLogout } from "react-icons/ai";
import NavBar from "../NavBar/NavBar";
import "./Settings.css";

import React, { useContext, useState } from "react";
import { BiSolidChevronRight } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ImageContext from "../ImageProfile";
import Footer from "../Footer/Footer";

const Settings = () => {
  // const [selectedLanguage, setSelectedLanguage] = useState(
  //   localStorage.getItem("selectedLanguage") || "English"
  // );
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem("selectedCity") || "Cairo"
  );

  // Function to handle language change
  // const handleLanguageChange = (e) => {
  //   const language = e.target.value;
  //   setSelectedLanguage(e.target.value);
  //   localStorage.setItem("selectedLanguage", language);
  // };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    localStorage.setItem("selectedCity", city);
  };

  // const [selectedImage, setSelectedImage] = useState(null);
  const { selectedImage } = useContext(ImageContext);

  return (
    <>
      <NavBar />
      {/* <div className="img-profile  d-flex justify-content-center align-items-center">
        {selectedImage ? (
          <img src={selectedImage} alt="" />
        ) : (
          <img src="./images/log.jpg" alt="" />
        )}
      </div> */}
      <div className="container mt-5">
        {/* <div className="language-div d-flex align-items-center">
          <div className=" fw-bold ms-2">Language</div>
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
        </div> */}

        <div className="language-div d-flex align-items-center city-div ">
          <div className=" fw-bold ms-2 ">City</div>
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
        {/* <div className="profile-btns">
          <button style={{ color: "red" }}>
            {" "}
            <AiOutlineLogout
              style={{ marginRight: "5px", fontSize: "22px", color: "red" }}
            />{" "}
            Logout
            <span style={{}}>
              <BiSolidChevronRight style={{ color: "#000" }} />
            </span>
          </button>
        </div>
        <div className="profile-btns">
          <button style={{ color: "red", marginBottom: "80px" }}>
            {" "}
            <RiDeleteBin6Line
              style={{ marginRight: "5px", fontSize: "22px", color: "red" }}
            />{" "}
            Delete Account
            <span style={{ bottom: "78px" }}>
              <BiSolidChevronRight style={{ color: "#000" }} />
            </span>
          </button>
        </div> */}
      </div>
      <Footer bottom={"0px"} />
    </>
  );
};

export default Settings;
