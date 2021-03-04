import { cilDoubleQuoteSansLeft } from '@coreui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/register.css';

function Register(props) {
    const api = axios.create({
        baseURL: `http://phucnb-django-example.herokuapp.com/api/user/registration`
    })
    const createUser = async () => {
        let res = await api.post('/', register);
    }
    const [register, setRegister] = useState({
        username: "",
        password: "",
        name: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password, name } = register;
    function handleChangeRegister(event){
        const { name, value } = event.target;
        setRegister(register => ({ ...register, [name]: value }));
    }

    function handleSubmitRegister(event) {
        event.preventDefault();
        setSubmitted(true);  
        if (username && password && name) {
            setRegister(register);
            alert('submit register thanh cong');
            createUser();
           
        }
        
    }

    return (
        <div className="container register">
            <form id="from-register" className="form" onSubmit={handleSubmitRegister}>
                <h2>Register With Us</h2>
                <div className={"form-control" + ((submitted && !username) ? " " : " ")}>
                    <label htmlFor="username">UserName</label>
                    <input name="username" value={username} onChange={handleChangeRegister} type="text" id="username-login" placeholder="Enter username" />
                    <small>Error Username !</small>
                </div>
                <div className={"form-control" + ((submitted && !password) ? " " : " ")}>
                    <label htmlFor="password">Password</label>
                    <input name="password" value={password} onChange={handleChangeRegister} type="password" id="password" placeholder="Enter password" />
                    <small>Error message</small>
                </div>
                
                <div className={"form-control" + ((submitted && !name) ? " " : " ")} >
                    <label htmlFor="name">Name</label>
                    <input name="name" value={name} onChange={handleChangeRegister} type="text" id="name" placeholder="Enter Name" />
                    <small>Error Name</small>
                </div>
                <button type="submit">Submit</button>
                
            </form>

            <div className="group" style={{display: 'none'}}>
                <Link to="/" className="btn-link">Back</Link>
                <Link to="/logintest" className="btn-link">Login</Link>
                
            </div>

        </div>
    );
}

export default Register;