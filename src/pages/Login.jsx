import React, { useContext, useState } from 'react';
import "../styles/loginregister.css"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import appAxios from '../utils/AxiosConfig';
import { existUserContext } from '../context/UserContext';

const LoginPage = () => {
  const {  setExistUser }=useContext(existUserContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(appAxios.post("/api/auth/login",formData).then(res=>{localStorage.setItem("user",JSON.stringify(res.data.data))
      setExistUser(res.data.data)
    }),{
      pending:'loading',
      success:'success',
      error:"error"
    }  
  )
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
