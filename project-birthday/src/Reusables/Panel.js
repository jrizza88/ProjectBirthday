import React from 'react';
import "./Panel.scss";

const Panel = ({title, description}) => {
    return (
        <div className="panelDiv">
            <div className="titleMain">{title}</div>
            <div className="descriptionMain">{description}</div>
        </div>
    )
}



export default Panel;
