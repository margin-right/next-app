import React from "react";
import { loginUser } from "../utils/auth";

class LoginForm extends React.Component{

    state = {
        login: '',
        password: ''
        };

        formChange = event => {
        this.setState({[event.target.name]: event.target.value});
        }
        userSubmit = event => {
        
        const {login, password} = this.state;

        event.preventDefault();
        console.log(this.state);

        loginUser(login, password);
        }


        render(){
            return(
                <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={this.userSubmit}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" name="login" placeholder="name@example.com" onChange={this.formChange}></input>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" onChange={this.formChange}></input>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"></input> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            <hr className="my-4"></hr>
            <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
            </form>
            )
        }

}

export default LoginForm;