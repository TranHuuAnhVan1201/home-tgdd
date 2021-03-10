import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./../css/register.css";
function Login(props) {
  const api = axios.create({
    baseURL: `http://phucnb-django-example.herokuapp.com/api/user/auth/login`,
  });
  let history = useHistory();
  const loginUser = async () => {
    let res = await api
      .post("/", inputs)
      .then((res) => {
        const token = res.data.access;
        const to = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTU0MjgxNTEwMTAsImlhdCI6MTYxNTM0MTc1MTAxMCwiaWQiOiI2MDM0YTg5YTZjOTRjMTVjYWNhMzU5ZDIiLCJpc3MiOiJ2YW5sZTMifQ.USxKvtOnpkg75llCodJ1hEWBSJz0FTt7qT6Uku_udyE"
        let decoded = jwtDecode(token);
        let decoded_quy = jwtDecode(to);
        console.log(decoded_quy);
        alert("submit thanh cong");
        if (decoded.role === "admin") {
          history.push("/admin/user");
          window.setTimeout(window.location.reload.bind(window.location), 10);
        }
        if (decoded.role === "user") {
          console.log(decoded);
          history.push("/carts");
          window.setTimeout(window.location.reload.bind(window.location), 10);
        }
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Bước 1: khai báo State - gồm 2 phần tử input và setInput.
  // Bước 2: khai báo inputs = {} object.
  // Bước 3: function handleChange(e), nhận 2 trường name, value;
  // Bước 4: onChange - khi input thay đổi thì gọi handleChange()
  // Bước 5: setInputs(giá trị input => ({...inputs, [name]: value))
  // Bước 6: Khi nhấn Submit =>
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    if (username && password) {
      setInputs(inputs);
      console.log(inputs);
      loginUser();
    }
  }

  return (
    <div className="container">
      <form id="form-login" className="form" onSubmit={handleSubmit}>
        <h2>Login With Us</h2>
        <div
          className={"form-control" + (submitted && !username ? " error" : " ")}
        >
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={username}
            onChange={handleChange}
            type="text"
            id="username-login"
            placeholder="Enter username"
          />
          <small>Error username !</small>
        </div>
        <div
          className={"form-control" + (submitted && !password ? " error" : " ")}
        >
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            id="password-login"
            placeholder="Enter password"
          />
          <small>Error password !</small>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="group">
        <Link to="/" className="btn-link">
          Back
        </Link>
        <Link to="/register" className="btn-link">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
