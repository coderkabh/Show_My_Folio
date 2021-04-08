import React from 'react';
import ReactDOM from 'react-dom';
import "../component-Styles/SignIn.css";
import HeaderIndex from './HeaderIndex';
import pic from '../assets/portfolio.jpg';
import { Form } from 'react-bootstrap';

function SignIn() {
    return(
        <>
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
                <Form method="" action="">

                    <div className="input-box">
                        <input type="text" name="username" id="username" autoComplete="off" required />
                        <label for="username"> Username </label>
                    </div>

                    <div className="input-box">
                        <input type="password" name="password" id="pswd" autoComplete="off" required />
                        <label for="pswd"> Password </label>
                    </div>

                    <input type="submit" id="log-in" name="" value="Log In"/>

                </Form>
            </div>
        </div>
        
        </>
    );
}

export default SignIn;