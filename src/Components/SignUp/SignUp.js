import "./SignUp.css";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { SlSocialFacebook } from "react-icons/sl";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router";
import axios from "axios";
import { User } from "../Context/Context";
import Cookie from "cookie-universal"
import ImageContext from "../ImageProfile";


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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");

  const [accept, setAccept] = useState(false);
const [emailError, setEmailError] = useState("");
  const [flag, setFlag] = useState(false);

  const userNow = useContext(User);

const cookie = Cookie()

  // console.log(userNow);


// const image = useContext(ImageContext);



  const navigation = useNavigate();

  async function Submit (e) {
    e.preventDefault();
    setAccept(true);
    if (
      name !== "" &&
      password !== "" &&
      password.length > 8 &&
      email !== "" &&
      email.indexOf("@") !== -1 &&
      email.indexOf("@") !== 0 &&
      email.indexOf("@") !== email.length - 1
    ) {
      
      setFlag(true)
      
    }else{
      setFlag(false)
    }

    // if (
    //   name === "" ||
    //   Password === "" ||
    //   Password.length < 8 ||
    //   email !== "" ||
    //   email.indexOf("@") === -1 ||
    //   email.indexOf("@") === 0 ||
    //   email.indexOf("@") === email.length - 1
    // ) {
      
    //   setFlag(false)
    // }else{
    //   setFlag(true)
    // }

    if (flag){
     
    try{
        let res = await axios.post('http://127.0.0.1:8000/api/register', {
        name : name,
        email: email,
        password: password,
        password_confirmation: passwordR,
         });
         const token = res.data.data.token;
        
         const userDetails = res.data.data.user;
         userNow.setAuth({token, userDetails});
         
         cookie.set('nour', token)
        //  cookie.set('name', userNow.auth.userDetails.name)
        cookie.set("userName", userDetails.name);
        cookie.set("userEmail", userDetails.email);
       
         console.log(userNow);
         navigation('/home')
        
          
        
       } 
       catch(err){
        setEmailError(err.response.status)
        
       }
       finally{
        
       }
       
      }

    



  };

  return (
    <div className="main">
      <form onSubmit={Submit} noValidate   className="">
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
                setName(e.target.value);
              }}
            />
          ) : (
            <Form.Control
              className=""
              placeholder=""
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
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
            email.startsWith("@") ||
            emailError === 422
          ) && accept  ?  (
            <Form.Control
              className="is-invalid"
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          ) : (
            <Form.Control
              className=""
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
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

          {accept && emailError === 422 && (<p className="mt-3 text-danger ">The email has already been taken.</p>)}

        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label={labelPass()}>
          {accept && (password === "") | (password.length < 8) ? (
            <Form.Control
              className="is-invalid"
              
              placeholder=""
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          ) : (
            <Form.Control
              className=""
              
              placeholder=""
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          )}

          {password === "" && accept && (
            <p className="mt-3 text-danger">Password is Required.</p>
          )}
          {password.length < 8 && password.length !== 0 && accept && (
            <p className="mt-3 text-danger">
              Password must be at least 8 characters or numbers.
            </p>
          )}
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label={labelPass()}>
          {accept && (passwordR !== password )  ? (
            <Form.Control
              className="is-invalid"
              
              placeholder=""
              type="password"
              value={passwordR}
              onChange={(e) => {
                setPasswordR(e.target.value);
              }}
            />
          ) : (
            <Form.Control
              className=""
              
              placeholder=""
              type="password"
              value={passwordR}
              onChange={(e) => {
                setPasswordR(e.target.value);
              }}
            />
          )}

          {password !== passwordR  && accept && (
            <p className="mt-3 text-danger">Password is not match.</p>
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
            <a target='/' href="https://www.facebook.com/login/">
              <SlSocialFacebook
                style={{
                  fontSize: "30px",
                }}
              />
            </a>
          </div>
          <div className="google">
            <a target='/' href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&ifkv=ASKXGp3P7bHrRY_iEcpNteLHOZApj3_VskTo7MkjApjq_JCmHi1FHXyC_PznUFaLJKmKvCJn_GNN4A&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1929573637%3A1707145915883510&theme=glif">
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
