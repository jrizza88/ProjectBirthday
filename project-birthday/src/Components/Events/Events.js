import React, {useState} from 'react';
import "./Events.scss"
import jamarParty from "../../images/jamar_party.png"

const Events = () => {
    return (
    <div className="eventContainer">
        <div className="mainTitleEvent">
            <h2>Bday events!</h2>
            <img className="imageAvatar" src={jamarParty} alt="party" />
            <div className="eventDiv">
                Coming soon! (Ideally, as in like, now ish)
            </div>
        </div>
    </div>
    )
}

export default Events;