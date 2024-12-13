import React, { useState } from 'react';
import { NULL } from 'sass';

const SignUp2 = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    conformPassword: ""
  });
  const { userName, email, password, conformPassword } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === conformPassword && userName.length >= 6) {
      console.log('Form submitted successfully:', data);
    } else {
      console.log('Form submission failed');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">UserName:</label>
          <input 
            type="text" 
            className="form-control" 
            id="userName"
            name="userName" 
            value={userName} 
            onChange={changeHandler} 
            placeholder="Enter your username"
          />
          <small className="text-danger">
            {userName.length < 6 ? "Username should be at least 6 characters" : null}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            value={email} 
            onChange={changeHandler} 
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password" 
            value={password} 
            onChange={changeHandler} 
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="conformPassword">Confirm Password:</label>
          <input 
            type="password" 
            className="form-control" 
            id="conformPassword" 
            name="conformPassword" 
            value={conformPassword} 
            onChange={changeHandler} 
            placeholder="Confirm your password"
          />
          <small className="text-danger">
            {password !== conformPassword ? "Passwords do not match" : ""}
          </small>
        </div>

        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

        <p>{password===conformPassword && userName.length>=6 ?"SignUp sccess":null}</p>
      </form>
    </div>
  );
};

export default SignUp2;
