import "./NavBar.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GoHomeFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import { BsChatFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const NavBar = () => {
 



  return (
    <Navbar
      expand="lg"
      className="Navbar d-flex align-items-center justify-content-center sticky-top"
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#fff" }}>
          App Name
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to={"/home"}>
                <GoHomeFill />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/profile"}>
                <IoPerson />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/chat"}>
                <BsChatFill />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/settings"}>
                <IoSettingsSharp />
              </Link>
            </Nav.Link>
            {/* <CiSearch style={{position:'absolute' , right:'300px' ,bottom:'20px' ,fontSize:'20px' ,color:'#fff'}} /> */}
            {/* <Form className="search">
              <div style={{ position: "relative" }}>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="  search-form-control"
                  style={{ paddingLeft: "35px", color: "#fff" }}
                />
                <CiSearch
                  style={{
                    position: "absolute",
                    left: "10px",
                    bottom: "8px",
                    fontSize: "20px",
                    color: "#fff",
                  }}
                />
              </div>
            </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
