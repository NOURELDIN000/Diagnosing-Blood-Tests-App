/* eslint-disable array-callback-return */
import { Link, useNavigate } from 'react-router-dom';
import DocNavBar from '../DocNavBar/DocNavBar';
import  './docDashboard.css';
import Table from 'react-bootstrap/Table';

import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from 'axios';
import Cookie from "cookie-universal"
import Alert from 'react-bootstrap/Alert';
import { IoMdClose } from 'react-icons/io';


const DocDashboard = ({showAlert, setShowAlert}) => {

const [doctors, setDoctors] = useState({});
const [patients, setPatients] = useState([]);
const [patientsDetails, setPatientsDetails] = useState({});



const baseUrl = "https://bload-test.icanforsoftware.com/api/" 


const cookie = Cookie();
  
   const token = cookie.get("DocBearer")


// useEffect( ()=>{ 
//   let res =  axios.get(`${baseUrl}Doctor/Dashboard?api_password=AHMED$2024`, {
 
//   headers: {
//     Authorization: 'Bearer ' + token
//   }
// // eslint-disable-next-line no-use-before-define
// }).then((doctors)=> {
//   console.log(doctors.patients)
//   setDoctors(doctors.patients)
// })
// },[])



useEffect(() => { 
  const fetchData = async (id) => {
      
          const response = await fetch(`${baseUrl}Doctor/Dashboard?api_password=AHMED$2024&id=${id}`, {
              headers: {
                  Authorization: 'Bearer ' + token
              }
          });

          const data = await response.json();
          console.log(data.doctor); 
          console.log(data.patients); 
              setDoctors(data.doctor);
  };

  fetchData();
}, [token]);





useEffect(() => { 
  const fetchPatientId = async (id) => {
      
          const res = await fetch(`${baseUrl}test/info/${id}?api_password=AHMED$2024`, {
              headers: {
                  Authorization: 'Bearer ' + token
              }
          });

          const data = await res.json();
          console.log(data); 
              setPatientsDetails(data);
              // let doc_id = data.doc_id?.user_id
              // let patientName = data.patient_info?.name
              // let analysisType = data.user_test[0]?.analysis_type
              // let analysisResult = data.user_test[0]?.analysis_result
              // console.log(doc_id)
              // console.log(patientName)
              // console.log(analysisType)
              // console.log(analysisResult)
              // cookie.set("docId", doc_id)
              // cookie.set("patientName",patientName)
              // cookie.set(  "analysisType" ,analysisType)
              // cookie.set(  "analysisResult" ,analysisResult)
  };

  fetchPatientId(30);
}, [token]);




setTimeout(()=>{
  setShowAlert(false)
}
  ,3000)


// function handleDelete(id) {
//   setDoctors(prevDoctors => prevDoctors.filter(doctor => doctor.id !== id));
// }

// useEffect(() => {
//   console.log(doctors);
// }, [doctors]);

  return (
    <div className='docdashboard '>
       
        {/* { <div style={{position:"relative"}}> <Alert variant="success" style={{zIndex:"3", textAlign:"center", position:"absolute",display:"inline-block",}}>
            You have logged in successfully
          </Alert>      <IoMdClose style={{ position: "absolute",  left:"220px", bottom:"-25px" ,zIndex:"3", cursor:"pointer" }} onClick={()=> {setShowAlert(false)}} />
 </div>
 } */}
  {  showAlert&& (
      <div className='centered-alert'>
        <Alert variant="success">
          You have logged in successfully.
          <IoMdClose className='close-icon' onClick={() => setShowAlert(false)} />
        </Alert>
      </div>
    )}
  <DocNavBar/>
      <div className='row d-flex'>
        <div className='  col-3 col-md-4   col-lg-2 sidebar'>
          <Link className='dashSidebarLink' to={'/patientdashboard'}> get Patient Test</Link>
        </div>

        <div className='  col-9 col-md-8    col-lg-10  p-0'>
        <Table striped bordered  className=''>
      <thead>
        <tr>
          <th>Doc_id</th>
          <th>Doc_name</th>
          <th>Doc_email</th>
          {/* <th>Delete</th> */}
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><RiDeleteBin6Line className='dashDelete'  /></td>
        </tr>
        <tr> */}


 <tr>
          <td>{patientsDetails.doc_id?.user_id}</td>
          <td>{doctors.name}</td>
          <td>{doctors.email}</td>
     
        </tr>
        





         {/* {patients.map((item, index)=> {
        return (
          
          <tr key={index}>
           <td>{index + 1}</td>
           <td>{item.patient_name}</td>
           <td>{item.Patient_age}</td>
           
           <td><RiDeleteBin6Line className='dashDelete'  /></td>
         </tr>
          
         )})} */}




      </tbody>
    </Table>
        </div>
        
      </div>
    </div>
  )
}

export default DocDashboard
