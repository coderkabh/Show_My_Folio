import React, { Component } from 'react';
import '../Component-Styles/HeaderIndex.css';

function HeaderIndex(props){
    return(
        <>
            <ul id="unordered">
                <li id="logo">{props.image}</li>
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