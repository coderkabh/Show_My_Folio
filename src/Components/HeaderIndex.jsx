import React, { Component } from 'react';
import  "../component-Styles/Header.css";

function HeaderIndex(props){
    return(
        <>
            <ul id="unordered">
                <li id="logo"><img src={props.logo}/></li>
                <li class="item"><a href="#">{props.option1}</a></li>
                <li class="item"><a href="#">{props.option2}</a></li>
                <li class="item"><a href="#">{props.option3}</a></li>
                <li class="item"><a href="#">{props.option4}</a></li>
                <li class="item"><a href="#">{props.option5}</a></li>
            </ul>
        </>
    );
}
export default HeaderIndex;