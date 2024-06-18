import NavBar from "../NavBar/NavBar";
// import './DoctorList.css';
import Cookie from "cookie-universal";
import React, { useEffect, useState } from "react";

const DoctorsListTwo = () => {
  const doctorsList = [
    {
      name: "Ahmed Asser",
      speciality: "Liver",
      location: "Baltim",
      phone: "01227987184",
      imgUrl:
        "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    },
    {
      name: "Sarah Smith",
      speciality: "Liver",
      location: "Cairo",
      phone: "01234567890",
      imgUrl:
        "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040901_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    },
    {
      name: "John Doe",
      speciality: "Liver",
      location: "Alexandria",
      phone: "01298765432",
      imgUrl:
        "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040902_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    },
    {
      name: "Emily Davis",
      speciality: "Liver",
      location: "Giza",
      phone: "01211111111",
      imgUrl:
        "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040903_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    },
    {
      name: "Jessica Wilson",
      speciality: "Liver",
      location: "Aswan",
      phone: "01233333333",
      imgUrl:
        "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040905_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    },
    {
      name: "Ahmed Asser",
      speciality: "Liver",
      location: "Baltim",
      phone: "01227987184",
      imgUrl:
        "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    },
    {
      name: "David Clark",
      speciality: "Liver",
      location: "Mansoura",
      phone: "01244444444",
      imgUrl:
        "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040906_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    },
    {
      name: "Laura Lee",
      speciality: "Liver",
      location: "Suez",
      phone: "01255555555",
      imgUrl:
        "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040907_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    },
    {
      name: "Chris Martin",
      speciality: "Liver",
      location: "Port Said",
      phone: "01266666666",
      imgUrl:
        "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040908_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    },
  ];

  // const [doctorsList2, setDoctorsList] = useState({});

  // const baseUrl = "https://bload-test.icanforsoftware.com/api/"
  const baseUrl = "http://127.0.0.1:8000/api/";

  const cookie = Cookie();

  const token = cookie.get("Bearer");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${baseUrl}Doctors/dss?api_password=AHMED$2024`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const data = await response.json();
      console.log(data);
      // setDoctorsList(data);
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          {doctorsList.map((doctor, i) => {
            return (
              <div className="  col-md-6    col-lg-4  main-doc-card" key={i}>
                <div className="doc-card  ">
                  <img
                    className="doc-img"
                    src={doctor.imgUrl}
                    style={{}}
                    alt=""
                  />
                  <div className="doc-card-body">
                    {/* <h5> {doctorsList.doctors?.[0]?.name} </h5> */}
                    <h3 className="text-center fw-bold">
                      {" "}
                      <span className="fw-normal">Doctor : </span> {doctor.name}{" "}
                    </h3>
                    <div className="doc-card-text">
                      <p className="specialof-doc">
                        <span className="fw-bold"> Specialization :</span>{" "}
                        {doctor.speciality}
                      </p>
                      <p>
                        <span className="fw-bold"> Location :</span>{" "}
                        {doctor.location}
                      </p>
                      <p>
                        <span className="fw-bold"> Phone :</span> {doctor.phone}
                      </p>
                    </div>
                    {/* <img   src={doctor?.iprofile_picd} alt=''/> */}
                  </div>
                  {/* <div className="d-flex justify-content-end">
                <Link to={'/testone'}>choose a Test</Link>
              </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorsListTwo;
