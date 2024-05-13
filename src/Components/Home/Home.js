import NavBar from "../NavBar/NavBar";
import "./Home.css";
import React, { useContext} from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { User } from "../Auth/Context";
import Alert from 'react-bootstrap/Alert';

import { IoMdClose } from "react-icons/io";

const Home = ({showAlert, setShowAlert}) => {


// Show the Alert component on successful login

setTimeout(() => {
  setShowAlert(false); 
}, 3000)


  const userNow = useContext(User);
  console.log(userNow)
  return (
    <div className="home-page">
      <NavBar />

  

      {/* { <div style={{position:"relative"}}> <Alert variant="success" style={{zIndex:"3", textAlign:"center", position:"fixed", width:"100%"}}>
            You have logged successfully
          </Alert>      <IoMdClose style={{ position: "absolute"  ,right:"17px", bottom:"-25px" ,zIndex:"3", cursor:"pointer" }} onClick={()=> {setShowAlert(false)}} />
 </div>
 } */}
  { showAlert && (
      <div className='centered-alert-home'>
        <Alert variant="success">
          You have logged in successfully
          <IoMdClose className='close-icon-home' onClick={() => setShowAlert(false)} />
        </Alert>
      </div>
    )}
      <Carousel fade className="main-carosuel" >
        <Carousel.Item>
          <div className="carosuel-img">
            
          <img
            src="./images/1.jpg"
            alt=""
            text="First slide"
            style={{ width: "100%",  }}
          />
          </div>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="carosuel-img">
            
          <img
            src="./images/2.jpg"
            alt=""
            text="Second slide"
            style={{ width: "100%",  }}
          />
          </div>
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      {/* <div className="h-btn d-flex justify-content-center  ">
        <Link className="rounded-pill text-decoration-none main-btn" to="">
          Choose a Test
        </Link>
      </div> */}

      <section className="container choose-sec">
        <div className="row">
          <div className="col-md-4  ">
            <div className="choose-card">
              <img src="./images/1.jpg" style={{ width: "100%" }} alt="" />
              <div className="card-text">
                <h5> Illness Name </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <Link to={'/testone'}>choose a Test</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4  ">
            <div className="choose-card">
              <img src="./images/1.jpg" style={{ width: "100%" }} alt="" />
              <div className="card-text">
                <h5> Illness Name </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <Link>choose a Test</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="choose-card">
              <img src="./images/1.jpg" style={{ width: "100%" }} alt="" />
              <div className="card-text">
                <h5> Illness Name </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>

              <div className="d-flex justify-content-end">
                <Link>choose a Test</Link>
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


