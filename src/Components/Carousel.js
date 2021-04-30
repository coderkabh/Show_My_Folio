import React, {useState} from 'react';
import '../component-Styles/Carousel.css';
import pic from '../assets/yogendra.jpg';
import pic1 from '../assets/sonnie-hiles-unsplash.jpg';
import pic2 from '../assets/rahabi-khan-c_unsplash.jpg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Carousel() {
    const [currImg, setCurrImg] = useState(0);
    const images =[
        {title:"Yogendra", subtitle:"Model and artist", img:pic},
        {title:"Sonnie Hiils", subtitle:"I am an adventurer", img:pic1},
        {title:"Rahabi Khan", subtitle:"I am a photographer", img:pic2},
    ];
    return (
        <div className="carousel" >
            <div className="carouselInner" style={{backgroundImage:`url(${images[currImg].img})`}} >

                <div className="left" onClick={()=>setCurrImg(currImg - 1)}>
                    <ArrowBackIosIcon/>
                </div>
                <div className="center"></div>
                <div className="right" onClick={()=>setCurrImg(currImg + 1)} >
                    <ArrowForwardIosIcon/>
                </div>
            </div>
        </div>
    )
}

export default Carousel

