import React from 'react';
import "./Panel.scss";

const Panel = ({title, description, description2, image}) => {
    return (
        <div className="panelDiv">
            <div className="titleMain">{title}</div>
    <div className="descriptionMain">   
    <img className="avatar" src={image} alt="party" />
    <div className="desc"> 
        No Facebook? No Problem. Project Birthday is meant to be a combination of promoting just causes, increase internet knowledge and protection, and celebrate... me! Support one of four organizations that support Black and Brown communities. <br/> <br/> You do not have to be tech savy to protect yourself on the internet. Celebrating me means celebrating us all. I want to see us all continue to bring awareness, fight for change, and to protect ourselves in real life and cyber space..
    </div>
     </div>
            <img className="avatarMobile" src={image} alt="party mobile" />
            <div className="descriptionMainMobile">No Facebook? No Problem. Project Birthday is meant to be a combination of promoting just causes, increase internet knowledge and protection, and celebrate... me! Support one of four organizations that support Black and Brown communities. <br/> <br/> You do not have to be tech savy to protect yourself on the internet. Celebrating me means celebrating us all. I want to see us all continue to bring awareness, fight for change, and to protect ourselves in real life and cyber space.</div>
        </div>
    )
}



export default Panel;
