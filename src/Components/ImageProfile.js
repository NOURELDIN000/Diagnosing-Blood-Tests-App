import React, { createContext, useEffect, useState } from 'react';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);

   // Load the selected image from localStorage on component initialization
   useEffect(() => {
    const storedImage = localStorage.getItem('selectedImage');
    if (storedImage) {
      setSelectedImage(storedImage);
    }
    // else{
    //   setSelectedImage("./images/log.jpg")
    // }
  }, []);

  // Save the selected image to localStorage whenever it changes
  useEffect(() => {
    if (selectedImage) {
      localStorage.setItem('selectedImage', selectedImage);
    } else {
      localStorage.removeItem('selectedImage');
    }
  }, [selectedImage]);


  return (
    <ImageContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;