import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component-Styles/Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <div>
            <div className="main-footer">
                <div className="container">
                    <div className="row" >
                        <div className="col-md-3 col-sm-6 ">
                            <h4>Contact Us </h4>
                            <ul className="list-unstyled">
                                <li>Akansha Saxena</li>
                                <li>Kanishk Bharadwaj</li>
                                <li>Anubhav Bhardwaj</li>
                                <li>Vivek Pandey</li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6 ">
                            <h4>Social Handles </h4>
                            <ul className="list-unstyled">
                                <li><InstagramIcon/> </li>
                                <li><FacebookIcon/> </li>
                                <li><GitHubIcon/> </li>
                                <li><YouTubeIcon/> </li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6 ">
                            {/* <h4>Lorem ipsum </h4> */}
                            <ul className="list-unstyled">
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Register with us</li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>

                    <div className="fooer-bottom">
                        <p className="copyright">
                            &copy;{new Date().getFullYear} - All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
