import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


import "./App.css";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8KG6ou-FR-BOF4yoQIPvGZwODWXN66e0",
  authDomain: "one-one-ad2fc.firebaseapp.com",
  projectId: "one-one-ad2fc",
  storageBucket: "one-one-ad2fc.appspot.com",
  messagingSenderId: "327812209410",
  appId: "1:327812209410:web:f28fa8ebe132ad743e401b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignUpPage = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Signed up user:", user);
      // You can redirect the user or perform other actions upon successful signup

      navigate("/Courses");

    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-6">
          <h2 className="text-center">Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
              value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
              value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
              value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <br /> <br />
            <center>
              {" "}
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>{" "}
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
