import React, { useState } from 'react';
import "../styles/loginregister.css"
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div  className='register-login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
    
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
     
        <button  type="submit">Login</button>

      </form>
    <h4>if you dont have account <span style={{color:"blue"}}><Link to={"/register"}> click here</Link></span></h4>
    </div>
  );
};

export default LoginPage;
