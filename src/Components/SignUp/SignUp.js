import "./SignUp.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { SlSocialFacebook } from "react-icons/sl";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router";
const SignUp = () => {
  const labelText = () => {
    return (
      <p>
        {" "}
        <IoPersonOutline style={{ marginRight: "5px" }} /> Full name{" "}
      </p>
    );
  };
  const labelEmail = () => {
    return (
      <p>
        {" "}
        <MdAlternateEmail style={{ marginRight: "5px" }} /> E-mail{" "}
      </p>
    );
  };
  const labelPass = () => {
    return (
      <p>
        {" "}
        <LuLock style={{ marginRight: "5px" }} /> Password{" "}
      </p>
    );
  };

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const [accept, SetAccept] = useState(false);

  // const [validationError, setValidationError] = useState(false);

  const navigation = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    SetAccept(true);
    if (
      name !== "" &&
      Password !== "" &&
      Password.length > 8 &&
      email !== "" &&
      email.indexOf("@") !== -1 &&
      email.indexOf("@") !== 0 &&
      email.indexOf("@") !== email.length - 1
    ) {
      navigation("/home");
    }
  };

  return (
    <div className="main">
      <form onSubmit={Submit} noValidate  autoComplete="off" className="">
        <div className="mb-5">
          <h1>Create an account</h1>

          <p>Just one step to get started.</p>
        </div>

        <FloatingLabel
          className="mb-3 "
          controlId="floatingText"
          label={labelText()}
        >
          {accept && name === "" ? (
            <Form.Control
              className="is-invalid"
              placeholder=""
              type="text"
              value={name}
              onChange={(e) => {
                SetName(e.target.value);
              }}
            />
          ) : (
            <Form.Control
              className=""
              placeholder=""
              type="text"
              value={name}
              onChange={(e) => {
                SetName(e.target.value);
              }}
            />
          )}
          {name === "" && accept && (
            <p className="mt-3 text-danger ">Username is Required.</p>
          )}
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingEmail"
          label={labelEmail()}
          className="mb-3"
        >
          {
         ( email === "" ||
            email.indexOf("@") === -1  ||
            email.indexOf("@") === email.length - 1 ||
            email.startsWith("@") ) && accept  ?  (
            <Form.Control
              className="is-invalid"
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
            />
          ) : (
            <Form.Control
              className=""
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
            />
          )}

          {accept && email === "" && (
            <p className="mt-3 text-danger ">Email is Required.</p>
          )}
          {accept && email.indexOf("@") === -1 && email !== "" && (
            <p className="mt-3 text-danger">Email address must include @.</p>
          )}
          { accept &&
            email !== "" && 
           ( email.startsWith("@") ||
            (email.indexOf("@") === -1) ||
              email.endsWith("@") )&& (
              <p className="mt-3 text-danger ">Please Enter a Valid Email.</p>
            )}
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label={labelPass()}>
          {accept && (Password === "") | (Password.length < 8) ? (
            <Form.Control
              className="is-invalid"
              
              placeholder=""
              type="password"
              value={Password}
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            />
          ) : (
            <Form.Control
              className=""
              
              placeholder=""
              type="password"
              value={Password}
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            />
          )}

          {Password === "" && accept && (
            <p className="mt-3 text-danger">Password is Required.</p>
          )}
          {Password.length < 8 && Password.length !== 0 && accept && (
            <p className="mt-3 text-danger">
              Password must be at least 8 characters or numbers.
            </p>
          )}
        </FloatingLabel>

        <button className="btn" type="submit">
          Create an account
        </button>

        <div className="" style={{display:'flex' ,justifyContent:'center' ,marginTop:'20px'}}>
          
<p style={{color:'gray'}}>already have an account.</p>
       <span>

         <Link className="text-decoration-none fw-bold"  to={'/login'} style={{color:'#000' , marginLeft:'5px'}}>
          Login
        </Link>
        </span>
        </div>

        <p style={{ display: "block", marginTop: "20px", textAlign: "center" }}>
          or continue with
        </p>

        <div
          className="social"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div className="face">
            <a href="https://www.facebook.com/login/">
              <SlSocialFacebook
                style={{
                  fontSize: "30px",
                }}
              />
            </a>
          </div>
          <div className="google">
            <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&ifkv=ASKXGp3P7bHrRY_iEcpNteLHOZApj3_VskTo7MkjApjq_JCmHi1FHXyC_PznUFaLJKmKvCJn_GNN4A&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1929573637%3A1707145915883510&theme=glif">
              <FaGoogle
                style={{
                  fontSize: "30px",
                }}
              />
            </a>
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: "30px" }}>
          By creating an account you agree <br /> to the{" "}
          <span style={{ color: "#3daed2" }}>Terms of Service</span>.
        </p>
      </form>
    </div>
  );
};

export default SignUp;

/* <LuLock  style={{position:'absolute' , top:"30px" , left:"-5px"}} /> */
