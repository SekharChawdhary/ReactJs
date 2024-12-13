import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";

const SignUp = () => {
  const [fullname, setFullName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [passworderror, setPassworderror] = useState('');
  const [usererror, setUsererror] = useState('');
  const [confirmPassworderror, setConfirmPassworderror] = useState('');
  const [mobileerror, setMobileerror] = useState('');
  const [fullnameerror, setFullNameerror] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullname === '') {
      setFullNameerror('Full Name is required');
    } else if(fullname.length<7) {
      setFullNameerror('Name should be 6 or more character');
    }

    if (username === '') {
      setUsererror('Username is required');
    } else if (username.length < 6) {
      setUsererror('Username should be 6 or more characters');
    } else {
      setUsererror('');
    }

    if (password === '') {
      setPassworderror('Password is required');
    } else if (password.length < 6) {
      setPassworderror('Password should be 6 or more characters');
    } else {
      setPassworderror('');
    }

    if (confirmPassword === '') {
      setConfirmPassworderror('Confirm Password is required');
    } else if (confirmPassword !== password) {
      setConfirmPassworderror('Passwords do not match');
    } else {
      setConfirmPassworderror('');
    }

    if (mobile === '') {
      setMobileerror('Mobile is required');
    } else if (!/^\d{10}$/.test(mobile)) {
      setMobileerror('Mobile number should be 10 digits');
    } else {
      setMobileerror('');
    }

    if (
      fullname &&
      username.length >= 6 &&
      password.length >= 6 &&
      confirmPassword === password &&
      /^\d{10}$/.test(mobile)
    ) {
      alert('Welcome! ' + fullname);
    }
  };

  return (
    <div className="container" id="signup">
      <div className="signup w-100 d-flex flex-column align-items-center">
        <div className="heading text-success fs-1">SignUp</div>
        <form className="d-flex flex-column align-items-center justify-center w-100" onSubmit={handleSubmit}>
          <div className="name d-flex flex-column w-90" style={{ width: '50%' }}>
            <label htmlFor="user">Full Name</label>
            <input
              type="text"
              id="user"
              className="w-100 mt-1 p-2"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            <span className="text-danger">{fullnameerror}</span>
          </div>

          <div className="userName d-flex flex-column w-90" style={{ width: '50%' }}>
            <label>User Name</label>
            <input
              type="text"
              className="w-100 mt-1 p-2"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <span className="text-danger">{usererror}</span>
          </div>

          <div className="password d-flex flex-column w-70 mt-2" style={{ width: '50%' }}>
            <label className="fs-6">Password</label>
            <input
              type="password"
              className="w-100 mt-1 p-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="text-danger">{passworderror}</span>
          </div>

          <div className="c-password d-flex flex-column w-70 mt-2" style={{ width: '50%' }}>
            <label className="fs-6">Confirm Password</label>
            <input
              type="password"
              className="w-100 mt-1 p-2"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <MdOutlineRemoveRedEye style={{    position: "relative",
    left: "39vw",
    bottom: "2.2vw"}} />
            <span className="text-danger">{confirmPassworderror}</span>
          </div>

          <div className="mobile d-flex flex-column mt-2" style={{ width: '50%' }}>
            <label>Mobile</label>
            <input
              type="text"
              className="w-100 mt-1 p-2"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <span className="text-danger">{mobileerror}</span>
          </div>

          <div className="button w-70 mt-2" style={{ width: '50%' }}>
            <button
              type="submit"
              className="w-100 bg-success text-light p-1 size-3 fs-5"
              style={{ border: 'none' }}
            >
              Register
            </button>
          </div>

          <div className="more d-flex justify-content-around" style={{ width: '50%', textDecoration: 'none' }}>
            <a href="https://wa.me/916302688393?text=Hello%2C%20I%20would%20like%20to%20sign%20in" target="_blank" rel="noopener noreferrer">Contact Us</a>
            <a href="#signIN">Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
