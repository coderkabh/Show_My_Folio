import React from 'react'
import HeaderIndex from './HeaderIndex';
import  "../component-Styles/Profile.css";
import pic from '../assets/portfolio.jpg';
import Footer from './Footer';

function Profile() {
    return (
        <>
        <HeaderIndex 
        option1="Profile" 
        link1 = "/"
        logo = {pic}
        option2="Edit Profile" 
        link2 = "/edit-profile"
        option3="Change Password" 
        link3 = "/change-password"
        option4="Settings"
        link4 = "/settings" 
        option5="Logout"
        link5 = "/"/>
    
        <div className="background">
            <h1 className="text">Welcome to Profile</h1>
        </div>
        
<Footer/>
        </>
    )
}

export default Profile
