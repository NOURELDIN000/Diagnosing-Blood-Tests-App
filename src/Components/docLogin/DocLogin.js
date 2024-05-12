

import React, { useContext, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { MdAlternateEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { SlSocialFacebook } from "react-icons/sl";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import Cookie from "cookie-universal"
import { Doctor } from "../Auth/DocAuth";

const DocLogin = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accept, setAccept] = useState(false);
  // const [flag, setFlag] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();

  const doctorNow = useContext(Doctor);

  const cookie = Cookie()
  const baseUrl = "https://bload-test.icanforsoftware.com/api/" 
  // const image = useContext(ImageContext);


  // const Submit = (e) => {
  //   e.preventDefault();
  //   setAccept(true);
  //   if (
  //     Password !== "" &&
  //     Password.length > 8 &&
  //     email !== "" &&
  //     email.indexOf("@") !== -1 &&
  //     email.indexOf("@") !== 0 &&
  //     email.indexOf("@") !== email.length - 1
  //   ) {
  //     navigation("/home");
  //   }
  // };

  async function Submit (e) {
    let flag = true
    e.preventDefault();
    setAccept(true);
  
   if (
      password === "" ||
      password.length < 8 ||
      email === "" ||
      email.indexOf("@") === -1 ||
      email.indexOf("@") === 0 ||
      email.indexOf("@") === email.length - 1 
    ) {
      // navigation("/home");
      flag = false
    }else {flag = true}


    if(flag){
      setLoading(true)
    try{
        let res = await axios.post(`${baseUrl}login?api_password=AHMED$2024&username=new_user@gmail.com&password=12345678`, {
       
        username: email,
        password: password,
        
        
         })
         console.log(res)
         const token = res.data.data.token;
         const DocName = res.data.data.name;
         const DocEmail = res.data.data.email;
         doctorNow.setAuth({ token, DocName, DocEmail});
         cookie.set('DocBearer', token)
        
         cookie.set("DocName", DocName);
         cookie.set("DocEmail", DocEmail);
        
           navigation('/doctordashboard')
        
       } 
       catch(err){
         setAccept(true)
         setEmailError(err.response.status)
        console.log(err) 
        
       }
       finally{
        
        setLoading(false)
        
       }
      }





  };



  return (
    <div className="login">
      <form onSubmit={Submit} noValidate >
        <div className="mb-4">
          <h1>Log in</h1>

          <p>Welcome back!</p>
        </div>

        <FloatingLabel
          controlId="floatingEmail"
          label={<><MdAlternateEmail style={{ marginRight: "5px" }} /> E-mail</>}
          className="mb-3"
        >
          <Form.Control
            className={
              (email === "" ||
                email.indexOf("@") === -1 ||
                email.indexOf("@") === email.length - 1 ||
                email.startsWith("@") ||
                emailError === 401) &&
              accept
                ? "is-invalid"
                : ""
            }
            placeholder="name@example.com"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          

          {accept && email === "" && (
            <p className="mt-3 text-danger ">Email is Required.</p>
          )}
          {accept && email.indexOf("@") === -1 && email !== "" && (
            <p className="mt-3 text-danger">Email address must include @.</p>
          )}
          {accept &&
            email !== "" &&
            (email.startsWith("@") ||
              email.indexOf("@") === -1 ||
              email.endsWith("@")) && (
              <p className="mt-3 text-danger ">Please Enter a Valid Email.</p>
            )}
            {/* {accept && emailError === 422 && (<p className="mt-3 text-danger ">The email has already been taken.</p>)} */}

        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label={<><LuLock style={{ marginRight: "5px" }} /> Password</>}>
          <>
          <Form.Control
            className={
              accept && (password === "") | (password.length < 8) | ( emailError === 401)
                ? "is-invalid"
                : ""
            }
            placeholder=""
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
              {/* <a
                href="/login"
                style={{
                  position: "absolute",
                  right: "0px",
                  top: "32px",
                  color: "#3daed2",
                  textDecoration: "none",
                }}
              >
                Forgot?{" "}
              </a> */}
            </>
          

          {password === "" && accept && (
            <p className="mt-3 text-danger">Password is Required.</p>
          )}
          {password.length < 8 && password.length !== 0 && accept && (
            <p className="mt-3 text-danger">
              Password must be at least 8 characters or numbers.
            </p>
          )}
          {accept && emailError === 401 && (<p className="mt-3 text-danger">
              Email or Password is not correct.
            </p>)}
        </FloatingLabel>

        <button className="btn" type="submit">
          {/* Log in */}
          {loading ? "Logging in..." : "Log in"}
        </button>

        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <p style={{ color: "gray" }}>don't have an account?</p>
          <span>
            <Link
              className="text-decoration-none fw-bold"
              to={"/DoctorRegisteration"}
              style={{ color: "#000", marginLeft: "5px" }}
            >
              Register Now
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
      </form>
    </div>
  );
};

export default DocLogin;
