// import React from 'react';
// //eslint-disable-next-line
// // import  pic from "../assets/indexBackground.jpg";

// import pic from '../assets/yogendra.jpg';

// import "../component-Styles/Section.css";

// function SectionIndex(){
//     return(
//         <div className="section">
//             {
//                 <img></img>
//             }
//         </div>
//     );      
// }

// export default SectionIndex;

import React from 'react'
import pic from '../assets/ekaterina.jpg';
import '../component-Styles/Section.css';



function SectionIndex() {
    return (
        <div className="section">
            <img className="section__image" src={pic}></img>
        </div>
    )
}

export default SectionIndex
