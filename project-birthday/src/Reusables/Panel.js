import React from 'react';
import "./Panel.scss";

const Panel = ({title, description}) => {
    return (
        <div className="panelDiv">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    )
}



export default Panel;
