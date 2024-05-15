
import NavBar from "../NavBar/NavBar";
import "./BloodTestOne.css";
// import Lottie from "lottie-react";
// import doneAnimation from "../../animation/done.json"
import React, {  useEffect, useRef, useState } from "react";

const BloodTestOne = () => {
  // const [testImage, setTestImage] = useState();
  const inputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);

  


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
  




  return (
    <div className="main-blood-test-one"> 
      <NavBar />

  

  <div className="div-show-img  d-flex justify-content-center align-items-center show-img">
    
  

     
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

        <button className="main-btn rounded-pill border-0  img-btn-two     Done-btn position-relative" >
        {/* <Lottie
              
              loop={false}
              style={{ height: 24, left:'20px'}}
              animationData={doneAnimation}
              className="done-animation position-absolute"
              
            /> */}
          Start
        </button>
      </div> )}
</div>
    </div> 
  );
};

export default BloodTestOne;



