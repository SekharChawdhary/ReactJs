import React, { useState } from 'react';

const SignIn = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [usererror, setUsererror] = useState('');
    const [passworderror, setPassworderror] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === '') {
            setUsererror('Username is required');
        } else if (username.length < 6) {
            setUsererror('Username should be 6 or more characters');
        }

        if (password === '') {
            setPassworderror('Password is required');
        } else if (password.length < 6) {
            setPassworderror('Password should be 6 or more characters');
        }
    };

    return (
        <div className="container" id='signIN'>
            <div className="signup w-100 d-flex flex-column align-items-center">
                <div className='heading text-success fs-1'>Sign Up</div>

                <div className="userName d-flex flex-column w-90" style={{ width: '50%' }}>
                    <label>User Name</label>
                    <input 
                        type="text" 
                        onChange={(e) => setUserName(e.target.value)} 
                        className="w-100 mt-1 p-2" 
                        placeholder="Name" 
                        value={username} 
                    />
                </div>

                <div className='erro w-50'>
                    <span className="text-danger">{usererror}</span>
                </div>

                <form className="d-flex flex-column align-items-center justify-center w-100">
                    <div className="password d-flex flex-column w-70 mt-2" style={{ width: '50%' }}>
                        <label className='fs-6'>Password</label>
                        <input 
                            type="text"  
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-100 mt-1 p-2" 
                            placeholder='Password' 
                            value={password}
                        />
                    </div>

                    <div className='erro w-50'>
                        <span className="text-danger">{passworderror}</span>
                    </div>

                    <div className="button w-70 mt-2" style={{ width: '50%' }}>
                        <button 
                            type='submit' 
                            onClick={handleSubmit} 
                            className='w-100 bg-success text-light p-1 size-3 fs-5' 
                            style={{ border: 'none' }}
                        >
                            Sign In
                        </button>
                    </div>

                    <div className="more d-flex justify-content-around" style={{ width: '50%', textDecoration: 'none' }}>
                        <a href="">Forget Password</a>
                        <a href="#signup">Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
