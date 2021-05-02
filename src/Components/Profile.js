import React from 'react'
import HeaderIndex from './HeaderIndex';
import pic from '../assets/portfolio.jpg';

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
        </>
    )
}

export default Profile
