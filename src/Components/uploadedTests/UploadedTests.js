import "./UploadedTests.css";
import React, { useEffect, useState } from "react";
import Cookie from "cookie-universal";
import NavBar from "../NavBar/NavBar";
import Table from "react-bootstrap/esm/Table";
const UploadedTests = () => {
  const [uploadedTest, setUploadedTest] = useState({});

  const baseUrl = "https://bload-test.icanforsoftware.com/api/";

  const cookie = Cookie();

  const token = cookie.get("Bearer");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${baseUrl}Profile?api_password=AHMED$2024`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const data = await response.json();
      console.log(data);
      setUploadedTest(data);
    };

    fetchData();
  }, [token]);

  // const getTestImagePath = (imageName) => {
  //   return `/Analysis_Test_Images/${imageName}`;
  // };

  // const openImage = (imageName) => {
  //   // Define the logic to open the image here
  //   console.log(`Opening image: ${imageName}`);
  // };

  return (
    <div className="uploaded-dashboard">
      <NavBar className="uploaded-nav" />
      {uploadedTest.user_tests?.[0]?.test_result ? (
        <Table striped bordered className=" uploaded-table">
          <thead>
            <tr>
              <th>Patient_id</th>
              <th>Patient_name</th>
              <th>Patient_age</th>
              <th>Patient_gender</th>

              <th>Analysis_test</th>
              <th>Date</th>
              <th>Test_type</th>
              <th>Test_result</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
          <td>{uploadedTest.user_Data?.id}</td>
          <td>{uploadedTest.user_Data?.name}</td>
          <td>{uploadedTest.user_Data?.age}</td>
          <td>{uploadedTest.user_Data?.female === 1 ? "Female" : "Male"}</td>
         
          <td> <img  src='/images/1.jpg'   alt="Test_image" width="100px" height="100px" /></td>
          <td>{uploadedTest.user_tests?.[0]?.date}</td>
          <td>{uploadedTest.user_tests?.[0]?.test_type}</td>
          <td>{uploadedTest.user_tests?.[0]?.test_result}</td>
          <td>{uploadedTest.user_tests?.[0]?.time}</td>
          
        
        </tr>

        <tr>
          <td>{uploadedTest.user_Data?.id}</td>
          <td>{uploadedTest.user_Data?.name}</td>
          <td>{uploadedTest.user_Data?.age}</td>
          <td>{uploadedTest.user_Data?.female === 1 ? "Female" : "Male"}</td>
         
          <td> <img  src='/images/1.jpg'   alt="Test_image" width="100px" height="100px" /></td>
          <td>{uploadedTest.user_tests?.[0]?.date}</td>
          <td>{uploadedTest.user_tests?.[0]?.test_type}</td>
          <td>{uploadedTest.user_tests?.[0]?.test_result}</td>
          <td>{uploadedTest.user_tests?.[0]?.time}</td>
          
        
        </tr>

        <tr>
          <td>{uploadedTest.user_Data?.id}</td>
          <td>{uploadedTest.user_Data?.name}</td>
          <td>{uploadedTest.user_Data?.age}</td>
          <td>{uploadedTest.user_Data?.female === 1 ? "Female" : "Male"}</td>
          
          <td> <img  src='/images/1.jpg'   alt="Test_image" width="100px" height="100px" /></td>
          <td>{uploadedTest.user_tests?.[1]?.date}</td>
          <td>{uploadedTest.user_tests?.[1]?.test_type}</td>
          <td>{uploadedTest.user_tests?.[1]?.test_result}</td>
          <td>{uploadedTest.user_tests?.[1]?.time}</td>
          
        
        </tr>

        <tr>
          <td>{uploadedTest.user_Data?.id}</td>
          <td>{uploadedTest.user_Data?.name}</td>
          <td>{uploadedTest.user_Data?.age}</td>
          <td>{uploadedTest.user_Data?.female === 1 ? "Female" : "Male"}</td>
          
          <td> <img  src='/images/1.jpg'   alt="Test_image" width="100px" height="100px" /></td>
          <td>{uploadedTest.user_tests?.[2]?.date}</td>
          <td>{uploadedTest.user_tests?.[2]?.test_type}</td>
          <td>{uploadedTest.user_tests?.[2]?.test_result}</td>
          <td>{uploadedTest.user_tests?.[2]?.time}</td>
          
        
        </tr>

        <tr>
          <td>{uploadedTest.user_Data?.id}</td>
          <td>{uploadedTest.user_Data?.name}</td>
          <td>{uploadedTest.user_Data?.age}</td>
          <td>{uploadedTest.user_Data?.female === 1 ? "Female" : "Male"}</td>
         
          <td> <img  src='/images/1.jpg'   alt="Test_image" width="100px" height="100px" /></td>
          <td>{uploadedTest.user_tests?.[3]?.date}</td>
          <td>{uploadedTest.user_tests?.[3]?.test_type}</td>
          <td>{uploadedTest.user_tests?.[3]?.test_result}</td>
          <td>{uploadedTest.user_tests?.[3]?.time}</td>
          
        
        </tr>

        <tr>
          <td>{uploadedTest.user_Data?.id}</td>
          <td>{uploadedTest.user_Data?.name}</td>
          <td>{uploadedTest.user_Data?.age}</td>
          <td>{uploadedTest.user_Data?.female === 1 ? "Female" : "Male"}</td>
         
          <td> <img  src='/images/1.jpg'   alt="Test_image" width="100px" height="100px" /></td>
          <td>{uploadedTest.user_tests?.[4]?.date}</td>
          <td>{uploadedTest.user_tests?.[4]?.test_type}</td>
          <td>{uploadedTest.user_tests?.[4]?.test_result}</td>
          <td>{uploadedTest.user_tests?.[4]?.time}</td>
          
        
        </tr>

        <tr>
          <td>{uploadedTest.user_Data?.id}</td>
          <td>{uploadedTest.user_Data?.name}</td>
          <td>{uploadedTest.user_Data?.age}</td>
          <td>{uploadedTest.user_Data?.female === 1 ? "Female" : "Male"}</td>
         
          <td> <img  src='/images/1.jpg'   alt="Test_image" width="100px" height="100px" /></td>
          <td>{uploadedTest.user_tests?.[5]?.date}</td>
          <td>{uploadedTest.user_tests?.[5]?.test_type}</td>
          <td>{uploadedTest.user_tests?.[5]?.test_result}</td>
          <td>{uploadedTest.user_tests?.[5]?.time}</td>
          
        
        </tr>
         */}

            {uploadedTest.user_tests.map((test, index) => (
              <tr key={index}>
                <td>{uploadedTest.user_Data?.id}</td>
                <td>{uploadedTest.user_Data?.name}</td>
                <td>{uploadedTest.user_Data?.age}</td>
                <td>
                  {uploadedTest.user_Data?.female === 1 ? "Female" : "Male"}
                </td>
                {/* <td><img src={getTestImagePath(test.analysis_test)} alt="Test_image" width="100px" height="100px" onClick={() => openImage(test.analysis_test)} /></td> */}
                <td>
                 
                  <img
                    src="/images/1.jpg"
                    alt="Test_image"
                    width="100px"
                    height="100px"
                  />
                </td>
                <td>{test.date}</td>
                <td>{test.test_type}</td>
                <td>{test.test_result}</td>
                <td>{test.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="d-flex justify-content-center align-items-center  uploaded-h3">
          <h3 className=""> You didn't upload any test</h3>
        </div>
      )}
    </div>
  );
};

export default UploadedTests;
