import React, { Component } from 'react';
import '../Component-Styles/HeaderIndex.css';

function HeaderIndex(props){
    return(
        <>
            <ul id="unordered">
                <li id="item">{props.option1}</li>
                <li id="item">{props.option2}</li>
                <li id="item">{props.option3}</li>
                <li id="item">{props.option4}</li>
                <li id="item">{props.option5}</li>
            </ul>
        </>
    );
}
export default HeaderIndex;