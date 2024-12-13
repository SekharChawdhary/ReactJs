import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    // Validate Username
    if (!formData.username) {
      formErrors.username = 'Username is required';
      isValid = false;
    }

    // Validate Mobile Number
    if (!formData.mobile) {
      formErrors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = 'Mobile number must be 10 digits';
      isValid = false;
    }

    // Validate Email
    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Validate Password
    if (!formData.password) {
      formErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    // Validate Confirm Password
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="d-flex flex-column align-items-center" style={{ width: '100%' }} onSubmit={handleSubmit}>
        <div className="userName d-flex flex-column" style={{ width: '30%' }}>
          <label htmlFor="username" className="w-60">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="text-danger">{errors.username}</span>}
        </div>

        <div className="mobileNumber d-flex flex-column" style={{ width: '30%' }}>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <span className="text-danger">{errors.mobile}</span>}
        </div>

        <div className="email d-flex flex-column" style={{ width: '30%' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>

        <div className="password d-flex flex-column" style={{ width: '30%' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>

        <div className="confirmPassword d-flex flex-column" style={{ width: '30%' }}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
        </div>

        <div className="buttons">
          <button type="submit" className="text-white bg-success px-3 py-1 rounded-50% border-0 mt-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
