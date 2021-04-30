import React from 'react'
import '../component-Styles/AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function AboutUs() {
    return (
        <div className="about-us">
            <div className="container-fluid">
                <div className="row header">
                    <h1>Show My Folio </h1>
                    <p>
                        It is a website which creates a portfolio for you.It is made by a group of college 
                        students from GLA University under the mentorship of our beloved Sir,
                        <span>Late Mr Anand Prakash Gupta</span> 
                    </p>
                </div>
                <div className="row header2">
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
                </div>
            </div>
        </div>
    )
}

export default AboutUs
