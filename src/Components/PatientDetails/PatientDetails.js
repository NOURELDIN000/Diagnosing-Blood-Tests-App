
import './PatientDetails.css'
import React, { useEffect, useState } from 'react'
import DocNavBar from '../DocNavBar/DocNavBar'
// import { RiDeleteBin6Line } from 'react-icons/ri'
import Table from 'react-bootstrap/esm/Table'

import Cookie from "cookie-universal"
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'







const PatientDetails = () => {

    const [patientsDetails, setPatientsDetails] = useState({});

    const params = useParams();
    const { patientid } = params;

    // const baseUrl = "https://bload-test.icanforsoftware.com/api/" 
    const baseUrl = "http://127.0.0.1:8000/api/";

    const cookie = Cookie();
  
   const token = cookie.get("DocBearer")



    useEffect(() => { 
        const fetchData = async () => {
            
                const response = await fetch(`${baseUrl}test/info/${patientid}?api_password=AHMED$2024`, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                });
      
                const data = await response.json();
                console.log(data); 
                    setPatientsDetails(data);
        };
      
        fetchData();
      }, [ patientid,token]);

      const getReportLink = (testId) => {
        return `/report/${patientsDetails.doc_id?.id}/${testId}/${patientsDetails.patient_info?.id}`;
    };
    
    // useEffect(() => { 
      
          
    //            fetch(`${baseUrl}test/info/${params.patientid}?api_password=AHMED$2024`, {
    //               headers: {
    //                   Authorization: 'Bearer ' + token
    //               }
    //           })
    //           .then( (res)=> res.json())
    //           .then( (data)=> {
    //             console.log(data)
    //             setPatientsDetails(data)
    //           });
              
      
    

    // }, [ token]);


  
// console.log(patientsDetails.user_test?.[0]?.analysis_test)

// console.log(`https://srv778-files.hstgr.io/4bc880204b0a599a/files/public_html/bload-test/public/Analysis_Test_Images/${patientsDetails.user_test?.[0]?.analysis_test}`)
// console.log(`https://bload-test.icanforsoftware.com/api/Analysis_Test_Images/${patientsDetails.user_test?.[0]?.analysis_test}`)

