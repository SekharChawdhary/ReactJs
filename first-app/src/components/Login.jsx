import React, { useRef, useState } from 'react';

const Login = () => {
  const refs = useRef({
    username: null,
    password: null,
    file: null,
    gender: {
      male: null,
      female: null
    }
  });

  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, file, gender } = refs.current;
    const newErrors = {};

    if (!username.value) {
      newErrors.username = 'Username is required';
    }
    if (!password.value) {
      newErrors.password = 'Password is required';
    }
    if (!file.files[0]) {
      newErrors.file = 'File is required';
    }
    if (!gender.male.checked && !gender.female.checked) {
      newErrors.gender = 'Gender is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formValues = {
      username: username.value,
      password: password.value,
      file: file.files[0],
      gender: gender.male.checked ? 'Male' : 'Female'
    };

    setFormData(formValues);
    setErrors({});
  };

  return (
    <div>
      <center>
        <form className='d-flex flex-column' style={{ width: '40%' }}>
          <input
            type="text"
            placeholder='Enter user Name'
            ref={el => refs.current.username = el}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

          <input
            type="password"
            placeholder='Enter password'
            ref={el => refs.current.password = el}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

          <input
            type='file'
            ref={el => refs.current.file = el}
          />
          {errors.file && <p style={{ color: 'red' }}>{errors.file}</p>}

          <div className='gender'>
            <input
              type="radio"
              name='gender'
              ref={el => refs.current.gender.male = el}
            /> Male
            <input
              type="radio"
              name='gender'
              ref={el => refs.current.gender.female = el}
            /> Female
          </div>
          {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}

          <button
            type='submit'
            onClick={handleSubmit}
            className='border-0 text-white bg-success'
          >
            Submit
          </button>
        </form>
      </center>

      {formData && (
        <div>
          <h3>Form Submitted Successfully:</h3>
          <p>Username: {formData.username}</p>
          <p>Password: {formData.password}</p>
          <p>File: {formData.file.name}</p>
          <p>Gender: {formData.gender}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
