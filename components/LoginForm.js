import React, { useState } from "react";
import { loginUser } from "../utils/auth";

export default function LoginForm() {


    const [loginState, setLogin] = useState('');
    const [passwordState, setPassword] = useState('');

    async function LoginSubMit(){
        await loginUser(loginState, passwordState);
    }
 
    return (
        <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={event => {event.preventDefault();LoginSubMit()}}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" name="login" placeholder="name@example.com" onChange={event => setLogin(event.target.value)}></input>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" onChange={event => setPassword(event.target.value)}></input>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"></input> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Registration</button>
            <hr className="my-4"></hr>
            <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
            </form>
    )
}