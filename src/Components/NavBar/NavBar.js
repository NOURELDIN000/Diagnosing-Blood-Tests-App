import './NavBar.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiSearch } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import { BsChatFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from 'react-router';


const NavBar = () => {
const navigate = useNavigate();

// const Search_Place_Holder = ()=>{
//   return <p> <CiSearch/> Search </p>
// }










  return (
    <Navbar expand="lg" className="Navbar d-flex align-items-center justify-content-center sticky-top">
      <Container>
        <Navbar.Brand   href="#home"          style={{color:'#fff'}}    >App Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home"><GoHomeFill/></Nav.Link>
            <Nav.Link href="/profile" ><IoPerson/></Nav.Link>
            <Nav.Link href="/chat"><BsChatFill/></Nav.Link>
            <Nav.Link href="/settings"><IoSettingsSharp/></Nav.Link>
            {/* <CiSearch style={{position:'absolute' , right:'300px' ,bottom:'20px' ,fontSize:'20px' ,color:'#fff'}} /> */}
            <Form  className='search' >
        
          <div  style={{position:'relative'}} >
            

            <Form.Control
              type="text"
              placeholder= 'Search'
              className="  search-form-control"
              style={{ paddingLeft: '35px' , color:'#fff'}} 
              
            /> 
            <CiSearch style={{position:'absolute' , left:"10px" ,bottom:'8px' ,fontSize:'20px' ,color:'#fff' }} />
          </div>
          
        
      </Form>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavBar;
