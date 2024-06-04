/* eslint-disable array-callback-return */
import './PatientDashboard.css'
import { Link } from 'react-router-dom';
import DocNavBar from '../DocNavBar/DocNavBar';
import  './docDashboard.css';
import Table from 'react-bootstrap/Table';

import React, { useEffect, useState } from 'react'
// import { RiDeleteBin6Line } from "react-icons/ri";

import Cookie from "cookie-universal"


const PatientDashboard = () => {

// const [doctors, setDoctors] = useState({});
const [patients, setPatients] = useState([]);
// const [patientsDetails, setPatientsDetails] = useState({});



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
              setPatients(data.patients);
  };

  fetchData();
}, [token]);





// useEffect(() => { 
//   const fetchPatientId = async (id) => {
      
//           const res = await fetch(`${baseUrl}test/info/${id}?api_password=AHMED$2024`, {
//               headers: {
//                   Authorization: 'Bearer ' + token
//               }
//           });

//           const data = await res.json();
//           console.log(data); 
//               setPatientsDetails(data);
//               // let doc_id = data.doc_id?.user_id
//               // let patientName = data.patient_info?.name
//               // let analysisType = data.user_test[0]?.analysis_type
//               // let analysisResult = data.user_test[0]?.analysis_result
//               // console.log(doc_id)
//               // console.log(patientName)
//               // console.log(analysisType)
//               // console.log(analysisResult)
//               // cookie.set("docId", doc_id)
//               // cookie.set("patientName",patientName)
//               // cookie.set(  "analysisType" ,analysisType)
//               // cookie.set(  "analysisResult" ,analysisResult)
//   };

//   fetchPatientId(30);
// }, [token]);







// function handleDelete(id) {
//   setDoctors(prevDoctors => prevDoctors.filter(doctor => doctor.id !== id));
// }

// useEffect(() => {
//   console.log(doctors);
// }, [doctors]);

  return (
    <div className='docdashboard  patientdashboard'>
        <DocNavBar/>
      

        
        <Table striped bordered  className='table '>
      <thead>
        <tr>
          <th>Patient_id</th>
          <th>Patient_name</th>
          <th>Patient_age</th>
          <th>Patient_gender</th>
          <th>CKD_test_number</th>
          <th>Action</th>
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


 {/* <tr>
          <td>{patientsDetails.doc_id?.user_id}</td>
          <td>{doctors.name}</td>
          <td>{doctors.email}</td>
          <td><button>Details</button></td>
        </tr>
         */}





         {patients.map((item, index)=> {
        return (
          
          <tr key={index}>
           <td>{item.id}</td>
           <td>{item.patient_name}</td>
           <td>{item.Patient_age}</td>
           <td>{item.Patient_gender}</td>
           <td>{item.CKD_Test_number}</td>
           
           <td><Link className='paDetailsbtn'  to={`/patientdetails/${item.id}`} >Details</Link></td>
         </tr>
          
         )})}




      </tbody>
    </Table>
        </div>
        
      
  )
}

export default PatientDashboard
