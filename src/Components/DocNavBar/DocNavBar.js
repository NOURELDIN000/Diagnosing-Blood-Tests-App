import './DocNavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookie from "cookie-universal"


const DocNavBar = () => {


  const [loading, setLoading] = useState(false);





  const navigate = useNavigate();
  const baseUrl = "https://bload-test.icanforsoftware.com/api/" 
  
  const cookie = Cookie();
  
   const token = cookie.get("DocBearer")



  async function handleLogOut(){
  
  setLoading(true)
    let res = await axios.post(`${baseUrl}logout?api_password=AHMED$2024`, null ,
         {
          headers:{
            "Authorization": "Bearer " + token
          }
         }
    
    
  )
     console.log(res)
     setLoading(false)
     cookie.remove("DocBearer")
     navigate('/doctorRegisteration')
  
  }








  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary docNav ">
      <Container >
        <Navbar.Brand href="#home"  style={{ color: "#000", fontWeight:"bold", letterSpacing:"1px",fontSize:"30px" }}>Medic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link className='dashboardbtn  text-decoration-none me-2' to={'/doctordashboard'}>
             dashBoard
              </Link>
            <Link className='dashLogout  text-decoration-none ' onClick={handleLogOut} >
             { loading ?  "Logingout..." : "Logout" }
              </Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default DocNavBar
