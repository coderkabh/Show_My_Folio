import React from "react";
import HeaderIndex from './HeaderIndex';
import pic from '../assets/portfolio.jpg';
//eslint-disable-next-line
import SectionIndex from './SectionIndex';
import Footer from './Footer';
import Carousel from './Carousel';

function Home(){
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
        link4 = "/sign-up" 
        option5="Contact Us"
        link5 = "/contact-us" />
        
        <Carousel/>
        
        <Footer/>
        </>
        
    );
}

export default Home;