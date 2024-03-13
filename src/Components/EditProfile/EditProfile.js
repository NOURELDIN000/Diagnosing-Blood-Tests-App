import { FaPen } from "react-icons/fa";
import "./EditProfile.css";

import React, { useContext, useRef, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { useNavigate } from "react-router";
import NavBar from "../NavBar/NavBar";
import ImageContext from "../ImageProfile";

const EditProfile = () => {
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
      navigation("/profile");
    }
  };

  const fileInputRef = useRef(null);
  // const [selectedImage, setSelectedImage] = useState(null);
  const { selectedImage, setSelectedImage } = useContext(ImageContext);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click(); // Ensure that fileInputRef is not null before calling click()
  };

  return (
    <div>
      <NavBar />
      <div className="img-profile  d-flex justify-content-center align-items-center ">
        {selectedImage ? (
          <img src={selectedImage} alt="" />
        ) : (
          <img src="../images/log.jpg" alt="" />
        )}
        <div className="fapen-icon">
          <button className="fapen-btn" onClick={handleClick}>
            <FaPen />
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
      </div>
      <div className="text-center profile-info ">
        <h3 style={{ marginTop: "15px" }}>Profile name </h3>
        <p style={{ marginTop: "15px" }}>profile_email@gmail.com</p>
      </div>

      <div className="edit-form">
        <div className="main">
          <form onSubmit={Submit} noValidate autoComplete="off" className="">
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
              {(email === "" ||
                email.indexOf("@") === -1 ||
                email.indexOf("@") === email.length - 1 ||
                email.startsWith("@")) &&
              accept ? (
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
                <p className="mt-3 text-danger">
                  Email address must include @.
                </p>
              )}
              {accept &&
                email !== "" &&
                (email.startsWith("@") ||
                  email.indexOf("@") === -1 ||
                  email.endsWith("@")) && (
                  <p className="mt-3 text-danger ">
                    Please Enter a Valid Email.
                  </p>
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
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
