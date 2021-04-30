import React, {useState} from 'react';
import '../component-Styles/Carousel.css';
import pic from '../assets/yogendra.jpg';
import pic1 from '../assets/sonnie-hiles-unsplash.jpg';
import pic2 from '../assets/rahabi-khan-c_unsplash.jpg';
import pic3 from '../assets/shubham-patel-unsplash.jpg';
import pic4 from '../assets/lee-luis-unsplash.jpg';
import pic5 from '../assets/nicole-geri-unsplash.jpg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Carousel() {
    const [currImg, setCurrImg] = useState(1);
    const images =[   
        {title:"Sonnie Hiils", subtitle:"I am an adventurer", img:pic1},
        {title:"Rahabi Khan", subtitle:"Model and artist", img:pic2},
        {title:"Shubhangi Verma", subtitle:"Photoshoot artist" , img:pic3},
        {title:"Yogendra Shrivastav", subtitle:"Costume designer", img:pic},
        {title:"Lee Luis", subtitle:"Interior Designer", img:pic4},
        {title:"Nicole Geri", subtitle:"Fashion Designer", img:pic5},
        
    ];
    return (
        <div className="carousel" >
            <div className="carouselInner" style={{backgroundImage:`url(${images[currImg].img})`}} >

                <div className="left" onClick={()=>currImg > 0 && setCurrImg(currImg - 1)}>
                    <ArrowBackIosIcon style={{fontSize : 30}}/>
                </div>
                <div className="center">
                    <h1 style={{color:'white'}}>{images[currImg].title}</h1>
                    <p style={{color:'white'}}>{images[currImg].subtitle}</p>
                </div>
                <div className="right" onClick={()=>currImg < images.length-1 && setCurrImg(currImg + 1)} >
                    <ArrowForwardIosIcon style={{fontSize : 30}}/>
                </div>
            </div>
        </div>
    )
}

export default Carousel
