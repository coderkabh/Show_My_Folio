import React, { Component } from 'react';
//eslint-disable-next-line
import ReactDOM from 'react-dom';
import "../component-Styles/SignIn.css";
import HeaderIndex from './HeaderIndex';
import pic from '../assets/portfolio.jpg';
import { Form } from 'react-bootstrap';
import axios from 'axios';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:"",
        password:"" 
    };
  }

  login=()=>{
    axios.post('http://localhost:3000/sign-in',{
        username:this.state.username,
        password:this.state.password
    })
};
    

  render() {
    return (
      <div>
        <HeaderIndex 
        logo = {pic}
        option1="Home" 
        link1 = "/"
        option2="About Us" 
        link2 = "/about-us"
        option3="Log In" 
        link3 = "#"
        option4="Sign Up"
        link4 = "/sign-up" 
        option5="Contact Us"
        link5 = "/contact-us" />

        {/* From here Form starts */}

        <div className="main-div">
            <div className="box">
                <h1>SHOW MY FOLIO</h1>
                <Form method="POST" action="/sign-in">

                    <div className="input-box">
                        <input type="text" name="username" value={this.state.username} id="username" autoComplete="off" required  onChange={e=>{this.setState({
                            username:e.target.value
                        })}} />
                        <label for="username"> Username </label>
                    </div>

                    <div className="input-box">
                        <input type="password" name="password" value={this.state.password} id="pswd" autoComplete="off" required onChange={e=>{this.setState({
                            password:e.target.value
                        })}} />
                        <label for="pswd"> Password </label>
                    </div>

                    <input type="submit" id="log-in" name="" value="Login" onClick={this.login} />

                </Form>
            </div>
        </div>
        
      </div>
    );
  }
}

export default SignIn;

