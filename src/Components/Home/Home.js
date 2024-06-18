import NavBar from "../NavBar/NavBar";
import "./Home.css";
import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { User } from "../Auth/Context";
import Alert from "react-bootstrap/Alert";

import { IoMdClose } from "react-icons/io";

const Home = ({ showAlert, setShowAlert }) => {
  setTimeout(() => {
    setShowAlert(false);
  }, 3000);

  const userNow = useContext(User);
  console.log(userNow);

  return (
    <div className="home-page">
      <NavBar />

      {showAlert && (
        <div className="centered-alert-home">
          <Alert
            variant="success"
            style={{ color: "#fff", background: "#75b798" }}
          >
            You have logged in successfully.
            <IoMdClose
              className="close-icon-home"
              onClick={() => setShowAlert(false)}
            />
          </Alert>
        </div>
      )}
      <Carousel fade className="main-carosuel" style={{ position: "relative" }}>
        <Carousel.Item>
          <div className="carosuel-img">
            <img
              src="./images/1.jpg"
              alt=""
              text="First slide"
              style={{ width: "100%" }}
            />
          </div>
          <Carousel.Caption
            className=""
            style={{
              position: "absolute",
              bottom: "300px",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              bordedRadiuos: "10px",
            }}
          >
            <h1 className="fw-bold  d-inline p-0">We Care About Your Health</h1>
            {/* <p>We Care About Your Health.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosuel-img">
            <img
              src="./images/2.jpg"
              alt=""
              text="Second slide"
              style={{ width: "100%" }}
            />
          </div>
          <Carousel.Caption
            className=""
            style={{
              position: "absolute",
              bottom: "300px",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              bordedRadiuos: "10px",
            }}
          >
            <h1 className="fw-bold  d-inline p-0">We Care About Your Health</h1>
            {/* <p>We Care About Your Health.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="container choose-sec">
        <div className="row justify-content-lg-center ">
          <div className="col-md-6 col-lg-4 ">
            <div className="choose-card">
              {/* <img src="./images/1.jpg" style={{ width: "100%" }} alt="" /> */}
              <div className="card-text">
                <h3 className="text-center fw-bold"> CKD disease </h3>
                <p>
                  Kidney disease, also known as renal disease, refers to a
                  condition where the kidneys lose their ability to effectively
                  filter waste and excess fluids from the blood, leading to an
                  accumulation of harmful substances in the body. This can
                  progress to chronic kidney disease (CKD) or acute kidney
                  injury (AKI) and can result from various causes, including
                  diabetes, high blood pressure, infections, and genetic factors
                  (for more details click <Link to={"/ckddetails"}>here</Link>).
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <Link className="choose-btn" to={"/testone"}>
                  choose a Test
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6  col-lg-4">
            <div className="choose-card">
              {/* <img src="./images/1.jpg" style={{ width: "100%" }} alt="" /> */}
              <div className="card-text">
                <h3 className="text-center fw-bold"> Liver disease </h3>
                <p>
                  Liver disease refers to any condition that impairs the liver's
                  function, causing it to lose its ability to process nutrients,
                  filter toxins, and produce vital proteins. This can include
                  conditions such as hepatitis, fatty liver disease, cirrhosis,
                  and liver cancer, and can result from factors like infections,
                  alcohol abuse, obesity, and genetic disorders (for more
                  details click <Link to={"/liverdetails"}>here</Link>).
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <Link className="choose-btn" to={"/testtwo"}>
                  choose a Test
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;








      {/* { <div style={{position:"relative"}}> <Alert variant="success" style={{zIndex:"3", textAlign:"center", position:"fixed", width:"100%"}}>
            You have logged successfully
          </Alert>      <IoMdClose style={{ position: "absolute"  ,right:"17px", bottom:"-25px" ,zIndex:"3", cursor:"pointer" }} onClick={()=> {setShowAlert(false)}} />
 </div>
 } */}




{
  /* <div className="h-btn d-flex justify-content-center  ">
        <Link className="rounded-pill text-decoration-none main-btn" to="">
          Choose a Test
        </Link>
      </div> */
}
