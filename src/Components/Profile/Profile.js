import "./Profile.css";

import React, { useContext, useRef, useState } from "react";
import { FaPen } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { BiSolidChevronRight } from "react-icons/bi";
import { TfiUpload } from "react-icons/tfi";
import { IoInformationSharp } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import Lottie from "lottie-react";
import analysisAnimation from "../../animation/analysis.json";

import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router";
import ImageContext from "../ImageProfile";

const Profile = () => {
  const navigate = useNavigate();
  const lottieRef = useRef();

  // const [selectedImage, setSelectedImage] = useState(null);
  const { selectedImage, setSelectedImage } = useContext(ImageContext);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click(); // Ensure that fileInputRef is not null before calling click()
  };

  return (
    <>
      <NavBar />

      <div className="d-flex overflow-x-hidden">
        <div className="container ">
          <div className="row d-flex">
            <div className="col-md-6 ">
              <div className="img-profile   ">
                {selectedImage ? (
                  <img src={selectedImage} alt="" />
                ) : (
                  <img src="./images/log.jpg" alt="" />
                )}
                <div className="fapen-icon">
                  <button className="fapen-btn" onClick={handleClick}>
                    <IoCameraOutline />
                  </button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />
              </div>

              <div className="text-center profile-info">
                <h3 style={{ marginTop: "15px" }}>Profile name </h3>
                <p style={{ marginTop: "15px" }}>profile_email@gmail.com</p>
                <div>
                  <button
                    className="main-btn rounded-pill border-0 "
                    onClick={() => navigate("/edit/profile")}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
              {/* <div className='divider'></div> */}

              <div className="profile-btns">
                <button>
                  {" "}
                  <TfiUpload
                    style={{ marginRight: "5px", fontSize: "22px" }}
                  />{" "}
                  Uploaded analysis
                  <span>
                    <BiSolidChevronRight />
                  </span>
                </button>
              </div>
              <div className="profile-btns">
                <button>
                  {" "}
                  <IoInformationSharp
                    style={{
                      marginRight: "5px",
                      fontSize: "22px",
                      color: "#3daed2",
                    }}
                  />{" "}
                  Information
                  <span>
                    <BiSolidChevronRight />
                  </span>
                </button>
              </div>
              <div className="profile-btns">
                <button style={{ color: "red", marginBottom: "20px" }}>
                  {" "}
                  <AiOutlineLogout
                    style={{
                      marginRight: "5px",
                      fontSize: "22px",
                      color: "red",
                    }}
                  />{" "}
                  Logout
                  <span style={{ bottom: "19px" }}>
                    <BiSolidChevronRight style={{ color: "#000" }} />
                  </span>
                </button>
              </div>
            </div>
            <div className="col-md-6  ">
              <div className="animation-div ">
                <Lottie
                  className="analysis-animation "
                  lottieRef={lottieRef}
                  onLoadedImages={() => {
                    lottieRef.current.setSpeed(0.5);
                  }}
                  animationData={analysisAnimation}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
