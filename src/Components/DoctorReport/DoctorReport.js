import "./DoctorReport.css";

import React, { useEffect, useState } from "react";
import Cookie from "cookie-universal";
import axios from "axios";
import Form from "react-bootstrap/Form";

import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosPaper, IoMdClose } from "react-icons/io";
import Alert from 'react-bootstrap/Alert';
import { useParams } from "react-router";


const DoctorReport = ({showAlert, setShowAlert}) => {
  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const[docId, setDocId] = useState("");
  const[testId, setTestId] = useState("");
  const[patientId, setPatientId] = useState("");

  // const testId = "";
  // const patientId = "";

  
  const [accept, setAccept] = useState(false);

  const [patientsDetails, setPatientsDetails] = useState({});
  const params = useParams();
  const { patientid } = params;
  // const baseUrl = "https://bload-test.icanforsoftware.com/api/";
  const baseUrl = "http://127.0.0.1:8000/api/";

  const cookie = Cookie();

  const token = cookie.get("DocBearer");

  // const params = useParams();

  // const {docid, testid,patientid} = params;

    async function Submit(e) {
      e.preventDefault();
      setAccept(true)
let flag = true

if(
  patientId === "" ||
  // docId === "" ||
  testId === "" ||
  report === ""
)
{
   flag =false
} else{
  flag = true
}

if(flag){
      try {
        setLoading(true)
       
        let res = await axios.post(
          `${baseUrl}send/report?api_password=AHMED$2024` , {
            
            testid: testId,
            patientid: patientId,
              report : report
          },{
              headers:{
                  "Authorization": "Bearer " + token
                }
          }

        )
// we shoud make testId = it's input value 
        console.log(res);
        if (res.status === 200){
          setShowAlert(true)
          setTimeout(()=>{
            setShowAlert(false)
          },5000)
        } 

      } catch (err) {
        setAccept(true)
        setError(err.response.status)
        console.log(err);
      }
      finally{
        
        setLoading(false)
        
       }
    }
  }


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

 // Assuming the first test id is what you need
 if (data.user_test && data.user_test.length > 0) {
  setTestId(data.user_test[0].id);
}

// Setting patient id
if (data.patient_info && data.patient_info.id) {
  setPatientId(data.patient_info.id);
}


    };

    
  
    fetchData();
  }, [ patientid,token]);



  












  return (
    <div className="main mt-5 ">

{ showAlert && (
      <div className='centered-alert-login'>
        <Alert variant="success" style={{color:"#fff",  background:"#75b798"}}>
          Your Report sent successfully.
          <IoMdClose className='close-icon-login' onClick={() => setShowAlert(false)} />
        </Alert>
      </div>
    )}



      <form className="" onSubmit={Submit}>
      {/* <FloatingLabel
        
          controlId="floatingTextThree"
          label={<> <IoPersonOutline style={{marginRight:"5px"}} />   Doctor ID </> }
        >
          <Form.Control
            className={`  ${(error === 500 || docId === "" ) && accept ?  "is-invalid" : ""}           "mb-3 "`}
            placeholder=""
            type="number"
            value={docId}
            onChange={(e) => {
              setDocId(e.target.value);
            }}
          />
        </FloatingLabel> */}

        {/* {docId === "" && accept  && ( <p className="mt-3 text-danger">The doctor Id is required.</p> )} */}
        {/* <FloatingLabel
           
          controlId="floatingTextThree"
          label={<>  <IoIosPaper style={{marginRight:"5px"}} />  Test ID </> }
        > */}
          <Form.Control
            className={`  ${(error === 500 || testId === "" ) && accept ?  "is-invalid" : ""}     mt-3      "mb-3 "`}
            placeholder=""
            type="hidden"
            // value={ }
            // onChange={(e) => {
            //   setTestId(e.target.value);
            // }}
          />

{patientsDetails.user_test && patientsDetails.user_test.map((test) => (
  <Form.Control
  className={`  ${(error === 500 || testId === "" ) && accept ?  "is-invalid" : ""}     mt-3      "mb-3 "`}
  placeholder=""
  type="hidden"
  // value={test.id}
  // onChange={(e) => {
  //   setTestId(e.target.value);
  // }}
/>
                        
                    ))}

         
        {/* </FloatingLabel> */}

        {/* {testId === "" && accept  && ( <p className="mt-3 text-danger">The test Id is required.</p> )} */}

        {/* <FloatingLabel
            
          controlId="floatingTextThree"
          label={<> <IoPersonOutline style={{marginRight:"5px"}} />   Patient ID </> }
        > */}
          <Form.Control
            className={`  ${(error === 500 || patientId === "" ) && accept ?  "is-invalid" : ""}     mt-3      "mb-3 "`}
            placeholder=""
            type="hidden"
            // value={patientsDetails.patient_info?.id}
            // onChange={(e) => {
            //   setPatientId(e.target.value);
            // }}
          />
          

        {/* </FloatingLabel> */}
        {/* {patientId === "" && accept  && ( <p className="mt-3 text-danger">The patient Id is required.</p> )} */}

{error === 500 && accept  && ( <p className="mt-3 text-danger">Error in the data you entered</p> )}


        <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Example textarea</Form.Label> */}
          <Form.Control
           className={`  ${report === "" && accept ?  "is-invalid" : ""}      textarea     mb-3 `}
            as="textarea"
            rows={3}
           
            placeholder="Enter your message..."
            value={report}
            onChange={(e)=>setReport(e.target.value)}
          />
        </Form.Group>
        {report === "" && accept  && ( <p className="mt-3 text-danger">The report field is required.</p> )}
        <div className="text-center">
            
        <button className="reportbtn" type="submit" 
        >
          
        {  loading ?  "sending Report..."  : "send Report"}
        </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorReport;
