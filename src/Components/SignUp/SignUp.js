import "./SignUp.css";
import { Link } from "react-router-dom";
import React, {  useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { SlSocialFacebook } from "react-icons/sl";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router";
import axios from "axios";


const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [age, setAge] = useState("");
 

  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [loading, setLoading] = useState(false);

  
  const navigation = useNavigate();

  const baseUrl = "https://bload-test.icanforsoftware.com/api/";

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (
      name === "" ||
      password === "" ||
      password.length < 8 ||
      email === "" ||
      email.indexOf("@") === -1 ||
      email.indexOf("@") === 0 ||
      email.indexOf("@") === email.length - 1 ||
      phone.length < 11 ||
      phone.length === "" ||
      age === "" ||
      governorate === "" ||
      address === ""
    ) {
      flag = false;
    } else {
      flag = true;
    }

    if (flag) {
      setLoading(true);
      try {
         await axios
          .post(
            `${baseUrl}client/register?api_password=AHMED$2024&name&phone&address&governorate`,
            {
              name: name,
              email: email,
              password: password,
              address: address,
              phone: phone,
              governorate: governorate,
              age: age,
              // male: 0,
              // female: 1,
              male: gender === "male" ? 1 : 0,
              female: gender === "female" ? 1 : 0,
            }
          )
          .then((res) => console.log(res));

        navigation("/login");
      } catch (err) {
        setAccept(true);
        setEmailError(err);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className="main">
      <form onSubmit={Submit} noValidate className="">
        <div className="mb-5">
          <h1>Create an account</h1>

          <p>Just one step to get started.</p>
        </div>

        <FloatingLabel
          className="mb-3 "
          controlId="floatingTextOne"
          label={<> <IoPersonOutline style={{ marginRight: "5px" }} /> Full name</>}
        >
          <Form.Control
            className={accept && name === "" ? "is-invalid" : ""}
            placeholder=""
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          {name === "" && accept && (
            <p className="mt-3 text-danger ">Username is Required.</p>
          )}
        </FloatingLabel>

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
                emailError === 400) &&
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

          {accept && emailError === 400 && (
            <p className="mt-3 text-danger ">
              The email has already been taken.
            </p>
          )}
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingPassword"
          label={<><LuLock style={{ marginRight: "5px" }} /> Password</>}
        >
          <Form.Control
            className={
              accept && (password === "") | (password.length < 8)
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

          {password === "" && accept && (
            <p className="mt-3 text-danger">Password is Required.</p>
          )}
          {password.length < 8 && password.length !== 0 && accept && (
            <p className="mt-3 text-danger">
              Password must be at least 8 characters or numbers.
            </p>
          )}
        </FloatingLabel>

        <FloatingLabel
          className="mb-3 "
          controlId="floatingTextTwo"
          label="Address"
        >
          <Form.Control
            className={accept && address === "" ? "is-invalid" : ""}
            placeholder=""
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />

          {address === "" && accept && (
            <p className="mt-3 text-danger ">address is Required.</p>
          )}
        </FloatingLabel>

        <FloatingLabel
          className="mb-3 "
          controlId="floatingTextThree"
          label="Age"
        >
          <Form.Control
            className={accept && age === "" ? "is-invalid" : ""}
            placeholder=""
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />

          {age === "" && accept && (
            <p className="mt-3 text-danger ">age is Required.</p>
          )}
        </FloatingLabel>

        <FloatingLabel
          className="mb-3 "
          controlId="floatingTextFour"
          label="Phone"
        >
          <Form.Control
            className={accept && phone === "" ? "is-invalid" : ""}
            placeholder=""
            type="text"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

          {phone === "" && accept && (
            <p className="mt-3 text-danger ">phone is Required.</p>
          )}
          {phone.length < 11 && accept && phone !=="" &&(
            <p className="mt-3 text-danger "> phone must be 11 numbers.</p>
          )}
        </FloatingLabel>

        {/* <FloatingLabel
          className="mb-3 "
          controlId="floatingTextFive"
          label="Governorate"
        >
          <Form.Control
            className={accept && governorate === "" ? "is-invalid" : ""}
            placeholder=""
            type="text"
            value={governorate}
            onChange={(e) => {
              setGovernorate(e.target.value);
            }}
          />
          <select value={gender}>
            <option value="0">male</option>
            <option value="1">female</option>
          </select>

          {governorate === "" && accept && (
            <p className="mt-3 text-danger ">governorate is Required.</p>
          )}
        </FloatingLabel> */}

        <FloatingLabel
          className="mb-3 "
          controlId="floatingTextFive"
          label="Governorate"
        >
          
          <Form.Select
            className={` ${accept && governorate === "" ? "is-invalid" : ""} mt-5 `}
            value={governorate}
            onChange={(e) => {
              setGovernorate(e.target.value);
            }}
          >
            <option value="">Select Governorate</option>
            <option value="Cairo">Cairo</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Damanhur">Damanhur</option>
              <option value="Damietta">Damietta</option>
              <option value="Asyut">Asyut</option>
              <option value="Aswan">Aswan</option>
              <option value="Sohag">Sohag</option>
              <option value="Suef">Suef</option>
              <option value="Hurghada">Hurghada</option>
              <option value="Tanta">Tanta</option>
              <option value="Mansoura">Mansoura</option>
              <option value="Banha">Banha</option>
              <option value="Minya">Minya</option>
              <option value="Faiyum">Faiyum</option>
              <option value="Zagazig">Zagazig</option>
              <option value="Ismailia">Ismailia</option>
              <option value="Suez">Suez</option>
              <option value="Rosetta">Rosetta</option>
              <option value="Qena">Qena</option>
              <option value="Port Said">Port Said</option>
              <option value="Mallawi">Mallawi</option>
              <option value="Kafr El Sheikh">Kafr El Sheikh</option>
              <option value="6th of October">6th of October</option>
              <option value="Giza">Giza</option>
          </Form.Select>

          {governorate === "" && accept && (
            <p className="mt-3 text-danger">Governorate is Required.</p>
          )}
        </FloatingLabel>





<div className="mb-3 " style={{ position: "relative" }}>
  <label htmlFor="gender" className="form-label " style={{fontSize:"18px",marginLeft:'11px'}}>
    Gender:
  </label>
  <div className="" style={{ position: "absolute", right: "0px", bottom:"-7px" }}>
    <Form.Check
      inline
      label="Male"
      // type="radio"
      name="gender"
      id="male"
      value="male"
      checked={gender === "male"}
      onChange={(e) => setGender(e.target.value)}
      className="mb-3"
    />
    <Form.Check
      inline
      label="Female"
      // type="radio"
      name="gender"
      id="female"
      value="female"
      checked={gender === "female"}
      onChange={(e) => setGender(e.target.value)}
    />
  </div>

  {gender === "" && accept && (
    <p className="text-danger">Gender is Required.</p>
  )}
</div>

       







        <button className="btn" type="submit">
          {loading ? "creating an account..." : "Create an account"}
        </button>

        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <p style={{ color: "gray" }}>already have an account.</p>
          <span>
            <Link
              className="text-decoration-none fw-bold"
              to={"/login"}
              style={{ color: "#000", marginLeft: "5px" }}
            >
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
            <a target="/" href="https://www.facebook.com/login/">
              <SlSocialFacebook
                style={{
                  fontSize: "30px",
                }}
              />
            </a>
          </div>
          <div className="google">
            <a
              target="/"
              href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&ifkv=ASKXGp3P7bHrRY_iEcpNteLHOZApj3_VskTo7MkjApjq_JCmHi1FHXyC_PznUFaLJKmKvCJn_GNN4A&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1929573637%3A1707145915883510&theme=glif"
            >
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
