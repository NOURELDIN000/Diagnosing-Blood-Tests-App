import "./DoctorRegisteration.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { SlSocialFacebook } from "react-icons/sl";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import axios from "axios";

const DoctorRegisteration = ({ setShowRegisterAlert }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [gender, setGender] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [age, setAge] = useState("");
  const [identificationFront, setIdentificationFront] = useState("");
  const [identificationBack, setIdentificationBack] = useState("");
  // const [docSyndicateCard, setDocSyndicateCard] = useState("");
  const [picProfile, setPicProfile] = useState("");
  const [Specialization, setSpecialization] = useState("");
  const [ClinicAddress, setClinicAddress] = useState("");
  const [clinicGovernorate, setClinicGovernorate] = useState("");

  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();

  // const baseUrl = "https://bload-test.icanforsoftware.com/api/";
  const baseUrl = "http://127.0.0.1:8000/api/";

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (
      name === "" ||
      password === "" ||
      password.length < 8 ||
      passwordR !== password ||
      email === "" ||
      email.indexOf("@") === -1 ||
      email.indexOf("@") === 0 ||
      email.indexOf("@") === email.length - 1 ||
      phone.length < 11 ||
      phone.length === "" ||
      age === "" ||
      governorate === "" ||
      address === "" ||
      ClinicAddress === "" ||
      identificationFront === "" ||
      identificationBack === "" ||
      Specialization === "" ||
      picProfile === ""
      // docSyndicateCard === ""
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
            `${baseUrl}doctor/regitertion?api_password=AHMED$2024&name&phone&address&governorate`,
            {
              name: name,
              email: email,
              password: password,
              address: address,
              phone: phone,
              governorate: governorate,
              age: age,
              medical_specialization: Specialization,
              clinic_governorate: clinicGovernorate,
              clinic_address: ClinicAddress,
              identification_card_face: identificationFront,
              identification_card_back: identificationBack,
              profile_pic: picProfile,

              // male: gender === "male" ? 1 : 0,
              // female: gender === "female" ? 1 : 0,
            }
          )
          .then((res) => console.log(res));

        navigation("/doctorlogin");
        setShowRegisterAlert(true);
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

          <p>
            Just one step to get started. ({" "}
            <Link className="patientformbtn" to={"/"}>
              Go To Patient Form
            </Link>
            )
          </p>
        </div>

        <FloatingLabel
          className="mb-3 "
          controlId="floatingTextOne"
          label={
            <>
              {" "}
              <IoPersonOutline style={{ marginRight: "5px" }} /> Full name{" "}
            </>
          }
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
          label={
            <>
              <MdAlternateEmail style={{ marginRight: "5px" }} /> E-mail
            </>
          }
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
          label={
            <>
              <LuLock style={{ marginRight: "5px" }} /> Password
            </>
          }
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
          className="mb-3"
          controlId="floatingPassword"
          label={
            <>
              <LuLock style={{ marginRight: "5px" }} />
              Confirm Password
            </>
          }
        >
          <Form.Control
            className={accept && passwordR !== password ? "is-invalid" : ""}
            placeholder=""
            type="password"
            value={passwordR}
            onChange={(e) => {
              setPasswordR(e.target.value);
            }}
          />
          {passwordR === "" && accept && (
            <p className="mt-3 text-danger">confirm Password is Required.</p>
          )}
          {passwordR !== password && accept && (
            <p className="mt-3 text-danger">
              confirm Password don't match Password.
            </p>
          )}
        </FloatingLabel>

        <FloatingLabel
          className="mb-3 "
          controlId="floatingTextTwo"
          label={
            <>
              {" "}
              <MdEmail style={{ marginRight: "5px" }} /> Address{" "}
            </>
          }
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
          label={
            <>
              {" "}
              <IoPersonOutline style={{ marginRight: "5px" }} /> Age{" "}
            </>
          }
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
          label={
            <>
              {" "}
              <FaPhoneAlt style={{ marginRight: "5px" }} /> Phone
            </>
          }
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
          {phone.length < 11 && accept && phone !== "" && (
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
            className={` ${
              accept && governorate === "" ? "is-invalid" : ""
            }   mt-5`}
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

        <FloatingLabel
          className="mb-3 "
          controlId="floatingTextFive"
          label="Clinic Governorate"
        >
          <Form.Select
            className={` ${
              accept && clinicGovernorate === "" ? "is-invalid" : ""
            }   mt-5`}
            value={clinicGovernorate}
            onChange={(e) => {
              setClinicGovernorate(e.target.value);
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

          {clinicGovernorate === "" && accept && (
            <p className="mt-3 text-danger">Clinic Governorate is Required.</p>
          )}
        </FloatingLabel>

        <Form.Group controlId="formFile" className="mb-3 mt-4">
          <Form.Label>Identification Card (Front)</Form.Label>
          <Form.Control
            className={accept && identificationFront === "" ? "is-invalid" : ""}
            placeholder=""
            type="file"
            accept="image/*"
            value={identificationFront}
            onChange={(e) => {
              setIdentificationFront(e.target.value);
            }}
          />
        </Form.Group>

        {accept && identificationFront === "" && (
          <p className="mt-3 text-danger">
            Identification Card (Front) is Required.
          </p>
        )}

        <Form.Group controlId="formFile" className="mb-3 mt-4">
          <Form.Label>Identification Card (Back)</Form.Label>
          <Form.Control
            className={accept && identificationBack === "" ? "is-invalid" : ""}
            placeholder=""
            type="file"
            accept="image/*"
            value={identificationBack}
            onChange={(e) => {
              setIdentificationBack(e.target.value);
            }}
          />
        </Form.Group>
        {accept && identificationBack === "" && (
          <p className="mt-3 text-danger">
            Identification Card (Back) is Required.
          </p>
        )}

        {/* <Form.Group controlId="formFile" className="mb-3 mt-4">
        <Form.Label>Doctor Syndicate Card</Form.Label>
        <Form.Control
         className={accept && docSyndicateCard=== "" ? "is-invalid" : ""}
         placeholder=""
         type="file"
         accept="image/*"
         value={docSyndicateCard}
         onChange={(e) => {
           setDocSyndicateCard(e.target.value);}}
          />
      </Form.Group>
      {accept && docSyndicateCard ==="" && (<p className="mt-3 text-danger">Doctor Syndicate Card is Required.</p>)} */}

        <Form.Group controlId="formFile" className="mb-3 mt-4">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            className={accept && picProfile === "" ? "is-invalid" : ""}
            placeholder=""
            type="file"
            accept="image/*"
            value={picProfile}
            onChange={(e) => {
              setPicProfile(e.target.value);
            }}
          />
        </Form.Group>

        {accept && picProfile === "" && (
          <p className="mt-3 text-danger">Profile Picture is Required.</p>
        )}

        <FloatingLabel
          className="mb-3 "
          controlId="floatingTextTen"
          label="Specialization"
        >
          <Form.Select
            className={` ${
              accept && Specialization === "" ? "is-invalid" : ""
            }   mt-5`}
            value={Specialization}
            onChange={(e) => {
              setSpecialization(e.target.value);
            }}
          >
            <option value="">Select a Specialization</option>
            <option value="SPECIALIZED PHISICAN INTERNAL">
              SPECIALIZED PHISICAN INTERNAL
            </option>
          </Form.Select>

          {Specialization === "" && accept && (
            <p className="mt-3 text-danger">Specialization is Required.</p>
          )}
        </FloatingLabel>

        <FloatingLabel
          className="mb-3 "
          controlId="floatingTextFour"
          label={
            <>
              {" "}
              <MdEmail style={{ marginRight: "5px" }} /> Clinic Address{" "}
            </>
          }
        >
          <Form.Control
            className={accept && ClinicAddress === "" ? "is-invalid" : ""}
            placeholder=""
            type="text"
            value={ClinicAddress}
            onChange={(e) => {
              setClinicAddress(e.target.value);
            }}
          />

          {ClinicAddress === "" && accept && (
            <p className="mt-3 text-danger ">Clinic Address is Required.</p>
          )}
        </FloatingLabel>

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
              to={"/doctorlogin"}
              style={{ color: "#000", marginLeft: "5px" }}
              // onClick={()=>setShowAlert(true)}
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

export default DoctorRegisteration;
