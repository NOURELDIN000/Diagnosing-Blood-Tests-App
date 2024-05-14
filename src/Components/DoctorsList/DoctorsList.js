import NavBar from '../NavBar/NavBar';
import './DoctorList.css';
import Cookie from "cookie-universal"
import React, { useEffect, useState } from 'react'

const DoctorsList = () => {

const [doctorsList, setDoctorsList] = useState({});


const baseUrl = "https://bload-test.icanforsoftware.com/api/" 


const cookie = Cookie();
  
   const token = cookie.get("Bearer")

   useEffect(() => { 
    const fetchData = async () => {
        
            const response = await fetch(`${baseUrl}Doctors/dss?api_password=AHMED$2024`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
  
            const data = await response.json();
            console.log(data); 
            setDoctorsList(data);
           
    };
  
    fetchData();
  }, [token]);








  return (
    <div>
     <NavBar/>
     <div className='container mt-5'>
        
     <div className="row">
            {doctorsList?.doctors?.map((doctor, i)=>{

            
         return   (
            
            
            

          <div className="  col-md-6    col-lg-4  main-doc-card" key={i}>
            <div className="doc-card  ">
              {/* <img src="./images/1.jpg" style={{ width: "100%" }} alt="" /> */}
              <div className="doc-card-body">
                {/* <h5> {doctorsList.doctors?.[0]?.name} </h5> */}
                <h3 className='text-center fw-bold'> <span className='fw-normal'>Doctor : </span> {doctor?.name} </h3>
                <div className='doc-card-text'>
                    
                <p className='specialof-doc'>
          <span className='fw-bold'>  Specialization :</span>  <br/>   {doctor?.Specialization}
                </p>
                <p>
                <span className='fw-bold'>  Clinic Address :</span>   {doctor?.clinic_address}
                </p>
                <p>
                <span className='fw-bold'>  Clinic Governorate :</span>    {doctor?.clinic_governorate}
                </p>
                </div>
                {/* <img   src={doctor?.iprofile_picd} alt=''/> */}
              </div>
              {/* <div className="d-flex justify-content-end">
                <Link to={'/testone'}>choose a Test</Link>
              </div> */}
            </div>
          </div>
            
         )
})
} 
          </div>
     </div>
    </div>
  )

}

export default DoctorsList
