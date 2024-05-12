import "./DoctorReport.css";

import React, { useState } from "react";
import Cookie from "cookie-universal";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
const DoctorReport = () => {
  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const[docId, setDocId] = useState("");
  const[testId, setTestId] = useState("");
  const[patientId, setPatientId] = useState("");

  
  const [accept, setAccept] = useState(false);

  const baseUrl = "https://bload-test.icanforsoftware.com/api/";

  const cookie = Cookie();

  const token = cookie.get("DocBearer");

  // const params = useParams();

  // const {docid, testid,patientid} = params;

    async function Submit(e) {
      e.preventDefault();

      setAccept(true)

      try {
        setLoading(true)
       
        let res = await axios.post(
          `${baseUrl}send/report?api_password=AHMED$2024` , {
            docid: docId,
            testid: testId,
            patientid: patientId,
              report : report
          },{
              headers:{
                  "Authorization": "Bearer " + token
                }
          }

        )

        console.log(res);
      } catch (err) {
        setAccept(true)
        setError(err.response.status)
        console.log(err);
      }
      finally{
        
        setLoading(false)
        
       }
    }

  return (
    <div className="main mt-5">
      <form className="" onSubmit={Submit}>
      <FloatingLabel
        
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
        </FloatingLabel>

        {docId === "" && accept  && ( <p className="mt-3 text-danger">The doctor Id is required.</p> )}
        <FloatingLabel
           
          controlId="floatingTextThree"
          label={<>  <IoIosPaper style={{marginRight:"5px"}} />  Test ID </> }
        >
          <Form.Control
            className={`  ${(error === 500 || testId === "" ) && accept ?  "is-invalid" : ""}     mt-3      "mb-3 "`}
            placeholder=""
            type="number"
            value={testId}
            onChange={(e) => {
              setTestId(e.target.value);
            }}
          />

         
        </FloatingLabel>

        {testId === "" && accept  && ( <p className="mt-3 text-danger">The test Id is required.</p> )}

        <FloatingLabel
            
          controlId="floatingTextThree"
          label={<> <IoPersonOutline style={{marginRight:"5px"}} />   Patient ID </> }
        >
          <Form.Control
            className={`  ${(error === 500 || patientId === "" ) && accept ?  "is-invalid" : ""}     mt-3      "mb-3 "`}
            placeholder=""
            type="number"
            value={patientId}
            onChange={(e) => {
              setPatientId(e.target.value);
            }}
          />

        </FloatingLabel>
        {patientId === "" && accept  && ( <p className="mt-3 text-danger">The patient Id is required.</p> )}

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
            
        <button className="reportbtn" type="submit" >
          
        {  loading ?  "sending Report..."  : "send Report"}
        </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorReport;
