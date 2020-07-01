import React from 'react';
import "./Panel.scss";

const Panel = ({title, description, image}) => {
    return (
        <div className="panelDiv">
            <div className="titleMain">{title}</div>
            <div className="descriptionMain">   <img className="avatar" src={image} alt="party" />{description}</div>
            <img className="avatarMobile" src={image} alt="party mobile" />
            <div className="descriptionMainMobile">{description}</div>
        </div>
    )
}



export default Panel;
