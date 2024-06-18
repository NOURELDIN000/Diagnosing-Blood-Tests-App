import "./PatientDashboard.css";
import { Link } from "react-router-dom";
import DocNavBar from "../DocNavBar/DocNavBar";
import "./docDashboard.css";
import Table from "react-bootstrap/Table";

import React, { useEffect, useState } from "react";

import Cookie from "cookie-universal";

const PatientDashboard = () => {
 
  const [patients, setPatients] = useState([]);

  // const baseUrl = "https://bload-test.icanforsoftware.com/api/"
  const baseUrl = "http://127.0.0.1:8000/api/";

  const cookie = Cookie();

  const token = cookie.get("DocBearer");

  useEffect(() => {
    const fetchData = async (id) => {
      const response = await fetch(
        `${baseUrl}Doctor/Dashboard?api_password=AHMED$2024&id=${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const data = await response.json();
      console.log(data.doctor);
      console.log(data.patients);
      setPatients(data.patients);
    };

    fetchData();
  }, [token]);

  return (
    <div className="docdashboard  patientdashboard">
      <DocNavBar />

      <Table striped bordered className="table ">
        <thead>
          <tr>
            <th>Patient_id</th>
            <th>Patient_name</th>
            <th>Patient_age</th>
            <th>Patient_gender</th>
            <th>Test_number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.patient_name}</td>
                <td>{item.Patient_age}</td>
                <td>{item.Patient_gender}</td>
                <td>{item.CKD_Test_number}</td>

                <td>
                  <Link
                    className="paDetailsbtn"
                    to={`/patientdetails/${item.id}`}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientDashboard;


  // data.patients[6].CKD_Test_number = 2;
     