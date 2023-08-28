import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";


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

function LoginPage() {
  const navigate = useNavigate();

  const [email, SetEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth,email,password)
    console.log('Logging in with:', email, password);
    navigate("/Courses");

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Login</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
