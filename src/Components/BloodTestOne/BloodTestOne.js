import Alert from 'react-bootstrap/Alert';
import { IoMdClose } from "react-icons/io";
import NavBar from "../NavBar/NavBar";
import "./BloodTestOne.css";
// import Lottie from "lottie-react";
// import doneAnimation from "../../animation/done.json"
import React, {  useEffect, useRef, useState } from "react";
import { Link} from 'react-router-dom';
import axios from 'axios';
import Cookie from "cookie-universal";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';





const BloodTestOne = () => {

const [showNegativeTestAlert, setShowNegativeTestAlert] = useState(false);
const [showPositiveTestAlert, setShowPositiveTestAlert] = useState(false);

  // const [testImage, setTestImage] = useState();
  const inputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);

  const [loading, setLoading] = useState(false);


// const nav = useNavigate();

  const handleChooseImage = () => {
    if (inputRef.current) {
      inputRef.current.click(); // Click the hidden input element
    }
  };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0]; // Get the selected file
  //   if (file) {
  //     // Read the selected file as a data URL
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setSelectedImage(e.target.result); // Set the selected image as background
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };


  // const handleImageChange = (event) => {
  //   const file = event.target.files[0]; // Get the selected file
  //   console.log(file.type)
  //   if (file) {
  //     // Read the selected file as a data URL
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const showImgElement = document.querySelector('.show-img');
  //       if (showImgElement ) {
  //         showImgElement.innerHTML = ''; // Clear previous content
          
  //         const imageElement = document.createElement('img');
  //         imageElement.src = e.target.result;
  //         showImgElement.appendChild(imageElement);
  //         setImageSelected(true);
          
  //       }
          
        
        
  //     };
  //     reader.readAsDataURL(file);
    
   
  //   }
    
  // };


  // const handleImageChange = (event) => {
  //   const file = event.target.files[0]; // Get the selected file
  //   console.log(file.type);
  //   if (file) {
  //     // Check if the file is an image
  //     if (file.type.startsWith("image/")) {
  //       // For image files, display the image
  //       const reader = new FileReader();
  //       reader.onload = (e) => {
  //         const showImgElement = document.querySelector('.show-img');
          
  //         setSelectedImage(e.target.result);
  //         showImgElement.style.backgroundImage = `url(${e.target.result})`
  //         setImageSelected(true);
  //       };
  //       reader.readAsDataURL(file);
  //     } 
  //     if (file.type.startsWith("application/")) {
  //       // For image files, display the image
  //       const reader = new FileReader();
       
  //         const showImgElement = document.querySelector('.show-img');
  //         // setSelectedImage(e.target.result);
  //         showImgElement.style.backgroundImage = 'none'
  //         showImgElement.style.display = 'flex';
  //           showImgElement.style.justifyContent = 'center';
  //            showImgElement.style.alignItems = 'center';
  //           showImgElement.textContent = file.name;
  //           setSelectedImage(null);
  //         setImageSelected(true);
        
  //       reader.readAsDataURL(file);
  //     }
  //   }
  // }




  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    console.log("File type:", file.type);
    if (file) {
      // Read the selected file as a data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        const showImgElement = document.querySelector('.show-img');
        if (showImgElement) {
          showImgElement.innerHTML = ''; // Clear previous content
          if (file.type.startsWith('image/')) {
            // For image files, display the image
            const imageElement = document.createElement('img');
            imageElement.src = e.target.result;
            showImgElement.appendChild(imageElement);
            // showImgElement.style.backgroundImage = `url(${e.target.result})`;
            setSelectedImage(e.target.result);
            ;
          } else {
            
            // For non-image files, clear background and center content
            
            showImgElement.style.backgroundImage = 'none';
            showImgElement.style.display = 'flex';
            showImgElement.style.justifyContent = 'center';
            showImgElement.style.alignItems = 'center';
            showImgElement.textContent = file.name;
            setSelectedImage(null);
          }
          setImageSelected(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };




  useEffect(() => {
    // Effect to update imageSelected state when selectedImage state changes
    if (selectedImage) {
      setImageSelected(true);
    }
  }, [selectedImage]);


  // const handleImageChange = (event) => {
  //   const file = event.target.files[0]; // Get the selected file
  //   // Check if the file is an image
  //   if (  file.type.startsWith('image/')) {
  //     // For image files, display the image
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const showImgElement = document.querySelector('.show-img');
  //       if (showImgElement) {
  //         setSelectedImage(e.target.result);
  //         // showImgElement.style.backgroundImage = `url(${e.target.result})`;
  //         setImageSelected(true);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     // For non-image files, clear background and display file name
  //     const showImgElement = document.querySelector('.show-img');
  //     if (showImgElement) {
  //       showImgElement.style.backgroundImage = 'none';
  //       showImgElement.style.display = 'flex';
  //       showImgElement.style.justifyContent = 'center';
  //       showImgElement.style.alignItems = 'center';
  //       showImgElement.textContent = file.name;
  //       setSelectedImage(null); // Reset selectedImage state
  //       setImageSelected(true);
  //     }
  //   }
  // };
  





  const cookie = Cookie();


  const token = cookie.get("Bearer")
// async function startTest(){

// setLoading(true)
//   let res = await axios.post(`http://127.0.0.1:8000/api/CKD?api_password=AHMED$2024`, {
//     image : inputRef
//   } ,
//        {
//         headers:{
//           "Authorization": "Bearer " + token
//         }
//        }
  
  
// )
// console.log(res)
// setLoading(false)

// }



const startTest = async () => {
  setLoading(true);
  const file = inputRef.current.files[0];
  const formData = new FormData();
  formData.append("image", file);

  try {
    let res = await axios.post(
      `http://127.0.0.1:8000/api/CKD?api_password=AHMED$2024`,
      formData,
      {
        headers: {
          "Authorization": "Bearer " + token,
          "Content-Type": "multipart/form-data"
        }
      }
    );
    console.log(res);
    if (res.data.commandResult === "CKD"){
      setShowPositiveTestAlert(true)
    } else{
      setShowNegativeTestAlert(true)
    }
    // if(res.commandResult === "NOT CKD"){
    //   setShowNegativeTestAlert(true)
    // }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

















  return (
    <div className="main-blood-test-one"> 
      <NavBar />

      <DropdownButton
    // key={'start'}
    
    drop={'start'}
    title={
      <div className="vertical-dots">
        <span>&#183;</span>
        <span>&#183;</span>
        <span>&#183;</span>
      </div>
    }
    className='text-end mt-2 custom-dropdown-main ' // Add custom-dropdown class here
    style={{position:"absolute", right:"5px"}}
  >
    <Dropdown.Item eventKey="1" >
      <Link className='custom-dropdown'  to={'/testone'}>CKD Test</Link>
    </Dropdown.Item>
    <Dropdown.Item eventKey="2" >
      <Link className='custom-dropdown' to={'/testtwo'}>Liver Test</Link>
    </Dropdown.Item>
  </DropdownButton>

  {  showNegativeTestAlert &&   <div className="alert-overlay">
      <div className="centered-alert-container">
      <Alert variant="success" className="centered-alert-ckd" style={{color:"#fff", background:"#75b798"}}>
        <span className="fw-bold">Success</span> You don't have CKD.
        <IoMdClose className="close-icon-ckd" onClick={() => setShowNegativeTestAlert(false)} />
      </Alert>
    </div>
    </div> }


   {  showPositiveTestAlert && <div className="alert-overlay">
      <div className="centered-alert-container">
      <Alert variant="danger" className="centered-alert-ckd" style={{color:"#fff", background:"#db4e5b"}}>
        <span className="fw-bold">Warning !</span>  You have CKD.
        <IoMdClose className="close-icon-ckd " onClick={() => setShowPositiveTestAlert(false)} />
        <div className='mt-4 mb-1'>
          
        <Link className='visit-doc-btn ' to={'/doctorslist'}>Visit Doctor</Link>
        </div>
      </Alert>
    </div>
    </div> }

  <div className="div-show-img  d-flex justify-content-center align-items-center show-img  ">
    
  

     
        {/* {selectedImage && <img src={selectedImage} alt="file" style={{}} />}  */}
        <img  src="./images/ay2.jpg" width="100%" height="100%"   alt=""/>
      
      
      </div>
      
      <input
        type="file"
        // accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: "none" }} // Hide the input element
      />

<div className="">
  
      <div className="d-flex  justify-content-center">
        <button
          className="main-btn rounded-pill border-0   img-btn"
          onClick={handleChooseImage}
        >
          {" "}
          Choose image
        </button>
      </div>

   { imageSelected  && (<div className="d-flex  justify-content-center ">

        <button className="main-btn rounded-pill border-0  img-btn-two     Done-btn position-relative" onClick={startTest}>
        {/* <Lottie
              
              loop={false}
              style={{ height: 24, left:'20px'}}
              animationData={doneAnimation}
              className="done-animation position-absolute"
              
            /> */}
        {  loading ?   "loading..." :  "Start" }
        </button>
      </div> )}
</div>
    </div> 
  );
};

export default BloodTestOne;



