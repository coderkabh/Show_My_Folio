import React from 'react';
import  "../component-Styles/Header.css";
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

function HeaderIndex(props){
    return(
        <>
            <ul id="unordered">
                <li id="logo">
                <Link to="/">
                <img src={props.logo} alt="logo-pic"/>
                </Link>
                </li>
                <li class="item"><NavLink to={props.link1}>{props.option1}</NavLink></li>
                <li class="item"><NavLink to={props.link2}>{props.option2}</NavLink></li>
                <li class="item"><NavLink to={props.link3}>{props.option3}</NavLink></li>
                <li class="item"><NavLink to={props.link4}>{props.option4}</NavLink></li>
                <li class="item"><NavLink to={props.link5}>{props.option5}</NavLink></li>
            </ul>
        </>
    );
}
export default HeaderIndex;