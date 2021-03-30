import React from "react";
import ReactDOM from "react-dom";
import HeaderIndex from './Components/HeaderIndex';
import SectionIndex from './Components/SectionIndex';
import pic from "../src/assets/portfolio.jpg";


function App() {
  return (
    <>
    <HeaderIndex 
    logo = {pic}
    option1="Home" 
    option2="Option 2" 
    option3="Option 3" 
    option4="Sign Up" 
    option5="Log in" />

    <SectionIndex/>
    </>
  );
}

export default App;
