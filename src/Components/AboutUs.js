import React from 'react'
import '../component-Styles/AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from '@material-ui/core';
import pic from '../assets/portfolio.jpg';
import {NavLink} from 'react-router-dom';



function AboutUs() {
    return (
        <div className="about-us">
            <ul id="unordered">
                <li id="logo">
                <Link to="/">
                <img src={pic} alt="logo-pic"/>
                </Link>
                </li>
                <li class="item"><NavLink to="/">Home</NavLink></li>
                <li class="item"><NavLink to="/about-us">About us</NavLink></li>
                <li class="item"><NavLink to="/sign-in">Log in</NavLink></li>
                <li class="item"><NavLink to="sign-up">Sign Up</NavLink></li>
                <li class="item"><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
            <div className="container-fluid">
                <div className="row header">
                    <h1>Show My Folio </h1>
                    <p>
                        IT IS A WEBSITE WHICH CREATES A PORTFOLIO FOR YOU.IT IS MADE BY A GROUP OF COLLEGE 
                        STUDENTS FROM GLA UNIVERSITY UNDER THE MENTORSHIP OF OUR BELOVED SIR, &nbsp;
                        <strong>LATE MR. ANAND PRAKASH GUPTA</strong> 
                    </p>
                </div>
                {/* <div className="row header2">
                    <div className="col-sm-7 col-12">
                        <h3>Your Portfolio, our responsibilty</h3>
                        <p>We are here to be your companion throughout your journey of creating a portfolio</p>
                    </div>
                    <div className="col-sm-4 col-12">
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default AboutUs