return (
  <div className='docdashboard  patient-details-dash'>
         
            <DocNavBar/>
          
            <Table striped bordered  className='w-100 '>
          <thead>
            <tr>
             
              <th>Patient_id</th>
              <th>Patient_name</th>
              <th>Date</th>
              <th>Test_id</th>
              <th>Analysis_test</th>
              <th>Analysis_type</th>
              <th>Analysis_result</th>
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
        
              <td>{patientsDetails.patient_info?.id}</td>
              <td>{patientsDetails.patient_info?.name}</td>
           <td>{patientsDetails.user_test?.[0]?.created_at}</td>
           <td> <img src={patientsDetails.user_test?.[0]?.analysis_test} alt=""  />   </td>

           
           
           <td>{patientsDetails.user_test?.[0]?.analysis_type }</td>
           <td>{patientsDetails.user_test?.[0]?.analysis_result}</td>
           <td> <Link className='text-decoration-none text-danger'  to={`/report/${patientsDetails.doc_id?.id}/${patientsDetails.user_test?.[0]?.id }/${patientsDetails.patient_info?.id}`}>Report </Link></td>

          
              
              
            </tr>

            <tr>
          
              <td>{patientsDetails.patient_info?.id}</td>
              <td>{patientsDetails.patient_info?.name}</td>
              <td>{patientsDetails.user_test?.[1]?.created_at}</td>
              <td> <img src={patientsDetails.user_test?.[1]?.analysis_test}  alt="" />   </td>
           <td>{patientsDetails.user_test?.[1]?.analysis_type}</td>
           <td>{patientsDetails.user_test?.[1]?.analysis_result}</td>
           <td> <Link className='text-decoration-none text-danger'  to={`/report/${patientsDetails.doc_id?.id}/${patientsDetails.user_test?.[1]?.id }/${patientsDetails.patient_info?.id}`}>Report </Link></td>

            </tr>
            <tr>
           
              <td>{patientsDetails.patient_info?.id}</td>
              <td>{patientsDetails.patient_info?.name}</td>
              <td>{patientsDetails.user_test?.[2]?.created_at}</td>
              <td> <img src={patientsDetails.user_test?.[2]?.analysis_test}  alt="" />  </td>
           <td>{patientsDetails.user_test?.[2]?.analysis_type}</td>
           <td>{patientsDetails.user_test?.[2]?.analysis_result}</td>
           <td> <Link className='text-decoration-none text-danger'  to={`/report/${patientsDetails.doc_id?.id}/${patientsDetails.user_test?.[2]?.id }/${patientsDetails.patient_info?.id}`}>Report </Link></td>

            </tr>
            <tr>
           
              <td>{patientsDetails.patient_info?.id}</td>
              <td>{patientsDetails.patient_info?.name}</td>
              <td>{patientsDetails.user_test?.[3]?.created_at}</td>
              <td> <img src={patientsDetails.user_test?.[3]?.analysis_test}  alt="" />   </td>
           <td>{patientsDetails.user_test?.[3]?.analysis_type}</td>
           <td>{patientsDetails.user_test?.[3]?.analysis_result}</td>
           <td> <Link className='text-decoration-none text-danger'  to={`/report/${patientsDetails.doc_id?.id}/${patientsDetails.user_test?.[3]?.id }/${patientsDetails.patient_info?.id}`}>Report </Link></td>

            </tr>
            <tr>
           
              <td>{patientsDetails.patient_info?.id}</td>
              <td>{patientsDetails.patient_info?.name}</td>
              <td>{patientsDetails.user_test?.[4]?.created_at}</td>
              <td> <img src={patientsDetails.user_test?.[4]?.analysis_test}  alt="" />   </td>
           <td>{patientsDetails.user_test?.[4]?.analysis_type}</td>
           <td>{patientsDetails.user_test?.[4]?.analysis_result}</td>
           <td> <Link className='text-decoration-none text-danger'  to={`/report/${patientsDetails.doc_id?.id}/${patientsDetails.user_test?.[4]?.id }/${patientsDetails.patient_info?.id}`}>Report </Link></td>

            </tr>
            <tr>
    
              <td>{patientsDetails.patient_info?.id}</td>
              <td>{patientsDetails.patient_info?.name}</td>
              <td>{patientsDetails.user_test?.[5]?.created_at}</td>
              <td> <img src={patientsDetails.user_test?.[5]?.analysis_test}  alt="" />   </td>
           <td>{patientsDetails.user_test?.[5]?.analysis_type}</td>
           <td>{patientsDetails.user_test?.[5]?.analysis_result}</td>
           <td> <Link className='text-decoration-none text-danger'  to={`/report/${patientsDetails.doc_id?.id}/${patientsDetails.user_test?.[5]?.id }/${patientsDetails.patient_info?.id}`}>Report </Link></td>

            </tr> */}
            
    
            {/* ${test.analysis_test} */}
    
    
            {patientsDetails.user_test && patientsDetails.user_test.map((test, index) => (
                        <tr key={index}>
                            <td>{patientsDetails.patient_info?.id}</td>
                            <td>{patientsDetails.patient_info?.name}</td>
                            <td>{test.created_at}</td>
                            <td>{test.id}</td>
                            <td><img src={`/Analysis_Test_Images/${test.analysis_test}`} alt="Test_image" width={100} height={100} /></td>
                            <td>{test.analysis_type}</td>
                            <td>{test.analysis_result}</td>
                            <td>
                                <Link className='text-decoration-none text-danger' to={getReportLink(test.id)}>Report</Link>
                            </td>
                        </tr>
                    ))}
    
    
    
    
          </tbody>
        </Table>
            
            
          
        </div>
      )
   
}

export default PatientDetails
