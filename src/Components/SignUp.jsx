import React, {useState} from 'react'
//eslint-disable-next-line
import ReactDOM from 'react-dom';
import "../component-Styles/SignUp.css";
import HeaderIndex from './HeaderIndex';
import pic from '../assets/portfolio.jpg';
import { Form } from 'react-bootstrap';

import axios from 'axios';


function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhonenumber] = useState('');

    const register=()=>{
        axios.post('http://localhost:3000/sign-up',{
            firstName:firstName,
            lastName: lastName,
            email:email,
            password:password,
            phoneNumber:phoneNumber
        }).then((response)=>{
            console.log(response);
        });
    };

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
                          <input type="text" name="fname" id="fname" value={firstName} autoComplete="off" required onChange={e=>setFirstName(e.target.value)} />
                          <label for="fname"> First Name </label>
                      </div>
  
                      <div className="input-box">
                          <input type="text" name="lname" id="lname" value={lastName} autoComplete="off" required onChange={e=>setLastName(e.target.value)} />
                          <label for="lname"> Last Name </label>
                      </div>
  
                      <div className="input-box">
                          <input type="text" name="email" id="email" value={email} autoComplete="off" required  onChange={e=>setEmail(e.target.value) } />
                          <label for="email"> Email </label>
                      </div>
  
  
                      <div className="input-box">
                          <input type="password" name="password" id="pswd" value={password} autoComplete="off" required onChange={e=>setPassword(e.target.value)} />
                          <label for="pswd"> Password </label>
                      </div>
  
                      <div className="input-box">
                          <input type="tel" name="phonenumber" id="phno" value={phoneNumber} autoComplete="off" required onChange={e=>setPhonenumber(e.target.value)} />
                          <label for="phno"> PhoneNumber </label>
                      </div>               
  
                      <input type="submit" id="sign-up" name="" value="Sign-Up" onClick={register} /> 
                  </Form>
              </div>
          </div>
        </div>
      );
}

export default SignUp


