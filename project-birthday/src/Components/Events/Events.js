import React from 'react';
import "./Events.scss"
import jamarParty from "../../images/jamar_party.png"

const Events = () => {
    return (
    <div className="eventContainer">
        <div className="mainTitleEvent">
            <h2>Events!</h2>
            <img className="imageAvatar" src={jamarParty} alt="party" />
            <div className="eventDiv">
                Coming soon! <br/> Ideally, these events will support <br /> black and brown businesses.
            </div>
        </div>
    </div>
    )
}

export default Events;