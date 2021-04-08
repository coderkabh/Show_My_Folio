import React from 'react';
import ReactDOM from 'react-dom';
import "../component-Styles/SignUp.css";
import HeaderIndex from './HeaderIndex';
import pic from '../assets/portfolio.jpg';
import { Form } from 'react-bootstrap';

function SignUp() {
    return(
        <>
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
                <Form method="" action="">

                    <div className="input-box">
                        <input type="text" name="fname" id="fname" autoComplete="off" required />
                        <label for="fname"> First Name </label>
                    </div>

                    <div className="input-box">
                        <input type="text" name="lname" id="lname" autoComplete="off" required />
                        <label for="lname"> Last Name </label>
                    </div>

                    <div className="input-box">
                        <input type="text" name="email" id="email" autoComplete="off" required />
                        <label for="email"> Email </label>
                    </div>


                    <div className="input-box">
                        <input type="password" name="password" id="pswd" autoComplete="off" required />
                        <label for="pswd"> Password </label>
                    </div>
                

                    <input type="submit" name="" value="Log In"/>

                </Form>
            </div>
        </div>
        
        </>
    );
}

export default SignUp;