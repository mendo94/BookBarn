import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
function SignIn() {
  const [user, setUser] = useState({});
  let Navigate = useNavigate();

  const handleTextChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisteredUser = () => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          localStorage.setItem("userId", result.userId);
          console.log(result.userId);
          Navigate(`/`);
        }
      });
  };

  return (
    <div className="container">
      <h1>Sign in to your Account</h1>
      <label htmlFor="username">Enter username</label>
      <input type="text" name="username" onChange={handleTextChange} />
      <label htmlFor="password">Enter password</label>
      <input type="password" name="password" onChange={handleTextChange} />
      <br></br>
      <button onClick={handleRegisteredUser}>Login</button>
    </div>
  );
}

export default SignIn;
