import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value 
    });
  }

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/login/", data)
      .then(res =>  {
        console.log('login', res)
        localStorage.setItem("token", res.data.payload);
        props.history.push('/bubblepage');
      });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={data.username}
          onChange={handleChange}          
        />        
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}          
        />
        <button type='submit'>Log-in</button>        
      </form>
    </div>
  );
};

export default Login;
