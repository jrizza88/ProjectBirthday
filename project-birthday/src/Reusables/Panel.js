import React from 'react';

const Panel = ({title, description}) => {
    return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    )
}

export default Panel;