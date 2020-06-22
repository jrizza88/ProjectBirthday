import React, {useState} from 'react';
import "./Donate.scss"
import blue from "../../images/blue_birthday_background.jpg"

const Donate = () => {
    return (
    <div className="donateContainer">
        <div className="donationImageSection">
            <ul className="imageNav">
                <li className="tabNav"><a><span className="imgHolder" style={{backgroundImage: 'url('+blue+') '}}><section className="title">Black Lives</section></span></a></li>
                <li className="tabNav"><a><section className="title">Latinx Power</section><span className="imgHolder" src=""></span></a></li>
                <li className="tabNav"><a><section className="title">Black Trans</section><span className="imgHolder" src=""></span></a></li>
                <li className="tabNav"><a><section className="title">Mental Health</section><span className="imgHolder" src=""></span></a></li>
            </ul>
        </div>
        <div className="donationInfoSection">
            <h2>Donate to a cause</h2>
        
            <h3>Please donate to one of four causes</h3>
            that are near and dear to my heart. 
                These donations go to a local based organization that is in complete support of the movements, ranging from ....
                Org 1 supports the Black Lives Matter movement, Org 2 supports the Latinx in that, Org 3 supports Mental Health Endeavour, 
                and Org 4 supports formely incarcerated men who are in need of mental health services to get their feet off the ground. 
        </div>
    </div>
    )
}

export default Donate;