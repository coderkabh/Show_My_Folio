import React, { Component } from 'react';
//eslint-disable-next-line
import ReactDOM from 'react-dom';
import "../component-Styles/SignUp.css";
import HeaderIndex from './HeaderIndex';
import pic from '../assets/portfolio.jpg';
import { Form } from 'react-bootstrap';

import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName :"",
        lastName: "",
        email:"",
        password:"",
        phoneNumber:""
    };
  }

  submitUser=()=>{
    axios.post('http://localhost:3000/sign-up',{
        firstName:this.state.firstName,
        lastName: this.state.lastName,
        email:this.state.email,
        password:this.state.password,
        phoneNumber:this.state.phoneNumber
    })
}

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
        link3 = "/sign-in"
        option4="Sign Up"
        link4 = "#" 
        option5="Contact Us"
        link5 = "/contact-us" />

        {/* From here Form starts */}

        <div className="main-div">
            <div className="box">
                <h1>SHOW MY FOLIO</h1>
                <Form method="POST" action="/sign-up">

                    <div className="input-box">
                        <input type="text" name="fname" id="fname" value={this.state.firstName} autoComplete="off" required onChange= {e=>{this.setState({
                            firstName:e.target.value
                        })}}/>
                        <label for="fname"> First Name </label>
                    </div>

                    <div className="input-box">
                        <input type="text" name="lname" id="lname" value={this.state.lastName} autoComplete="off" required onChange={e=>{this.setState({
                            lastName:e.target.value
                        })}}/>
                        <label for="lname"> Last Name </label>
                    </div>

                    <div className="input-box">
                        <input type="text" name="email" id="email" value={this.state.email} autoComplete="off" required  onChange={e=>{this.setState({
                            email:e.target.value
                        })}} />
                        <label for="email"> Email </label>
                    </div>


                    <div className="input-box">
                        <input type="password" name="password" id="pswd" value={this.state.password} autoComplete="off" required onChange={e=>{this.setState({
                            password:e.target.value
                        })}} />
                        <label for="pswd"> Password </label>
                    </div>

                    <div className="input-box">
                        <input type="tel" name="phonenumber" id="phno" value={this.state.phoneNumber} autoComplete="off" required onChange={e=>{this.setState({
                            phoneNumber:e.target.value
                        })}} />
                        <label for="phno"> PhoneNumber </label>
                    </div>
                

                    <input type="submit" id="sign-up" name="" value="Sign-Up" onClick={this.submitUser} />
                    

                </Form>
            </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

