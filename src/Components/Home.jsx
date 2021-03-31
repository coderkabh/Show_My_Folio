import React from "react";
import ReactDOM from "react-dom";
import HeaderIndex from './HeaderIndex';
import pic from '../assets/portfolio.jpg';
import SectionIndex from './SectionIndex';

function Home(){
    return(
        <>
        <HeaderIndex 
        logo = {pic}
        option1="Home" 
        option2="Option 2" 
        option3="Option 3" 
        option4="Sign Up" 
        option5="Log in"/>
        <SectionIndex/>
        </>
        
    );
}

export default Home;