import "./Profile.css";
import Cookie from "cookie-universal";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BiSolidChevronRight } from "react-icons/bi";
import { TfiUpload } from "react-icons/tfi";
import { AiOutlineLogout } from "react-icons/ai";
import Lottie from "lottie-react";
import analysisAnimation from "../../animation/analysis.json";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router";
import Footer from "../Footer/Footer";
import axios from "axios";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const lottieRef = useRef();

  // const userNow = useContext(User);

  const cookie = Cookie();
  // cookie.set("name", userNow.auth.userDetails.name)

  // const userName =  cookie.get("name") || (userNow.auth.userDetails && userNow.auth.userDetails.name) || "profileName";

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Retrieve user name from local storage or cookie
    const storedName = cookie.get("userName");

    if (storedName) {
      setUserName(storedName);
    } else {
      // If not available, set default value
      setUserName("profileName");
    }
  }, []);

  useEffect(() => {
    // Retrieve user name from local storage or cookie
    const storedEmail = cookie.get("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    } else {
      // If not available, set default value
      setUserEmail("profileEmail");
    }
  }, []);

  const baseUrl = "https://bload-test.icanforsoftware.com/api/";

  const token = cookie.get("Bearer");
  async function handleLogOut() {
    setLoading(true);
    let res = await axios.post(
      `${baseUrl}logout?api_password=AHMED$2024`,
      null,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  
    setLoading(false);
    cookie.remove("Bearer");
    navigate("/");
  }

  return (
    <>
      <NavBar />

      <div className="d-flex overflow-x-hidden ">
        <div className="container ">
          <div className="row d-flex">
            <div className="col-md-6 ">
              <div className="profile-info ">
                <div
                  className="  d-flex justify-content-between align-items-center "
                  style={{ minWidth: "500px" }}
                >
                  <h3 style={{ fontWeight: "bold" }}>Name: </h3>{" "}
                  <h3 className="me-auto ms-3">{userName} </h3>
                </div>
                <div
                  className=" d-flex justify-content-between align-items-center "
                  style={{ miWidth: "500px" }}
                >
                  <h3 style={{ fontWeight: "bold" }}>Email: </h3>{" "}
                  <h5 className="me-auto ms-3" style={{}}>
                    {userEmail}{" "}
                  </h5>
                </div>
              </div>

              <div className="profile-btns">
                <button onClick={() => navigate("/uploadedtests")}>
                  {" "}
                  <TfiUpload
                    style={{ marginRight: "5px", fontSize: "22px" }}
                  />{" "}
                  Uploaded Tests
                  <span>
                    <BiSolidChevronRight />
                  </span>
                </button>
              </div>
              <div className="profile-btns"></div>
              <div className="profile-btns">
                <button
                  style={{ color: "red", marginBottom: "80px" }}
                  onClick={handleLogOut}
                >
                  {" "}
                  <AiOutlineLogout
                    style={{
                      marginRight: "5px",
                      fontSize: "22px",
                      color: "red",
                    }}
                  />{" "}
                  {loading ? "Logging out..." : "Logout"}
                  <span style={{ bottom: "78px" }}>
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
      <Footer bottom={"-350px"} />
    </>
  );
};

export default Profile;

// const [selectedImage, setSelectedImage] = useState(null);
// const { selectedImage, setSelectedImage } = useContext(ImageContext);
// const fileInputRef = useRef(null);

// const handleFileSelect = (event) => {
//   const file = event.target.files[0];
//   if (file && file.type.startsWith("image/")) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       setSelectedImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//   }
// };

// const handleClick = () => {
//   fileInputRef.current.click(); // Ensure that fileInputRef is not null before calling click()
// };

// const handleDelete = () => {
//   setSelectedImage(null);
// };

//  {/* <div className="img-profile   ">
//                 {selectedImage ? (
//                   <img src={selectedImage} alt="" />
//                 ) : (
//                   <img src="./images/log.jpg" alt="" />
//                 )}
//                 <div className="fapen-icon">
//                   <button className="fapen-btn" onClick={handleClick}>
//                     <IoCameraOutline />
//                   </button>
//                 </div>
//                 {selectedImage && (
//                   <div className="delete-icon">
//                     <button className="delete-btn" onClick={handleDelete}>
//                       <RiDeleteBin6Line />
//                     </button>
//                   </div>
//                 )}

//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   style={{ display: "none" }}
//                   onChange={handleFileSelect}
//                 />
//               </div> */}

//  {/* <div>
//                   <button
//                     className="main-btn rounded-pill border-0 "
//                     onClick={() => navigate("/edit/profile")}
//                   >
//                     Edit Profile
//                   </button>
//                 </div> */}

//               {/* <div className='divider'></div> */}
