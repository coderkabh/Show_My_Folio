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

        <Form>
            <div>
                <label for="username">Username :</label>
                <input type="textbox" for="username"></input>

                <label for="password">Password :</label>
                <input type="password" for="password"></input>

                
            </div>
        </Form>
        </>
    );
}

export default SignIn;