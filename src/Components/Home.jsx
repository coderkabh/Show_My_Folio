import React from "react";
import HeaderIndex from './HeaderIndex';
import pic from '../assets/portfolio.jpg';
import SectionIndex from './SectionIndex';

function Home(){
    return(
        <>
        <HeaderIndex 
        logo = {pic}
        option1="Home" 
        link1 = "/"
        option2="Option 2" 
        link2 = "/"
        option3="Option 3" 
        link3 = "/"
        option4="Sign Up"
        link4 = "/" 
        option5="Log in"
        link5 = "/sign-in" />
        <SectionIndex/>
        </>
        
    );
}

export default Home;